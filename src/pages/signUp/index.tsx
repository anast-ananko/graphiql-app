import { FC } from 'react';
import Auth from '../../components/auth';
import SignUpForm from '../../components/signUpForm';

const SignUp: FC = () => {
  return <Auth form={<SignUpForm />} isLogin={false} />;
};

export default SignUp;
