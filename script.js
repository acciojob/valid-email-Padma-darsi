function validEmail(str) {
  //your JS code here.
	if (!str) return false; // handle empty input

  // Regex explanation:
  // ^                   -> start of string
  // [a-zA-Z0-9._-]+     -> one or more valid characters before @
  // @                   -> must contain @
  // [a-zA-Z0-9.-]+      -> domain name part
  // \.                  -> dot before extension
  // [a-zA-Z]{2,}        -> at least 2 letters (like com, in, edu, co)
  // $                   -> end of string
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
