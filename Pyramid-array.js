/*
Write a function that when given a number >= 0, 
returns an Array of ascending length subarrays.

  pyramid(0) => [ ]
  pyramid(1) => [ [1] ]
  pyramid(2) => [ [1], [1, 1] ]
  pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

Note: the subarrays should be filled with 1s
*/


// Solution

function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++) {
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}

// or

function pyramidArray(n) {
  let retVal = [];
  for(let i = 0; i < n; i++) {
    retVal[i] = [];
    for(let j = 0; j < i + 1; j++) {
      retVal[i].push(1);
    }
  }
  return retVal;
}