import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUpperDirective]'
})
export class UpperDirectiveDirective {

  // constructor(private e: ElementRef, private r: Renderer2) {
  //   r.setStyle(e.nativeElement, 'font-size', '22px');
  // }

  constructor(private element: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(element.nativeElement, 'text-transform', 'uppercase');
  }

}
