import { Directive,Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})
export class MyVisibilityDirective {

  constructor(private e: ElementRef, private r: Renderer2) {
  }


  @Input() appMyVisibility:boolean;

  ngOnInit(){
  
    let displayValue = "block";
    if(!this.appMyVisibility){
      displayValue = "none";
    }
    this.r.setStyle(this.e.nativeElement, 'display', displayValue);
  
  }

}
