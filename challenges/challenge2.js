/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 * 
 *            Hello there, Ducky
 *            MAKE SCHOOL IS AWESOME!!!
 * 
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 * 
 *            When greeting, the program makes sure that typeof name === 'string'.
 *            Since it is an int instead, the catch block will log 'Received an error!'
 *            Then, we get the promise reject message 'Name must be a string!'
 *            Since an error occured, the second .then() body will not be executed,
 *            so the uppercaser() will not be called.
 * 
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 * 
 *            After changing the type of my_str to an int, I was able to fire
 *            off the promise reject for the uppercaser().
 * 
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 *    Last, call spacer() after you call greeter() and uppercaser().
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 * 
 *            👍🏼
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
      }, 1000);
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
        }, 1500);
    });
}


const spacer = async (str) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.split('').join(' '));
    }, 2000)
  });
}

name = 'Ike';
my_str = 'Make school is awesome!!!';
str_to_space = 'I have spaces now.';

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
        return spacer(str_to_space);
    })
    .then((spacerResult) => {
      console.log(spacerResult);
    })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
