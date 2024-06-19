const result = {
    name: 'Abhi',
    marks: 99
}
console.log(result);
/*
 * The type of the above raw object is inferred as {name: strinig, marks:number} something like given below object
* const result = {name: string, marks: number} = {
*      name: "Abhi",
*      marks: 99
*   } 
 */

// updating an old key value pair 
result.marks = 99;

//adding new key value pair
// result.address = "XYZ";

/*
* Now the above statement will throw an compiler error because in the type {name:string, marks:number} we never mentioned anything about address
* That's why TS thinks we are violating the default type
* To solve this we add a optional address parameter while definingthe object
*const result = {name: string, marks: number,address?: string} = {
*      name: "Abhi",
*      marks: 99,
*      address: "XYZ"
*   } 
*/

// If there is something that came everytime and that is const like the differnet object hace same type so we cam define that type as outside and use like a aliases . Like below is the implementationms

//Detail is like a alias to {name: string, marks: number, address?: string}
type Detail = {name: string, marks: number, address?: string};

const result1 : Detail = {
    name: "Abhi",
    marks: 99
}

const result2 : Detail = {
    name: "Avi",
    marks: 95
}