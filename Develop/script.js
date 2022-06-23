let passHolder = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialC: "!@#$%^&*"
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let passLength = prompt("How long would you like your password to be (must be between 8-128 characters)?");
  alert("OK" + " you want your password to be " + passLength + " characters long.");
  console.log(passLength*("1"))

  let haveLowercase = prompt("Do you want your password to contain lowercase letters: yes/no?");
  alert("OK, you said " + haveLowercase + " to using lowercase letters in your password.");
  console.log(haveLowercase)

  let haveUppercase = prompt("Do you want your password to contain uppercase letters yes/no?");
  alert("OK, you said " + haveUppercase + " to using uppercase letters in your password.");
  console.log(haveUppercase)

  let haveNumbers = prompt("Do you want your password to contain numbers yes/no?");
  alert("OK, you said " + haveNumbers + " to using numbers in your password.");
  console.log(haveNumbers)

  let haveSpecial = prompt("Do you want your password to contain special characters yes/no");
  alert("OK, you said " + haveSpecial + " to using special characters in your password.");
  console.log(haveSpecial)



  if (haveLowercase === "yes") {
    pass = passHolder.lowercase;
    console.log(pass);

  } else {
    pass = "";
    console.log(pass);
  }


  if (haveUppercase === "yes") {
    blue = passHolder.uppercase;
    console.log(blue);

  } else {
    blue = "";
    console.log(blue);
  }
  

  if (haveNumbers === "yes") {
    red = passHolder.numbers;
    console.log(red)

  } else {
    red = "";
    console.log(red);
  }
  

  if (haveSpecial === "yes") {
    green = passHolder.specialC;
    console.log(green);

  } else{
    green = "";
    console.log(green);
  }

  
  let brown = (green + red + blue + pass)
  console.log(brown)

 
    var password = "";

    for (var i = 0; i < passLength; i++) {
      
      password += brown.charAt(Math.floor(Math.random() *
        passLength));
    }
   
    console.log("hi")
 
    console.log(brown)
    console.log(password)
    alert("Your new password is: " + password);
    return password
   
  }


var passwordText = document.querySelector("#password");


passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

