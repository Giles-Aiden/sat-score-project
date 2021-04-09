const fs = require('fs');
const data = fs.readFileSync('./input.txt').toString().split(/ *, *| *\n/);

// Problem 1
console.log('----- Problem 1 -----');

let item = [[],[]];
let items = [];
for (let i=0; i<data.length-1; i++) {
  if(i%10==0) {
    item = [];
  }
  item.push(parseInt(data[i], 10));
  items.push(item);
}
console.table(items);

//Problem 2
console.log('----- Problem 2 -----');

let min;
let max;
let minMax = [];
for (let x=0; x<items.length; x++) {
  let min;
  let max;
  for (let i=0; i<items[x].length; i++) {
    if (min == undefined && max == undefined) {
      min = items[x][i];
      max = items[x][i];
    } else if (items[x][i] < min) {
      min = items[x][i];
    } else if (items[x][i] > max) {
      max = items[x][i];
    }
  }
  minMax.push([min,max]);
}
for (let i=0; i<minMax.length; i++) {
  minMax[i] = minMax[i][1] - minMax[i][0];
}
console.log(minMax);

//Problem 3
console.log('----- Problem 3 -----');
let averages = [];
for (let i=0; i<items.length; i++) {
  let avg = 0;
  items[i].forEach((e) => avg+=e);
  averages.push(avg);
}
console.log(averages);
