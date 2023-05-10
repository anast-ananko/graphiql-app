import './sign-up.scss';
import { FC, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { useAppDispatch } from '../../hooks/hook.ts';
import { authSignIn } from '../../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { Box, Button, Container, TextField } from '@mui/material';
import { emailOptions, passwordOptions, checkTextFieldError } from '../../utils/validation.ts';

const SignUp: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit' });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [firebaseError, setFirebaseError] = useState<string | null>(null);

  const userSignUp = async (fields: FieldValues) => {
    try {
      if (!Object.keys(errors).length) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          fields.email,
          fields.password
        );

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // TODO Eslint thinks, that userCredential don't have accessToken
        const { email, uid, accessToken } = userCredential.user;

        dispatch(authSignIn({ accessToken, email, uid }));
        navigate('/');
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        setFirebaseError('Hmmm, current email already in use');
      }
    }
  };

  const isHasError = (key: string): boolean => errors.hasOwnProperty(key);

  return (
    <Container maxWidth="xl">
      <form autoComplete="off" onSubmit={handleSubmit(userSignUp)}>
        <h2 style={{ textAlign: 'center', margin: '30px', fontSize: '24px', fontWeight: '900' }}>
          Create account
        </h2>
        <TextField
          label="Email"
          variant="outlined"
          type="text"
          sx={{ mb: 2 }}
          fullWidth
          placeholder="email@gmail.com"
          autoComplete="off"
          {...register('email', emailOptions)}
          error={isHasError('email') || !!firebaseError}
          helperText={
            errors.email ? checkTextFieldError(errors.email.type?.toString()) : firebaseError
          }
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          placeholder="very secret code"
          sx={{ mb: 2 }}
          {...register('password', passwordOptions)}
          error={isHasError('password')}
          helperText={errors.password && checkTextFieldError(errors.password.type?.toString())}
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
