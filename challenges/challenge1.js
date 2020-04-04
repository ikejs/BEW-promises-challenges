/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *      
 *            The output will be 1, 2, then 3. Even though Step 2 occurs in
 *            the code before Step 3, Step 2 is ran inside of a setTimeout
 *            function. These execute on a separate call stack. The functions
 *            that are invoked in the main scope of the app will run first.
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *            1, 3, 2.
 * 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * 
 *            As setTimeout will always occur on a separate call stack, the order 
 *            will remain the same, even at 0ms. 1, 3, 2.
 *    
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

