import { FC, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { useAppDispatch } from '../../hooks/hook.ts';
import { authSignIn } from '../../store/services/authSlice.ts';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { Box, Button, TextField } from '@mui/material';
import { emailOptions, passwordOptions, checkTextFieldError } from '../../utils/validation.ts';

const SignUpForm: FC = () => {
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
        navigate('/main');
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes('email-already-in-use')) {
        setFirebaseError('Hmmm, current email already in use');
      }
    }
  };

  const isHasError = (key: string): boolean => errors.hasOwnProperty(key);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(userSignUp)}>
      <TextField
        label="Email"
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
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
        sx={{ mb: 3 }}
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
  );
};

export default SignUpForm;
