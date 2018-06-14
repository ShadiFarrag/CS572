import { Component, OnInit } from '@angular/core';
import { FarmsDBService } from '../farms-db.service';

@Component({
  selector: 'app-farms-component',
  template: `
      <p>Farms:</p>
      <div>
        <ul>
          <li *ngFor="let farm of farmsData">
            <a [routerLink]="['farmDetails',farm._id]">{{farm.Farm}}</a>
          </li>
        </ul>
      </div>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class FarmsComponentComponent implements OnInit {

  farmsData;
  constructor(private dbServ:FarmsDBService) { 
    this.farmsData = dbServ.getData();
  }

  ngOnInit() {
  }

}
