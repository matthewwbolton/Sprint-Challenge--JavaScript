// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a, b);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


function add(a, b){
  return a + b;
};

function multiply(a, b){
  return a * b;
};

function greeting(first_name, last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
};


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

      "The function nestedFunction is able to access the variable internal due to closure. nestedFunction is able to reach out of its function scope becasue it is enclosed with references to the the lexical scope or surrounding scope. Due to the fact that the variable internal was defined in nestedFunction's parent, it is able to access it. Functions are able to reach outward for context, however, if a different variable had been defined within the scope of nestedFunction, the parent function, myFunction, would not be able to access it because closure does not allow for inward reference."


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
