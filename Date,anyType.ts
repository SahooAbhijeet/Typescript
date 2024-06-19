/*
 * Date object in TS is as same as JS
 */

const date = new Date(2000,10,19);
console.log(date.getMonth());

/* Any Type in TS
* If we want to define the variable with the type any then either mention like this ": any" while declaring the variable or else another way of using any type in TS is donot assign a value while declaring a variable
*/
// Another way of using the any type in TS
let x ;
x = 10;
x = "10";
console.log(x);
