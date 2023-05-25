import { FC, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useTranslation } from 'react-i18next';
import { auth } from '../../firebase.ts';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/hook.ts';
import { Box, TextField, Button } from '@mui/material';
import { authSignIn } from '../../store/features/authSlice.ts';
import { checkTextFieldError, emailOptions } from '../../utils/validation.ts';

const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit' });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [emailFirebaseError, setEmailFirebaseError] = useState<string | null>(null);
  const [passwordFirebaseError, setPasswordFirebaseError] = useState<string | null>(null);

  const { t: localize } = useTranslation();

  const userSignIn = async (fields: FieldValues) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, fields.email, fields.password);
      userCredential.user.getIdToken().then((accessToken) => {
        const { email, uid } = userCredential.user;
        dispatch(authSignIn({ accessToken, email, uid }));
        navigate('/main');
      });
    } catch (error) {
      if (error instanceof Error && error.message.includes('user-not-found')) {
        setEmailFirebaseError(`${localize('auth.errorEmail')}`);
      } else if (error instanceof Error && error.message.includes('wrong-password')) {
        setPasswordFirebaseError(`${localize('auth.errorPassword')}`);
      }
    }
  };

  const isHasError = (key: string): boolean => errors.hasOwnProperty(key);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(userSignIn)}>
      <TextField
        label="Email"
        variant="outlined"
        type="text"
        sx={{ mb: 3 }}
        fullWidth
        {...register('email', emailOptions)}
        error={isHasError('email') || !!emailFirebaseError}
        helperText={
          errors.email
            ? checkTextFieldError(errors.email.type?.toString(), localize)
            : emailFirebaseError
        }
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        sx={{ mb: 3 }}
        {...register('password', { required: true })}
        error={isHasError('password') || !!passwordFirebaseError}
        helperText={
          errors.password
            ? checkTextFieldError(errors.password.type?.toString(), localize)
            : passwordFirebaseError
        }
      />
      <Box textAlign="center">
        <Button variant="outlined" type="submit">
          {localize('auth.login')}
        </Button>
      </Box>
    </form>
  );
};

export default SignInForm;
