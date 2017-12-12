var EventEmitter=require("events").EventEmitter;
var event=new EventEmitter();
var xxx=function(arg1,arg2){
    console.log("listener2",arg1,arg2);
};
event.on("some_event",function(arg1,arg2){
    console.log("listener1",arg1,arg2);
});
event.addListener("some_event",xxx);
event.removeListener("some_event",xxx)
event.emit("some_event",'arg1','arg2');