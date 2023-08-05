import { FC } from 'react';
import Auth from '../../components/auth';
import SignInForm from '../../components/signInForm';

const SignIn: FC = () => {
  return <Auth form={<SignInForm />} isLogin={true} />;
};

export default SignIn;
