var fname = prompt("What is your First Name?: ");
var lname = prompt("What is your Last Name?: ");
var age = prompt("What is your age?: ");
var height = prompt("How tall are you (cm)?: ");
var pet = prompt("What is your pet's name?: ");
alert("Thank you for this info!")

var num = 0;

while (num < 4) {
  if (fname[0] == lname[0]) {
    num++
  }
  if (age > 20 && age < 30) {
    num++
  }
  if (height >= 170) {
    num++
  }
  if (pet.substr(-1) === "y") {
    num++
  }
  else {
    break
  }
}

if (num === 4) {
  console.log("Bro youre a damn spy!");
}else {
  console.log("Nothing to see here!");
}
