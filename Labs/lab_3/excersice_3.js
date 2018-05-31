'use strict';
const EventEmitter = require('events');
class Clock extends EventEmitter{
    constructor(){
        super();
    }

    startTick(){
        let tick = ()=> console.log('Woohoo');
        this.on('tick', tick);
        let simulateTick =  ()=> this.emit('tick');
        setInterval(simulateTick,1000);
    }
}

const newClock = new Clock();
newClock.startTick();