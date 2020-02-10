//four functions that return the sum of the numbers in a given list using a for-loop, a while-loop, recursion, and underscore.
// Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
const tester = [1, 2, 3, 4];

function sumFor (num){
  let sum = 0;
  for (let i = 0; i < length; i++){
    sum = sum + num[i];
  }
  return sum;
}

function sumWhile(num){
  let sum;
  let i = 0;
  while (i < num.length){
    sum += num[i];
    i++;
  }
  return sum;
}

function sumRecursion(num){
  let i = 0;
  if (num.length === 0){
    return 0;
  } else {
    return num[i] + sumRecursion(num[i+1]);
  }
}

function sumTheSimpleWay (num){
  return _.reduce(num, function(memo, num){ return memo + num; }, 0);
}

console.log(sumFor(tester));
console.log(sumRecursion(tester));
console.log(sumTheSimpleWay(tester));
console.log(sumWhile(tester));