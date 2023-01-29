
// Calling for output(x) defines the value in the viewport

// Calling (y) or (z) results in an error because the values are locked inside the a and b functions, so output() can't access them when called from global scope

// Adding output(y/z) inside the a/b function, then allows the function to be called in browser Dev Tools. This is because they are being called from inside another function! It's in the same scope as the variables it is printing are defined in

// Output() itself is available from anywere as it is defined in the global scope

// Changing the output inside the a/b functions to (x), produces the value of x when called in the viewport. This works because x is a global variable so available inside all code

// Changing the output inside a/b functions to the opposite variable (z/y) also returns an error because z/y aren't global functions, and are locked in the opposite functions