import './sign-up.scss';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { Navigate } from 'react-router-dom';

const SignUp: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUp = (e: FormEvent): void => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/*{user && <Navigate to="/dashboard" replace={true} />}*/}
      <form onSubmit={signUp}>
        <h1>Create account</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
