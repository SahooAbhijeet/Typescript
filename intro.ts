/*
* Types in TS: -> Below all are the primitive types in TS
* string ->  store the text
* number -> integers, realno.
* boolean -> true, false
* undefined
* null
* bignt
* symbol -> there are the special object that mimics themselves as a string
 */

// Declaring a variable in TS
/*
* We can declare it by using var,let,const datatype
* var <variable_name> : <variable_type> = <value> --> This is known as type annotation or type signature
 */

var id : number = 5;
console.log(id);

let firstName = "Abhijeet" // here if we don't write string, TS is smart enough to understand that firstname will be a string as anything written in double quotes represent a string 
// firstname = 19; // TSC(TypeScript-Compiler) will throw an error
var lastname : string = "Sahoo"
// lastname = 20; // TSC will throw an error in case of var datatype also

// Union of types 
let userId : number | string = "Abhi";// here userid can both have the types string and number this is the union of types that if here the string will initialise as number later the TSC donot throw an error.
userId = 10;

/*
* Arrays in TS
* Array declaration and initialisation syntax in TS
* let <variable_name> : type[] = [val1,val2,val3];
 */

let ids : number[] = [1,2,3,4,5,6]; // here we restricted the type of ids to number 
// But in case to declare the heterogenous array like we does in JS that we can store multiple type in one array that thing we can acheive here by using a type in TS as "any"
let hetero : (number | string | boolean)[] = [1,2,"mine",false];
console.log(hetero);
console.log(ids);


let id1 : any[] = [1,2,"mine"];
console.log(id1);

// define the array in form of tuple
// Tuple --> Set of multiple values
let hetero1 : [number, string, boolean] = [1,"mine",false];
console.log(hetero1);
