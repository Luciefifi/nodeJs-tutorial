const logEvents = require('./logEvent')
const  eventEmitter = require('events')


class MyEmitter extends eventEmitter{

};

//initializing an object
const myEmitter = new MyEmitter ()

myEmitter.on('log' , (msg)=> logEvents(msg));
setTimeout(()=>{
    myEmitter.emit('log' , 'log event emitted !!!')
} , 2000)