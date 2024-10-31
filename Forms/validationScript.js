    // JavaScript code for form validation

let form = document.getElementById("myForm")
// Retrieve the input field value
let input_box = document.getElementById("inputField");
// Regular expression pattern for alphanumeric input
let input_regex = /^[a-zA-Z0-9]+$/;

form.addEventListener("submit",function(e){
  // Prevent form from submitting
  e.preventDefault();
  // Check if the input value matches the pattern
  if(input_regex.test(input_box.value)){
    alert("Valid Input!");
    form.submit();
  }
  else{
    // Invalid input: display error message
    alert("Invalid Input :(  Make sure that it's alphanumeric!");
    
  }

})
      