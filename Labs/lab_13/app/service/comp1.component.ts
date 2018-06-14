import { Component } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';
@Component({
  selector: 'app-comp1',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send to Component 2</button>
    </div>
    <br>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
    </div>
  `
})
export class Comp1Component {
    value = '';
    items: string[] = [];

    constructor (private logService: LogService, private dataService: DataService) {}
    // call logService
    onLog(value: string) {
        this.logService.logMe(value);
    }
    // call dataService to save new item
    onStore(value: string) {
        this.dataService.addData(value);
    }
    // call dataService to collect items - slice() is to create new array rather than having same reference
    onGet() {
       this.items = this.dataService.getData().slice(0);
    }
    // send msg to Component2 => pushData will emit(value)
    onSend(value: string) {
        this.dataService.pushData(value);
    }
}
