import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="decrease()">-</button>
      {{counterValue}}
      <button (click)="increase()">+</button>      
    </p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  @Input("counterValue") counterValue: number;
  @Output() counterEmitter: EventEmitter<string>;
  @Input() componentCounterValue: number;

  constructor() { 
    // this.counterValue = 0;
    this.counterEmitter = new EventEmitter();
  }

  ngOnInit() {
  }

  increase(){
    this.counterValue ++;
    this.counterEmitter.emit(this.counterValue+"");
    return false;
  }

  decrease(){
    this.counterValue --;
    this.counterEmitter.emit(this.counterValue+"");
    return false;
  }

}
