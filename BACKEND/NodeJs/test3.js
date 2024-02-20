//--------------------------------------------------------------------------//

/* 1st way to do */

// function drivingEligibiltyTest(name, age) {
//   if (age >= 18) console.log(name + " U are eligible");
//   else console.log(name + " U are not Eligible");
// }

// drivingEligibiltyTest("Ashwin", 23);
// drivingEligibiltyTest("Ram", 12);

//------------------------------------------------------------------------//

/* 2nd way to do */

// let data = {
//   name: "ashwin",
//   age: 23,
// };

// function eligible(data) {
//   if (data.age >= 18) console.log(data.name + " U are eligible");
//   else console.log(data.name + " U are not Eligible");
// }
// eligible(data);

//--------------------------------------------------------------------------//
/* 3rd way to do */

// class Eligible() {
//     constructor(nam, age){
//         name:this.name;
//         age:this.age;
//     }

//     eligiblity(nam,age) {
//         if (age >= 18) console.log(nam + " U are eligible");
//         else console.log(nam + " U are not Eligible");
//     }
// }

// let obj1 = new Eligible("ashwin",23);
// obj1.eligiblity();
