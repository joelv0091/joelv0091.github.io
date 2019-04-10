/**
 * HANG BROWSER
 * 
 */
// Store the original
var origCall = Function.prototype.call;
Function.prototype.call = function () {
    // If console.log is allowed to stringify by itself, it will
    // call .call 9 gajillion times. Therefore, lets do it by ourselves.
    console.log("Calling",arguments.callee.name,
             //   Function.prototype.toString.apply(this, []),
                "with:"
          //      ,Array.prototype.slice.apply(arguments, [1]).toString()
               );

    // A trace, for fun
//   console.trace.apply(console, []);
//
   // The call. Apply is the only way we can pass all arguments, so don't touch that!
   origCall.apply(this, arguments);
};











///// ERRRROR   //  BROWSRR CRASH