type HeadersKeys =
  | 'Authorization'
  | 'Access-Control-Allow-Origin'
  | 'Access-Control-Allow-Credentials'
  | 'Connection';

type UserHeaders = Partial<Record<HeadersKeys, string>> | undefined;

interface QueryVariables {
  [key: string]: string;
}

export type { HeadersKeys, UserHeaders, QueryVariables };
