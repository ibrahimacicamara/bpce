import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './second-section.component.html',
  styleUrl: './second-section.component.css'
})
export class SecondSectionComponent {
  @ViewChild("worksView") worksView:ElementRef = {}as ElementRef;
  works:{name:string,link:string,img:string}[]=[
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Commercial-2.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Commercial"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/IT-1.png",
      link:"https://recrutement.bpce.fr/metiers/it",
      name:"IT"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Digital-1.png",
      link:"https://recrutement.bpce.fr/metiers/digital",
      name:"Digital"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Risques-engagements-controles.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Risques"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Finance-de-marche.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Engagements et Contrôles"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Finance-strategie.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Finance de marché"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Finance-strategie.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Finance et Stratégie"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Finance-strategie.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Gestion des opérations et du support clientèle"
    },
    {
      img:"https://recrutement.bpce.fr/app/assets-bpce/uploads/2020/11/Commercial-2.png",
      link:"https://recrutement.bpce.fr/metiers/commercial",
      name:"Marketing"
    },
  ]
  scrollEft(){
  this.worksView.nativeElement.scrollTo({
    left: (this.worksView.nativeElement.scrollLeft -450),
    behavior: 'smooth'
  });
}
scrollRight(){
  this.worksView.nativeElement.scrollTo({
    left: (this.worksView.nativeElement.scrollLeft + 450),
    behavior: 'smooth'
  });
}
}
