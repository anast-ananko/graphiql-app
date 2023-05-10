import './sign-in.scss';
import { FC, FormEvent, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hook.ts';
import { authSignIn } from '../../store/auth/authSlice';
import { Container, Box, TextField, Button } from '@mui/material';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [emailField, setEmail] = useState<string>('');
  const [passwordField, setPassword] = useState<string>('');

  const userSignIn = async (e: FormEvent) => {
    try {
      e.preventDefault();

      const userCredential = await signInWithEmailAndPassword(auth, emailField, passwordField);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // TODO Eslint thinks, that userCredential don't have accessToken
      const { accessToken, email, uid } = userCredential.user;

      dispatch(authSignIn({ accessToken, email, uid }));
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="xl">
      <form autoComplete="off" onSubmit={userSignIn}>
        <h2 style={{ textAlign: 'center', margin: '30px', fontSize: '24px', fontWeight: '900' }}>
          Login
        </h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          value={emailField}
          // error={fieldErrors.email}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
          value={passwordField}
          fullWidth
          sx={{ mb: 2 }}
          // error={fieldErrors.password}
        />
        <Box textAlign="center">
          <Button variant="outlined" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default SignIn;
