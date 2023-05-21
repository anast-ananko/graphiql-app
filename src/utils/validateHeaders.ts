import { IValidatedHeaders, IHeadersValidationMap } from '../interfaces/validatedHeaders';
import { validTypes } from '../constants/validHeaderTypes';

const validateAuthorization = (
  authorizationHeader: string,
  localize: (value: string) => string
): string => {
  if (!authorizationHeader.startsWith('Bearer')) {
    return `${localize('error.text-5')}`;
  } else {
    const token = authorizationHeader.replace('Bearer ', '');

    if (token.length <= 10) {
      return `${localize('error.text-6')}`;
    }
    if (token.length >= 20) {
      return `${localize('error.text-7')}`;
    }
  }

  return '';
};

const validateAccessControlAllowOrigin = (
  header: string,
  localize: (value: string) => string
): string => {
  const originRegex =
    /^(\*|(https?|ftp|file):\/\/([a-zA-Z0-9]+)(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})|null)$/i;

  return !originRegex.test(header) ? `${localize('error.text-8')}` : '';
};

const validateAccessControlAllowCredentials = (
  header: string,
  localize: (value: string) => string
): string => {
  const headerValue = header.toLowerCase().trim();

  if (headerValue !== 'true' && headerValue !== 'false') {
    return `${localize('error.text-9')}`;
  }

  return '';
};

const validateAccept = (header: string, localize: (value: string) => string): string => {
  const requestedTypes = header.split(',');

  for (const type of requestedTypes) {
    if (!validTypes.includes(type.trim())) {
      return `${localize('error.text-10')}`;
    }
  }

  return '';
};

const validateHeaders = (
  value: IValidatedHeaders,
  localize: (value: string) => string
): string[] => {
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
      const error = validationFn(headerValue, localize);
      if (error) {
        errors.push(error);
      }
    }
  });

  return errors;
};

export { validateHeaders };
