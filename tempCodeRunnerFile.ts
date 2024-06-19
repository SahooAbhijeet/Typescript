/*
// * How to assign types to the functions ?
// *
// * We would define the type as what type we are returning. 
//  */

// function sum(a: number, b: number) : number {
//     return a + b;
// }
// console.log (sum(10,45));

// // If we want to send the b variable as the optional parameter then we need to write ? in variable declaration . Here we are returning the b as optional parameter so if we don't pass b while calling the function then we need to define the b (as of now the b is of type undefined so we need to pass something to evaluate the sum)

// function product(a: number, b?: number) : number {
//     return a * (b || 2);
// }
// console.log(product(10));


// // TS doesnot exist at run time it first convert the code in JS and the JS code will actually run.
// // TS is a development tool it will not do type checking at run time all those type checking will happen at compile time. So inorder to handle this we will set up the configurations in our project that if there is any compilation issue then our code will not run but if we bypass all the compilation issue then it will run like normal JS code.

// // If we don't want to return anything from the function then we can do like this something like stuff