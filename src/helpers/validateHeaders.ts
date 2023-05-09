import { IValidatedHeaders, IHeadersValidationMap } from '../interfaces/validatedHeaders';
import { validTypes } from '../constants/validHeaderTypes';

const validateAuthorization = (authorizationHeader: string): string => {
  if (!authorizationHeader.startsWith('Bearer')) {
    return 'Header Authorization must start with Bearer';
  } else {
    const token = authorizationHeader.replace('Bearer ', '');

    if (token.length <= 10) {
      return 'Token in header Authorization must be longer then 10 symbols';
    }
    if (token.length >= 20) {
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
  const requestedTypes = header.split(',');

  for (const type of requestedTypes) {
    if (!validTypes.includes(type.trim())) {
      return 'Invalid header Accept';
    }
  }

  return '';
};

const validateHeaders = (value: IValidatedHeaders): string[] => {
  if (!value) {
    return [];
  }

  const errors: string[] = [];

  const headersValidationMap: IHeadersValidationMap = {
    Authorization: validateAuthorization,
    'Access-Control-Allow-Origin': validateAccessControlAllowOrigin,
    'Access-Control-Allow-Credentials': validateAccessControlAllowCredentials,
    Accept: validateAccept,
  };

  Object.keys(headersValidationMap).forEach((headerName) => {
    const headerValue = value[headerName];
    if (headerValue) {
      const validationFn = headersValidationMap[headerName];
      const error = validationFn(headerValue);
      if (error) {
        errors.push(error);
      }
    }
  });

  return errors;
};

export { validateHeaders };
