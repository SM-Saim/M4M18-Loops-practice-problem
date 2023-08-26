var numbers = [33, 55, 76, 89, 33, 66, 87, 11, 98];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 60) {
    continue;
  }
  console.log(number);
}
