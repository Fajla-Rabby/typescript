//ternary operator
const age: number = 17;
/* if(age >= 18)
{
    console.log("adult");
}
else{
    console.log("Not adult");
} */

age >= 18 ? console.log("adult") : console.log("Not adult");

//nullish coalescing operator
const isAuthenticate = undefined

const result = isAuthenticate ?? "guest";
const result1 = isAuthenticate ? isAuthenticate : "Guest";

console.log({result}, {result1});



