let input = document.getElementById('input-box');

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    alert("P A L I N D R O M E");
    console.log("P A L I N D R O M E");
  } else {
    alert("Not a Palindrome");
    console.log("Not a Palindrome");
  }
  /* to make the input box clear after result */
  input.value = "";
}
