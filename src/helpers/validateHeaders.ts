import { UserHeaders } from '../interfaces/headersSlice.interfaces';

const validateAuthorization = (authorizationHeader: string): string => {
  if (!authorizationHeader.startsWith('Bearer')) {
    return 'Header Authorization must start with Bearer';
  } else {
    const token = authorizationHeader.replace('Bearer ', '');

    if (token.length <= 10) {
      return 'Token in header Authorization must be longer then 10 symbols';
    } else if (token.length >= 20) {
      return 'Token in header Authorization must be shorter then 20 symbols';
    }
  }

  return '';
};

const validateAccessControlAllowOrigin = (header: string): string => {
  const originRegex =
    /^(\*|(https?|ftp|file):\/\/([a-zA-Z0-9]+)(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})|null)$/i;

  return !originRegex.test(header) ? 'Invalid header Access-Control-Allow-Origin' : '';
};

const validateAccessControlAllowCredentials = (header: string): string => {
  const headerValue = header.toLowerCase().trim();

  if (headerValue !== 'true' && headerValue !== 'false') {
    return 'Invalid header Access-Control-Allow-Credentials';
  }

  return '';
};

const validateAccept = (header: string): string => {
  const validTypes = [
    'text/plain',
    'text/html',
    'application/json',
    'image/png',
    'audio/mpeg',
    'application/xml',
    'image/jpeg',
    'video/mp4',
    'application/pdf',
  ];
  const requestedTypes = header.split(',');

  for (const type of requestedTypes) {
    if (!validTypes.includes(type.trim())) {
      return 'Invalid header Accept';
    }
  }

  return '';
};

export const validateHeaders = (value: UserHeaders): string[] => {
  const errors: string[] = [];

  if (value) {
    if (value['Authorization']) {
      const error = validateAuthorization(value['Authorization']);
      if (error) errors.push(error);
    }
    if (value['Access-Control-Allow-Origin']) {
      const error = validateAccessControlAllowOrigin(value['Access-Control-Allow-Origin']);
      if (error) errors.push(error);
    }
    if (value['Access-Control-Allow-Credentials']) {
      const error = validateAccessControlAllowCredentials(
        value['Access-Control-Allow-Credentials']
      );
      if (error) errors.push(error);
    }
    if (value['Accept']) {
      const error = validateAccept(value['Accept']);
      if (error) errors.push(error);
    }
  }
  console.log(errors);
  return errors;
};
