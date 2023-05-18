export type ProtectedRouteType = {
  permission: boolean;
  children: JSX.Element;
};

export type UserMenuType = {
  uid: string | null;
};

export type AuthType = {
  form: JSX.Element;
  isLogin: boolean;
};
