import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-array-comp [StringArrayInput]="inputArr"></app-array-comp>
  `,
  styles: []
})
export class AppComponent {
    inputArr = ["string","tree","cola","soda", "Strawberries", "Oranges"];

}
