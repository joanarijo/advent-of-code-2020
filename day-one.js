// https://adventofcode.com/
// Day 1: Report Repair 
var fs = require("fs");
var numbers = (fs.readFileSync("./input.txt")+"").split("\n");
var numbers = numbers.map(function(num) { return parseInt(num, 10); });

function stepOne(){
for(let number of numbers){
    let result = 2020 - number;
    for (let temp of numbers) {
    // find result in array and mutiply by the first number
      if (result == temp){
        console.log(number * result);
        break;
      }
    }
}
}

stepOne();


