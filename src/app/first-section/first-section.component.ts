import { NgFor } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, Renderer2, ViewChild } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-first-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './first-section.component.html',
  styleUrl: './first-section.component.css'
})
export class FirstSectionComponent {
  constructor(private renderer:Renderer2){}
  @Output() barIsVisible = new EventEmitter<boolean>();
  @ViewChild('mybar', {static: false}) private bar: ElementRef<HTMLDivElement>={} as ElementRef<HTMLDivElement> ;
  @ViewChild('worksview') worksView: ElementRef={}as ElementRef;
  @ViewChild('slider') slider: ElementRef={}as ElementRef;
  @ViewChild('child') child: ElementRef={}as ElementRef;
  workList:{title:string,type:string,id:string,location:string,company:string,link:string}[]=[
    { title:"Développeur Full Stack H/F",
      type:"CDI",
      id:"CEBPL09416",
      location:"ORVAULT",
      company:"caisse d'épargne",
      link:""},
    { title:"Développeur Fullstack.net / Angular H/F",
      type:"CDI",
      id:"CEIDF10971",
      location:"Paris",
      company:"BPCE",
    link:"https://recrutement.bpce.fr/job/developpeur-fullstack-net-angular-h-f"},
    { title:"Stage - 6 mois - Analyste Recherche (Immobilier) F/H",
      type:"Stage",      
      id:"15496",
      location:"Paris",
      company:"BPCE",
      link:"https://recrutement.bpce.fr/job/stage-6-mois-analyste-recherche-immobilier-f-h" },
    { title:"Contrôleur Financier F/H",
      type:"CDI",
      id:"CCOOP06489",
      location:"NANTERRE",
      company:"BRED",
      link:"https://recrutement.bpce.fr/job/controleur-financier-f-h-cdi"},
    { title:"Développeur Full Stack H/F",
      type:"CDI",
      id:"CEBPL09416",
      location:"ORVAULT",
      company:"caisse d'épargne",
      link:""},
    { title:"Développeur Fullstack.net / Angular H/F",
      type:"CDI",
      id:"CEIDF10971",
      location:"Paris",
      company:"BPCE",
    link:"https://recrutement.bpce.fr/job/developpeur-fullstack-net-angular-h-f"},
    { title:"Développeur Full Stack (F/H) - PARIS",
      type:"CDI",
      id:"BPCE_INFO01094",
      location:"Paris",
      company:"BPCE",
    link:"https://recrutement.bpce.fr/job/developpeur-full-stack-f-h-paris"},
    { title:"Stage - 6 mois - Analyste Recherche (Immobilier) F/H",
      type:"Stage",      
      id:"15496",
      location:"Paris",
      company:"AEW",
      link:"https://recrutement.bpce.fr/job/stage-6-mois-analyste-recherche-immobilier-f-h" },
    { title:"Contrôleur Financier F/H",
      type:"CDI",
      id:"CCOOP06489",
      location:"NANTERRE",
      company:"BRED",
      link:"https://recrutement.bpce.fr/job/controleur-financier-f-h-cdi"},
    { title:"Développeur Full Stack H/F",
      type:"CDI",
      id:"CEBPL09416",
      location:"ORVAULT",
      company:"caisse d'épargne",
      link:""},
    { title:"Développeur Fullstack.net / Angular H/F",
      type:"CDI",
      id:"CEIDF10971",
      location:"Paris",
      company:"BPCE",
    link:"https://recrutement.bpce.fr/job/developpeur-fullstack-net-angular-h-f"},
    { title:"Développeur Full Stack (F/H) - PARIS",
      type:"CDI",
      id:"BPCE_INFO01094",
      location:"Paris",
      company:"BPCE",
    link:"https://recrutement.bpce.fr/job/developpeur-full-stack-f-h-paris"},
    { title:"Stage - 6 mois - Analyste Recherche (Immobilier) F/H",
      type:"Stage",      
      id:"15496",
      location:"Paris",
      company:"AEW",
      link:"https://recrutement.bpce.fr/job/stage-6-mois-analyste-recherche-immobilier-f-h" },
    { title:"Contrôleur Financier F/H",
      type:"CDI",
      id:"CCOOP06489",
      location:"NANTERRE",
      company:"BRED",
      link:"https://recrutement.bpce.fr/job/controleur-financier-f-h-cdi"},
    { title:"Développeur Full Stack (F/H) - PARIS",
      type:"CDI",
      id:"BPCE_INFO01094",
      location:"Paris",
      company:"BPCE",
    link:"https://recrutement.bpce.fr/job/developpeur-full-stack-f-h-paris"},
    
  ];

  likedWork:number[]=[];
  news:{comment:string,imgUrl:string,button:string,title:string,link:string}[]=[
    {comment:"",
      imgUrl:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2024/05/design-sans-titre-actus-bpce-tours.png",
      button:"En savoir plus",
      title:"Toute l’actualité du groupe BPCE", 
      link:"https://www.groupebpce.com/toute-l-actualite/"   },
    {comment:"Vous recherchez un stage, une alternance ou votre première emploi ? Cette vidéo va vous plaire",
      imgUrl:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2024/05/groupe-bpce-2000-33.jpg",
      button:"Par ici",
      title:"Politique Jeune du Groupe BPCE", 
      link:"https://www.youtube.com/watch?v=GtnDzKGtZkg"   }
  ]

  scrollLeft(){
    this.worksView.nativeElement.scrollLeft-=1000
  }
  scrollRight(){
    this.worksView.nativeElement.scrollLeft+=1000
  }
  num:number = 0;
  intervalId = setInterval(()=>this.opensnack(), 3000);

  opensnack() {
    this.num++
    if(this.num%2==1){
      this.slider.nativeElement.scrollTo({
        left: 1300,
        behavior: 'smooth'
      });
    }else{      
      this.slider.nativeElement.scrollTo({
        left: -1300,
        behavior: 'smooth'
      });
    }    
  }
}
