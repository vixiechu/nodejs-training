const tutorial = require('./tutorial');
console.log(tutorial);


// Extend using EventEmitter class
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1, num2)=>{
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 4);

class Person extends EventEmitter {
  constructor(name){
  super()
  this._name = name;
}
get name(){
  return this._name;
}
}

let vix = new Person('Vix');
let morrigan = new Person('Morrigan');

morrigan.on('name', ()=> {
  console.log('Hello, I am ' + morrigan.name);
})

vix.on('name', ()=> {
  console.log('Hello, I am ' + vix.name);
})

// execute in order emitted in - execute synchronously

vix.emit('name'); // executed first
morrigan.emit('name'); // executed second