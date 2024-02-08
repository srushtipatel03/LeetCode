// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 
// more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:
// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.


function createCounter(n) {
    let counterValue = n;
      function counter() {
      return counterValue++;
    }
  
    return counter;
  }
  
  const myCounter = createCounter(10);
  
  console.log(myCounter()); // Output: 10
  console.log(myCounter()); // Output: 11
  console.log(myCounter()); // Output: 12
  console.log(myCounter()); // Output: 13
  console.log(myCounter()); // Output: 13