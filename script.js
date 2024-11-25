function validEmail(str) {
  // Define a regular expression for validating email addresses
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Return true if the email matches the regex, otherwise false
  return emailRegex.test(str);
}

// Do not change the code below
const str = prompt("Enter an email address.");
alert(validEmail(str));
