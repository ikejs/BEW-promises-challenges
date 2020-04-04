/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 * 
 *            The greetAndUppercase function is different than a non-
 *            async/await function because it will stop and fetch the
 *            greeting from the result of greet(name), then it will
 *            stop and fetch the uppercasedGreeting from 
 *            uppercaser(greeting), and then it will return the upper-
 *            cased greeting AFTER both have been completed. A non-async
 *            function would have returned null because it won't wait
 *            for greet() and uppercaser() to be resolved.
 * 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 * 
 *            greetAndUppercase() returns a pending promise.
 * 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 * 
 *            The uppercased greeting is logged in the console, because
 *            we're using a .then() to call the console.log() when
 *            the promise is resolved.
 * 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *            👍🏼
 * 
 * 
 *******************************************************************************
 */


 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

const spacer = async (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.split('').join(' '));
    }, 2000)
  });
}

async function greetAndUppercase(name) {
    greeting = await greet(name);
    uppercasedGreeting = await uppercaser(greeting);
    uppercasedGreetingWithSpaces = await spacer(uppercasedGreeting);
    return uppercasedGreetingWithSpaces
}

/* Uncomment me! #1 */
// result = greetAndUppercase('Ducky')
// console.log(result)

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })