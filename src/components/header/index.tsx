import { FC } from 'react';
import { AppBar, Container, Toolbar, Typography, Button, Grid } from '@mui/material';
import i18n from '../../data/i18n';
import { useTranslation } from 'react-i18next';

import Logo from '../logo';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { changeLanguage } from '../../store/features/langSlice';
import ElevationScroll from './elevationScroll';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { authSignOut } from '../../store/services/authSlice.ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateQuery } from '../../store/features/editorSlice.ts';

import { headerLogoStyle } from './header.style.ts';
import './header.scss';

const Header: FC = () => {
  const { t: localize } = useTranslation();

  const dispatch = useAppDispatch();

  const { uid } = useSelector((state: RootState) => state.auth);
  const { lang } = useAppSelector((state) => state.langReducer);

  const handleLanguageChange = (): void => {
    if (lang === 'en') {
      i18n.changeLanguage('by');
      dispatch(changeLanguage('by'));
    } else if (lang === 'by') {
      i18n.changeLanguage('ru');
      dispatch(changeLanguage('ru'));
    } else {
      i18n.changeLanguage('en');
      dispatch(changeLanguage('en'));
    }
  };

  const userSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(authSignOut());
    } catch (error) {
      error instanceof Error && dispatch(updateQuery(error.message));
    }
  };

  const signOutButton: JSX.Element = (
    <Grid item xs={6}>
      <Grid container justifyContent="flex-end" alignItems="center">
        <Button
          variant="outlined"
          sx={{ backgroundColor: '#F9F871', color: 'black' }}
          onClick={userSignOut}
        >
          {localize('buttons.signOut')}
        </Button>
      </Grid>
    </Grid>
  );

  return (
    <ElevationScroll>
      <AppBar position="sticky" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className="header__container">
              <div className="header__topography">
                <Logo />
                <Typography variant="h5" {...headerLogoStyle} className="header__logo">
                  GraphiQL
                </Typography>
              </div>
              <div className="language">
                <button className="button__lang" onClick={handleLanguageChange}>
                  <span className="language__title">
                    {lang === 'en' ? 'en' : lang === 'by' ? 'by' : 'ru'}
                  </span>
                </button>
              </div>
              {uid && signOutButton}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
