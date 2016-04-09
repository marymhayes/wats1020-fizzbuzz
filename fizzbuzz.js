// Place your FizzBuzz code here. 

// Count through numbers 1-20 and figure out if each one is divisible by 3, 5, or both.
for (i=1; i<=20; i++){
// For each number do the following check:

// If divisible by 3
if (i % 3 === 0){
  // If yes, is divisible by 5
  if (i % 5 === 0){
    // If yes 3 and 5, print FizzBuzz 
    console.log('FizzBuzz');
} else {
    // If no, print Fizz
    console.log('Fizz');
  }
} else if (i % 5 === 0){
// If divisible by 5 print Buzz
  console.log('Buzz');
} else {
  // If neither print number
  console.log(i);  
}
}



