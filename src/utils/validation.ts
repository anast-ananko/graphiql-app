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

export const checkTextFieldError = (
  type: string | undefined,
  localize: (value: string) => string
): string => {
  if (type !== undefined) {
    switch (type) {
      case 'required':
        return `${localize('auth.error-2')}`;
      case 'minLength':
        return `${localize('auth.error-3')}`;
      case 'maxLength':
        return `${localize('auth.error-4')}`;
      case 'pattern':
        return `${localize('auth.error-5')}`;
      default:
        return `${localize('auth.error-5')}`;
    }
  } else {
    return `${localize('auth.error-6')}`;
  }
};
