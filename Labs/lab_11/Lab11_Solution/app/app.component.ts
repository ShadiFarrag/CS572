import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 11';
  counter = 0;
  componentCounterValue = 2009;

  counterUpdated(event){
    this.counter = event;
    this.componentCounterValue = event;
  }

}
