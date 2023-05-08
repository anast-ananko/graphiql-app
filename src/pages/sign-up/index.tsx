import './sign-up.scss';
import { FC, FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { useAppDispatch } from '../../hooks/hook.ts';
import { signIn } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, TextField } from '@mui/material';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const userSignUp = async (e: FormEvent): void => {
    try {
      e.preventDefault();

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      dispatch(signIn(userCredential));
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container maxWidth="xl">
      <form autoComplete="off" onSubmit={userSignUp}>
        <h2 style={{ textAlign: 'center', margin: '30px', fontSize: '24px', fontWeight: '900' }}>
          Create account
        </h2>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          value={email}
          // error={fieldErrors.email}
        />
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          variant="outlined"
          type="password"
          value={password}
          fullWidth
          sx={{ mb: 2 }}
          // error={fieldErrors.password}
        />
        <Box textAlign="center">
          <Button variant="outlined" type="submit">
            Create account
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default SignUp;
