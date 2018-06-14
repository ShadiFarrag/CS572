import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

// we use Injectable because we need to inject other services in it (LogService)
// we want to use LogService in DataService
// to do that:
// 1: import
// 2: add @Injectable - Make sure it's been initialized at higher level (we used root component to initialize it)
// 3: grab an instance in constructor
@Injectable()
export class DataService {
    constructor(private logService: LogService) {}
    
    private data: string[] = [];

    addData(input: string) {
        this.data.push(input);
        this.logService.logMe('Saved item: ' + input);
    }

    getData() {
        return this.data;
    }
    // A channel so component1 and component2 can exchange data
    pushedData = new EventEmitter<string>();
    pushData(value: string) {
        this.pushedData.emit(value);
    }

}
