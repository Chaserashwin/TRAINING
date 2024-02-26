const EventEmitter = require("events");

const emitter = new EventEmitter();

// On
emitter.on("Event", () => {
  console.log("Hello world");
});

emitter.addListener("Event", () => {
  console.log("Hello world");
});

//Emit
emitter.emit("Event");
