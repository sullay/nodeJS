var EventEmitter=require("events").EventEmitter;
var event=new EventEmitter();
event.on("some_event",function(arg1,arg2){
    console.log("listener1",arg1,arg2);
});
event.addListener("some_event",function(arg1,arg2){
    console.log("listener2",arg1,arg2);
});
console.log(event.listeners("some_event")); 
console.log(event.listenerCount("some_event"));