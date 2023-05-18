import './sign-in.scss';
import { FC, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import { useAppDispatch } from '../../hooks/hook.ts';
import { authSignIn } from '../../store/services/authSlice.ts';
import { Grid, Box, Typography, TextField, Button, Container, Link } from '@mui/material';
import { checkTextFieldError, emailOptions } from '../../utils/validation.ts';

const SignIn: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: 'onSubmit' });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [emailFirebaseError, setEmailFirebaseError] = useState<string | null>(null);
  const [passwordFirebaseError, setPasswordFirebaseError] = useState<string | null>(null);

  const userSignIn = async (fields: FieldValues) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, fields.email, fields.password);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // TODO Eslint thinks, that userCredential don't have accessToken
      const { accessToken, email, uid } = userCredential.user;

      dispatch(authSignIn({ accessToken, email, uid }));
      navigate('/main');
    } catch (error) {
      if (error instanceof Error && error.message.includes('user-not-found')) {
        setEmailFirebaseError('Hmmm, user with current email not found');
      } else if (error instanceof Error && error.message.includes('wrong-password')) {
        setPasswordFirebaseError('Oops, your password is wrong');
      }
    }
  };

  const isHasError = (key: string): boolean => errors.hasOwnProperty(key);

  return (
    <div className="sign-in">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="not-found__container"
        rowSpacing={{ xs: 4, sm: 6 }}
        minWidth={{ md: '700px' }}
        sx={{ padding: { xs: '0 10px', sm: '0 30px' } }}
      >
        <Grid item>
          <Typography variant="h2">Login</Typography>
        </Grid>
        <Grid item>
          <form className="sign-in__form" autoComplete="off" onSubmit={handleSubmit(userSignIn)}>
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
                  ? checkTextFieldError(errors.email.type?.toString())
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
                  ? checkTextFieldError(errors.password.type?.toString())
                  : passwordFirebaseError
              }
            />
            <Box textAlign="center">
              <Button variant="outlined" type="submit">
                Login
              </Button>
            </Box>
          </form>
        </Grid>
        <Grid item container justifyContent="center">
          <Typography variant="body1">
            If you don`t have account,{' '}
            <Link href="/registration" color="secondary" underline="none">
              create account
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Container sx={{ display: { xs: 'none', md: 'block' } }}>
        <img className="sign-in__img" src="auth.png" alt="" />
      </Container>
    </div>
  );
};

export default SignIn;
