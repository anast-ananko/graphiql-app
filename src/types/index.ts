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

export type WelcomeCardType = {
  data: {
    name: string;
    description: string;
    imageUrl: string;
    github: string;
  };
};
