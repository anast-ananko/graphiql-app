export const emailOptions = {
  required: true,
  minLength: 10,
  maxLength: 24,
  pattern: /^([\w.]{6,20})+@([\w-]+\.)+[\w-]{2,4}$/,
};

export const passwordOptions = {
  required: true,
  minLength: 8,
  maxLength: 32,
  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
};

export const checkTextFieldError = (type: string | undefined): string => {
  if (type !== undefined) {
    switch (type) {
      case 'required':
        return 'This field must not be empty';
      case 'minLength':
        return 'Value of this field too short';
      case 'maxLength':
        return 'Value of this field too long';
      case 'pattern':
        return 'Wrong value';
      default:
        return 'Wrong value';
    }
  } else {
    return 'Unknown error';
  }
};
