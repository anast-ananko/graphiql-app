type HeadersKeys =
  | 'Authorization'
  | 'Access-Control-Allow-Origin'
  | 'Access-Control-Allow-Credentials'
  | 'Connection';

type UserHeaders = Partial<Record<HeadersKeys, string>>;

export type { HeadersKeys, UserHeaders };
