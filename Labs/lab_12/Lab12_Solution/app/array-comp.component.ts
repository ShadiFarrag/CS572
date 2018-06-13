import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-array-comp',
  template: `
    <h3>
      Lab 12 - Work
    </h3>
    <span>Problem 1</span>
    <ul>
      <li appUpperDirective *ngFor="let str of strArrayInput" appMycolor (colorEmitter)="updateColor($event)">
        {{ str }}
      </li>
    </ul>
    <div [appMyVisibility]="false">Heyyyyyyy!</div> 
    <div>Color Selected is: {{colorValue}}</div>
  `,
  styles: []
})
export class ArrayCompComponent implements OnInit {
  @Input("StringArrayInput") strArrayInput;
  
  colorValue:string = "Black";
  
  constructor() { }

  ngOnInit() {
  }

  updateColor(color){
    this.colorValue = color;
  }

}
