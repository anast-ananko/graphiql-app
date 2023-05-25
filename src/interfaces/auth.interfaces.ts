type ProtectedRouteType = {
  permission: boolean;
  children: JSX.Element;
};

type UserMenuType = {
  uid: string | null;
};

type AuthType = {
  form: JSX.Element;
  isLogin: boolean;
};

type WelcomeCardType = {
  data: {
    name: string;
    description: string;
    imageUrl: string;
    github: string;
  };
};

export type { ProtectedRouteType, UserMenuType, AuthType, WelcomeCardType };
