import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class FarmsDBService {
  
  private data: any[];

  getData(){
    return this.data;
  }

  getDataAt(index){

    for(let val of this.data){
      if(val._id == index){
        return val;
      }
    }

    return null;
  }

  constructor() { 

    this.data= [
        {_id:1, Farm:"Natural Prairie", produce:['lettuce','tomato', 'cuccumbers']},
        {_id:2, Farm:"Natural 2", produce:['lettuce','cuccumbers']},
        {_id:3, Farm:"Natural 3", produce:['tomato', 'cuccumbers']},
        {_id:4, Farm:"Natural 4", produce:['lettuce','mangoo']},
    ];

  }
}
