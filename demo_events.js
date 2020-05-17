
var events = require('events');//events module
var eventEmitter = new events.EventEmitter();
//all event methods & properties are instance of EventEmitter object

//.emit() emits an event.
var eventHandler = function() {
  console.log('Signal received.');
}
eventEmitter.on('signal', eventHandler);

eventEmitter.emit('signal');
