interface IValidatedHeaders {
  [headerName: string]: string | undefined;
}

interface IHeadersValidationMap {
  [key: string]: (name: string) => string;
}

export type { IHeadersValidationMap, IValidatedHeaders };
