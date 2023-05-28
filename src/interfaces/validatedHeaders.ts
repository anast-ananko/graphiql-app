interface IValidatedHeaders {
  [headerName: string]: string | undefined;
}

interface IHeadersValidationMap {
  [headerName: string]: (headerValue: string, localize: (value: string) => string) => string;
}

export type { IHeadersValidationMap, IValidatedHeaders };
