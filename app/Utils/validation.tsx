var regexObject = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password:
    /^(?=.*\d)(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
};

export function validateEmail(email: string) {
  if (regexObject?.email.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

export const validatePassword = (Password: string) => {
  if (regexObject.password.test(Password.replace(' ', '')) === false) {
    return false;
  } else {
    return true;
  }
};




