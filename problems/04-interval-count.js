/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times

//setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
// setInterval(func, delay, arg1, arg2)
// setInterval(func, delay, arg1, arg2, /* …, */
// // 7:43
// // clearInterval(intervalID)
// // 7:43
// // setTimeout(code)
// // setTimeout(code, delay)

// // setTimeout(functionRef)
// // setTimeout(functionRef, delay)
// // setTimeout(functionRef, delay, param1)
// // setTimeout(functionRef, delay, param1, param2)
// // setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
// // ***********************************************************************/

function intervalCount(cb, delay, amount) {
  let id = setInterval(execute, delay)
  let count = 0;

  function execute() {
    cb()
    count++
    if (count === amount) {
      clearInterval(id)
      id = null;
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
