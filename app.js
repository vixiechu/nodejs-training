// const tutorial = require('./tutorial');
// console.log(tutorial);


// // EVENTEMITTER CLASS - EXTEND USING
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

// // READLINE MODULE - Interactive Terminal!

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

// FILE SYSTEM MODULE - WORKING WITH FILES
// comment them out in stages
// const fs = require('fs');

// // create a file - stage 1 
// fs.writeFile('example.txt', "Example file creation text for learning", (err)=>{
//    if (err)
//    console.log(err);
//    else{
//    console.log('File successfully created!');
//   fs.readFile('example.txt', 'utf-8', (err, file) => {
//      if(err)
//        console.log(err);
//      else
//       console.log(file);
//   });
// }
// });

// // rename a file - stage 2
// fs.rename('example.txt', 'example2.txt', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('File has been renamed successfully');
// });

// // append data to file - stage 3
// fs.appendFile('example2.txt', 'information that is appended', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('Data successfully appended within file');
// });

// // delete a file - stage 4
// fs.unlink('example2.txt', (err) => {
//   if (err)
//     console.log(err);
//   else
//     console.log('File has been successfully deleted');
// });

// // FILE SYSTEM MODULE - PHASE 2 - WORKING WITH FOLDERS
// const fs = require('fs');

// // create a folder
// fs.mkdir('tutorial', (err) => {
//       if (err)
//         console.log(err);
//       else {
//         console.log('Folder Successfully created');
//       }
//     });

// // delete a folder (empty)
// fs.rmdir('tutorial', (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log('Folder has been successfully deleted');
//   }
// });

// // add file to directory
// fs.writeFile('./tutorial/newFile.txt', 'some newly required data', (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log('File successfully created in tutorial folder');
//   }
// });

// // delete a folder (containing file)
// fs.unlink('./tutorial/newFile.txt', (err) => {
//   if (err)
//     console.log(err);
//   else {
//     fs.rmdir('tutorial', (err) => {
//       if (err)
//         console.log(err);
//       else {
//         console.log('Folder has been successfully deleted');
//       }
//     });
//   }
// });

// // delete folder with multiple files - delete each file first
// fs.readdir('testFolder', (err, files) => {
//   if (err)
//     console.log(err);
//   else {
//       for(let file of files){
//         fs.unlink('./testFolder/' + file, (err) => {
//           if(err)
//             console.log(err);
//             else{
//               console.log('File successfully deleted');
//             }
//         })
//       }
//   }
// });

// WORKING WITH READABLE & WRITABLE STREAMS
const fs = require('fs');

// create readable stream
const readStream = fs.createReadStream('./example.txt', 'utf-8');
const writeStream = fs.createWriteStream('example2.txt');

readStream.on('data', (chunk) => {
  writeStream.write(chunk); // move chunk to new file using writeStream
});

// WHY USE STREAMS?
// large text files - file size larger than buffer error will occur
// a stream uses buffer but not full one - very small buffer used
// this allows us to read file in chunks - not all at once - below code
const readStream2 = fs.createReadStream('./largefile.txt', 'utf-8');
readStream2.on('data', (chunk) => {
  console.log(chunk);
});
