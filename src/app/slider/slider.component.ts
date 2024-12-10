import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() imgUrl="";
  @Input() title="";
  @Input() comment="";
  @Input() button="";

}
