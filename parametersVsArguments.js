Parameters vs. Arguments
At first, it can be a bit tricky to know when something is either a parameter
or an argument. The key difference is in where they show up in the code. A
parameter is always going to be a variable name and appears in the function
declaration. On the other hand, an argument is always going to be a value (i.e.
any of the JavaScript data types - a number, a string, a boolean, etc.) and will
 always appear in the code when the function is called or invoked.


 // x and y are parameters in this function declaration
 function add(x, y) {
   // function body
   // Here, `sum` variable has a scope within the function.
   // Such variables defined within a function are called Local variables
   // You can try giving it another name
   var sum = x + y;
   return sum; // return statement
 }

 // 1 and 2 are passed into the function as arguments,
 // and the result returned by the function is stored in a new variable `sum`
 // Here, `sum` is another variable, different from the one used inside the function
 var sum = add(1, 2);
