import './sign-in.scss';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { Navigate } from 'react-router-dom';

const SignIn: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signIn = (e: FormEvent): void => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/*{user && <Navigate to="/dashboard" replace={true} />}*/}
      <form onSubmit={signIn}>
        <h1>Login</h1>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignIn;
