import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute} from '@angular/router'; 
import { FarmsDBService } from '../farms-db.service';

@Component({
  selector: 'app-farm-details',
  template: `
    <div>
      <br/>
      <div>Farm: {{farmDetails.Farm}}</div>
      <div>Produce</div>
      <ul>
        <li *ngFor="let prd of farmDetails.produce">{{prd}}</li>
      </ul>
    </div>
    
  `,
  styles: []
})
export class FarmDetailsComponent implements OnInit {
  id;
  farmDetails;

  constructor(private route:ActivatedRoute, private serv: FarmsDBService) {
    route.params.subscribe(params=>{
      this.id = params['id'];
      this.farmDetails = serv.getDataAt(this.id);
      // console.log('Received ID: ' + this.id);
      // console.log('Data: ' + this.farmDetails._id);
    });

   }

  ngOnInit() {
  }

}
