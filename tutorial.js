const sum = (num1, num2) => num1 + num2;

const PI = 3.14;

class MathObject {
  constructor() {
    console.log('object created');
  }
}
// individually make available/export - long winded & repetitive
// module.exports.sum = sum; -- //tells node to make available elsewhere
// module.exports.PI = PI;
// module.exports.MathObject = MathObject;

// can be done this way - cleaner code, less repetitive
module.exports = {sum : sum, PI : PI, MathObject : MathObject};
