import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to Lab 13</h1>
    <a [routerLink]="['/farmsMarket']">Farms Market</a>
    <router-outlet></router-outlet>
  `,
  providers: []
})
export class AppComponent {
  

}
