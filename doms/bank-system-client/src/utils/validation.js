export function nameValidate(name) {
  if (!name.length) {
    return {
      success: false,
      message: "name olmalidir!",
    };
  } else if (name.length < 3) {
    return {
      success: false,
      message: "name uznulugu min 3 olmalidir.",
    };
  } else if (name.length > 10) {
    return {
      success: false,
      message: "name uznulugu max 10 olmalidir",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
}

export function surnameValidate(surname) {
  if (!surname.length) {
    return {
      success: false,
      message: "surname olmalidir!",
    };
  } else if (surname.length < 5) {
    return {
      success: false,
      message: "surname uznulugu min 5 olmalidir.",
    };
  } else if (surname.length > 15) {
    return {
      success: false,
      message: "surname uznulugu max 15 olmalidir",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
}

export function passwordValidate(password) {
  if (!password.length) {
    return {
      success: false,
      message: "password olmalidir!",
    };
  } else if (password.length < 8) {
    return {
      success: false,
      message: "password uznulugu min 8 olmalidir.",
    };
  } else if (password.length > 15) {
    return {
      success: false,
      message: "password uznulugu max 15 olmalidir",
    };
  } else {
    return {
      success: true,
      message: "Successfully",
    };
  }
}

export function repeatPasswordValidate(password, repeatPassword) {
  if (repeatPassword === password) {
    return {
      success: true,
      message: "Successfully",
    };
  } else {
    return {
      success: false,
      message: "passwordlar uygun gelmedi",
    };
  }
}
