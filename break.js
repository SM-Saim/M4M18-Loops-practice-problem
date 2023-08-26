// Using break in for loop
for (var i = 1; i < 9; i++) {
  if (i > 6) {
    break;
  }
  console.log(i);
}

//using break in while loop
var toffy = 1;
while (toffy <= 10) {
  if (toffy > 6) {
    break;
  }
  console.log("Toffy dao");
  toffy++;
}

//
var numbers = [33, 55, 76, 89, 33, 66, 87, 11, 98];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 66) {
    break;
  }
  console.log(number);
}
