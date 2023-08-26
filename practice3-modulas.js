// abul vai biye korbe,people ase=286, per bus 50 , per car 11 , badbaki jabe rikshaw per person 70, koto taka lagbe rickshaw te jete?
var totalPepole = 286;
var peopleForCar = 286 % 50;
console.log(peopleForCar);
var peopleForRikshaw = peopleForCar % 11;
console.log(peopleForRikshaw);
var rickshawCost = peopleForRikshaw * 70;
console.log(rickshawCost);
