//1. Display "Ajke amar mon valo nei" 39 times.
var num = 1;
while (num <= 39) {
  console.log(num + " Ajke amar mon valo nei");
  num++;
}

// 2.Display numbers between 58 to 98
var number = 58;
while (number <= 98) {
  console.log(number);
  number++;
}

// 3.show all even numbers from 412 to 456
for (var i = 412; i <= 456; i += 2) {
  console.log(i);
}

// 4.Show all odd numbers from 581 to 623
for (var x = 581; x <= 623; x += 2) {
  console.log(x);
}

// 5.Declare an array for all the topics that you have learned last few days display them as an output

var topic = ["Array", "Loop", "Conditional", "Variable", "reverse-loop"];
for (var i = 0; i < topic.length; i++) {
  item = topic[i];
  console.log(item);
}
