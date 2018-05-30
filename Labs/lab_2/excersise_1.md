1. 

setImmediate is to set a call back function to be added on the check queue which will be executed by the event loop right after the event loop finishes with I/O Call Backs.

but setTimeout is to set a callback function to be added on the timers queue in order to be executed by the event loop.


2. 

ProcessNextTick() is to set asynchronous callbacks after the current operation completes and before the event loop continues

setImmediate() is to set asynchronous callbacks to be executed by event loop when when it process the check queue.


3. 10 Core Modules for Node JS:

  'buffer'
  'domain'
  'events'
  'fs'
  'http'
  'https'
  'os'
  'path'
  'util'
  'v8'

