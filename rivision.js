// Recap
// Variable
// String type variable
var laptopName = "ASUS";
// number type variable
var rollNo = 321;
// Boolean type
var rainOutside = true;

// Array
var tableItems = ["Pen", "Mobile", "NoteBook", "Bottle"];
// get an element
var findNotebook = tableItems[2];
console.log(findNotebook);

//replace an elements
findNotebook[3] = "Lamp";
//index no jani na, how to get it
var findIndexNumberofPen = tableItems.indexOf("Pen");
console.log(findIndexNumberofPen);

// conditional
if (tableItems.length > 4) {
} else if (tableItems[3] == "Bottle") {
} else {
}
