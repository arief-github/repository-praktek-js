/*
username:
Must contain only lowercase alphabets
Can contain digits
Allows from 5 to 12 characters
Would be case insensitive

email:
Must contain the name
Must contain the @ and .
Must contain the domain
Must contain the extension, which could have a child extension (e.g .co.uk)

password
Can contain @, _ and -
Must be 8 to 20 characters long

telephone
Must contain 11 digits only
*/

const input_fields = {
  username:/^[a-z\d]{5,12}$/i,
  email : /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  password: /^[#\w@_-]{8,20}$/ ,
  telephone: /^\d{11}$/,
}

// function which is handle our validation
const validate = (field, regex) => {
  regex.test(field.value) ? field.className = 'valid' : field.className = 'invalid';
}

// fields check
let keys = document.querySelectorAll('input');

keys.forEach(item => item.addEventListener(
  'keyup', (e) => {
    validate(e.target, input_fields[e.target.attributes.name.value])
  }
));
