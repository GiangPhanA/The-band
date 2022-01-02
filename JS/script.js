// function* generateId() {
//     yield 1;
//     console.log('continue to run');
//     yield* myName();

//     console.log('Resume');
//     return 3;
//     //throw (error);

// }

// function* myName(){
//     yield "Giang";
// }

// const newId = generateId();

// console.log(newId.next());
// console.log(newId.next());
// console.log(newId.next());

// // console.log(generateId().next());
// // console.log(generateId().next());

// // function* generateId(){
// //     let i=0;
// //     while(true){
// //         i++;
// //         yield i;
// //     }
// // }

// // const newId = generateId();
// // console.log(newId.next());
// // console.log(newId.next());
// // console.log(newId.next());

// // function* loopRange(from, to) {
// //     for (let i = from; i <= to; i++) {
// //         yield i;
// //     }
// //     return to + 1;
// // }
// // const range = loopRange(0, 10);
// // for (const i of range) {
// //     console.log(i);
// // }

// // test lại nhá

// // function* genSober() {
// //     while(true) {
// //       try {
// //          yield 42;
// //       } catch(e) {
// //         console.log("I don't drink at work!");
// //       }
// //     }
// //   }
  
//   var g = genSober();
//   console.log(g.next());
//   // { value: 42, done: false }
//   g.throw("Have some wine...");
//   console.log(g.next());
  
//   function* genDrunk() {
//     while(true) {
//       yield 42;
//     }
//   }
  
// g = genDrunk();
// console.log(g.next());
// try {
//   g.throw("Have some wine...");
// }
// catch (e) {
// }
// console.log(g.next());
  


