import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBarComponent } from "./app-bar/app-bar.component";
import { FirstSectionComponent } from "./first-section/first-section.component";
import { SecondSectionComponent } from "./second-section/second-section.component";
import { StickyBarComponent } from "./sticky-bar/sticky-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppBarComponent, FirstSectionComponent, SecondSectionComponent, StickyBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('image') image: ElementRef={} as ElementRef;
  @ViewChild('stickyBar') stickyBar: ElementRef={} as ElementRef;
  constructor(private renderer:Renderer2){}
  title = 'bpce';
  
  @HostListener('window:scroll', ['$event'])  
  isScrolledIntoView(){    
    if (this.image){
      const rect = this.image.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      // const bottomShown = rect.bottom <= window.innerHeight;
      if(!topShown){
        this.renderer.setStyle(this.stickyBar.nativeElement,"display","unset");
        this.renderer.setStyle(this.stickyBar.nativeElement,"position","sticky");
        this.renderer.setStyle(this.stickyBar.nativeElement,"top","0px");
        console.log("is out of the view")        

      }else{
        
        this.renderer.setStyle(this.stickyBar.nativeElement,"display","none");
        console.log("is on the view")
      }
    }
  }
}
