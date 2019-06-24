// const tutorial = require('./tutorial');
// console.log(tutorial);


// // Extend using EventEmitter class
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial',(num1, num2)=>{
//    console.log(num1 + num2);
// });

//  eventEmitter.emit('tutorial', 1, 4);

//  class Person extends EventEmitter {
//    constructor(name){
//    super()
//    this._name = name;
//  }
//  get name(){
//    return this._name;
//  }
//  }

//  let vix = new Person('Vix');
//  let morrigan = new Person('Morrigan');

//  morrigan.on('name', () => {
//     console.log('Hello, I am ' + morrigan.name);
// })

// vix.on('name', () => {
//    console.log('Hello, I am ' + vix.name);
// })

// // execute in order emitted in - execute synchronously

// vix.emit('name'); // executed first
// morrigan.emit('name'); // executed second

// //readline Module - interactive terminal quiz

// const readline = require('readline');
// const rl = readline.createInterface({  
//    input : process.stdin,
//    output : process.stdout });

//  let num1 = Math.floor((Math.random() * 10) + 1);
//  let num2 = Math.floor((Math.random() * 10) + 1);
//  let answer = num1 + num2;

//  rl.question(`What is ${ num1 } + ${ num2 }? \n`,
//  (userInput) => {
//    if(userInput.trim() == answer) {
//      rl.setPrompt(`Wow - You got it first time! \n`);
//      rl.prompt();
//      rl.close();

//    }
//    else {
//      rl.setPrompt(`Whoops! That is incorrect - please try again \n`);
//      rl.prompt();
//      rl.on('line', (userInput) => {
//        if(userInput.trim() == answer)
//        rl.close();
//        else {
//          rl.setPrompt(`Whoops! Your answer of ${ userInput } is incorrect - please try again \n`);
//          rl.prompt();
//        }
//      })
//    }
//  })

//  rl.on('close', () => {
//    console.log('That is correct!');
// });

// file system module - file management capabilities 
// comment them out in stages
const fs = require('fs');

// create a file - stage 1 
fs.writeFile('example.txt', "Example file creation text for learning", (err)=>{
   if (err)
   console.log(err);
   else{
   console.log('File successfully created!');
  fs.readFile('example.txt', 'utf-8', (err, file) => {
     if(err)
       console.log(err);
     else
      console.log(file);
  });
}
});

// rename a file - stage 2
fs.rename('example.txt', 'example2.txt', (err) => {
  if (err)
    console.log(err);
  else
    console.log('File has been renamed successfully');
});

// append data to file - stage 3
fs.appendFile('example2.txt', 'information that is appended', (err) => {
  if (err)
    console.log(err);
  else
    console.log('Data successfully appended within file');
});

// delete a file - stage 4
fs.unlink('example2.txt', (err) => {
  if (err)
    console.log(err);
  else
    console.log('File has been successfully deleted');
});