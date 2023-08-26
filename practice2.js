//6. Create an array of all the mobile phone and disply them by using a while loop

var mobile = ["iphone", "samsung", "Pixel", "xaomi", "One-plus"];
var n = 0;
while (n < mobile.length) {
  var allMobile = mobile[n];
  console.log(allMobile);
  n++;
}

// 7. Run a loop from 30 to 86 . This loop wil stop if the values get higher  than 40

for (var i = 30; i <= 86; i++) {
  if (i > 40) {
    break;
  }
  console.log(i);
}

// 8.Write the price of book tha you have. Display the prices if the prices is lower than 200.
var booksPrice = [33, 67, 145, 225, 830, 312, 199, 44, 150, 760];
for (var i = 0; i < booksPrice.length; i++) {
  var prices = booksPrice[i];
  if (prices > 200) {
    continue;
  }
  console.log(prices);
}
