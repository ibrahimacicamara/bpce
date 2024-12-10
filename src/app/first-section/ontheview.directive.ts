import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOntheview]',
  standalone: true
})
export class OntheviewDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }

}
