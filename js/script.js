const btnSubmit = document.querySelector('#btn-submit');
const firstName = document.querySelector('#input-first-name');
const lastName = document.querySelector('#input-last-name');
const email = document.querySelector('#input-email');
const password = document.querySelector('#input-password');

btnSubmit.addEventListener('click', event => {
  event.preventDefault();
  const userInfo = getUserInfo();
  validateInfo(userInfo);
});

const getUserInfo = () => {
  const userInfo = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  userInfo.firstName = firstName.value;
  userInfo.lastName = lastName.value;
  userInfo.email = email.value;
  userInfo.password = password.value;

  return userInfo;
};
const validateInfo = userInfo => {
  if (userInfo.firstName === '') {
    addError(firstName);
  }
  if (userInfo.lastName === '') {
    addError(lastName);
  }
  if (userInfo.email === '' || !validateEmail(email)) {
    addError(email, 'email@example/com');
    email.classList.add('error-placeholder-email');
  }
  if (userInfo.password === '') {
    addError(password);
  }
};
const validateEmail = email => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(validRegex)) {
    return true;
  }
  return false;
};
const addError = (inputElement, placeholder = '') => {
  inputElement.nextElementSibling.style.visibility = 'visible';
  inputElement.nextElementSibling.nextElementSibling.style.visibility =
    'visible';
  inputElement.classList.add('error');
  inputElement.placeholder = placeholder;
};
const removeError = (inputElement, placeholder) => {
  inputElement.addEventListener('focus', () => {
    inputElement.nextElementSibling.style.visibility = 'hidden';
    inputElement.nextElementSibling.nextElementSibling.style.visibility =
      'hidden';
    inputElement.classList.remove('error');
    inputElement.placeholder = placeholder;
    email.classList.remove('error-placeholder-email');
  });
};
removeError(firstName, 'First Name');
removeError(lastName, 'Last Name');
removeError(email, 'Email');
removeError(password, 'Password');
