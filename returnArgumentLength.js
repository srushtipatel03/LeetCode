//2703. Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.
// Example 1:
// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// Example 2:
// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array.


function argumentsLength(...args) {            
    return args.length;
}

console.log(argumentsLength(5)); // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3
console.log(argumentsLength(8,2,"fixed","we",23,"/")); // Output: 6
