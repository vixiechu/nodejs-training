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

morrigan.on('name', () => {
  console.log('Hello, I am ' + morrigan.name);
})

vix.on('name', () => {
  console.log('Hello, I am ' + vix.name);
})

// execute in order emitted in - execute synchronously

vix.emit('name'); // executed first
morrigan.emit('name'); // executed second

//readline Module

const readline = require('readline');
const rl = readline.createInterface({  
  input : process.stdin,
  output : process.stdout });

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

rl.question(`What is ${ num1 } + ${ num2 }? \n`,
(userInput) => {
  if(userInput.trim() == answer) {
    rl.setPrompt(`Wow - You got it! \n`);
    rl.prompt();
    rl.close();

  }
  else {
    rl.setPrompt(`Whoops! That is incorrect - please try again \n`);
    rl.prompt();
    rl.on('line', (userInput) => {
      if(userInput.trim() == answer)
      rl.close();
      else {
        rl.setPrompt(`Whoops! Your answer of ${ userInput} is incorrect - please try again \n`);
        rl.prompt();
      }
    })
  }
})

rl.on('close', () => {
  console.log('That is correct!');
});