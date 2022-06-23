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
  alert("OK" + " you want your password to be " + passLength + " characters long.")
 
    if(passLength < 8 || passLength > 128){ 
      alert("Your password is not in the appropriate range.")
     }
    
     console.log(typeof passLength)


  let haveLowercase = prompt("Do you want your password to contain lowercase letters: yes/no?");
  alert("OK, you said " + haveLowercase + " to using lowercase letters in your password.");
 
    if(haveLowercase !== "yes" && haveLowercase !== "no"){
      alert("That does not meet the password criteria")
    }

  let haveUppercase = prompt("Do you want your password to contain uppercase letters yes/no?");
  alert("OK, you said " + haveUppercase + " to using uppercase letters in your password.");

  if(haveUppercase!== "yes" && haveUppercase !== "no"){
    alert("That does not meet the password criteria")
  }

  let haveNumbers = prompt("Do you want your password to contain numbers yes/no?");
  alert("OK, you said " + haveNumbers + " to using numbers in your password.");
 
  if(haveNumbers !== "yes" && haveNumbers !== "no"){
    alert("That does not meet the password criteria")
  }

  let haveSpecial = prompt("Do you want your password to contain special characters yes/no");
  alert("OK, you said " + haveSpecial + " to using special characters in your password.");
  
  if(haveSpecial !== "yes" && haveSpecial !== "no"){
    alert("That does not meet the password criteria")
  }


  if (haveLowercase === "yes") {
    passLC = passHolder.lowercase;
  

  } else {
    passLC = "";
   
  }


  if (haveUppercase === "yes") {
    passUC = passHolder.uppercase;
    

  } else {
    passUC = "";
 
  }
  

  if (haveNumbers === "yes") {
    passN = passHolder.numbers;
   

  } else {
    passN = "";
   
  }
  

  if (haveSpecial === "yes") {
    passSC = passHolder.specialC;
   

  } else{
    passSC = "";
    
  }

  
  let passAll = (passLC + passUC + passN + passSC)
  console.log(passAll)
  

 
    var password = "";

    for (var i = 0; i < passLength; i++) {
      
      password += passAll.charAt(Math.floor(Math.random() *
        passLength.length));
    }
   
    
    alert("Your new password is: " + password);
    
    return password
   
  }


var passwordText = document.querySelector("#password");


passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

