import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';
@Component({
  selector: 'app-comp2',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
    </div>
    <br>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `
})
export class Comp2Component implements OnInit {
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
    // call dataService to collect items
    onGet() {
        this.items = this.dataService.getData().slice(0);
    }
    // Component2 is listening to the Emitter
    ngOnInit() {
        // every time something is emitted this function will be triggered
        this.dataService.pushedData.subscribe(
            data => this.value = data
        );
    }
}
