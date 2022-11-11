// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => n * 10

console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~")
console.log("times10 returns:", times10(9))

// Task 2: Use an object to cache the results of your times10 function.
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {}

const memoTimes10 = (n) => {
    if (n in cache){// is n a property inside the cache object? (property lookup : O(1))
        console.log(`fetching from cache: `, n)
        console.log(`cache[n] is: ${cache[n]}`)
        return cache[n] //if n is a property inside the cache object then just return it's value
    } else { // if n is NOT a property inside of the cache object
        console.log('Calculating result')
        let result = times10(n)// the result variable will be the result that the function returns
        cache[n] = result // this is adding the property (key) n to have a (value) of result
        return result // returning the result
    }
}

console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~")
console.log("Task 2 calculated value:", memoTimes10(9)) // calculated
console.log("Task 2 cached value:", memoTimes10(9)) // cached
