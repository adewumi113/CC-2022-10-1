//find average in an array
// we initiate the accumulator by using sum = 0
//we use forEach method to add current value to sum and then divide the final sum by the length of the array
function aves (arr){
    let sum = 0;
  arr.forEach( a => sum += a )
  console.log ( sum / arr.length)
  }
  //we test function aves by calling it
  aves ([3, 1, 8]); //3+1+8 / 3 = 4