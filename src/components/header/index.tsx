import React, { FC } from 'react';
import { AppBar, Typography, Button, Grid, Link } from '@mui/material';
import i18n from '../../data/i18n';
import { useTranslation } from 'react-i18next';
import UserMenu from './userMenu';

import Logo from '../logo';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { changeLanguage, selectLang } from '../../store/features/langSlice';
import ElevationScroll from './elevationScroll';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateQuery } from '../../store/features/editorSlice.ts';

import { headerLogoStyle } from './header.style.ts';
import './header.scss';

const Header: FC = () => {
  const { t: localize } = useTranslation();

  const dispatch = useAppDispatch();

  const { uid } = useSelector((state: RootState) => state.auth);
  const lang = useAppSelector(selectLang);

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

  // return (
  //   <ElevationScroll>
  //     <AppBar position="sticky" className="header">
  //       <Container maxWidth="xl">
  //         <Toolbar disableGutters>
  //           <div className="header__container">
  //             <div className="header__topography">
  //               <Logo />
  //               <Typography variant="h5" {...headerLogoStyle} className="header__logo">
  //                 GraphiQL
  //               </Typography>
  //             </div>
  //             <div className="language">
  //               <button className="button__lang" onClick={handleLanguageChange}>
  //                 <span className="language__title">
  //                   {lang === 'en' ? 'en' : lang === 'by' ? 'by' : 'ru'}
  //                 </span>
  //               </button>
  //             </div>
  //             {uid && signOutButton}
  //           </div>
  //         </Toolbar>
  //       </Container>
  //     </AppBar>
  //   </ElevationScroll>
  // );

  return (
    <AppBar position="sticky" className="header">
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item container xs justifyContent="flex-start">
          <Link className="logo" href="/" underline="none">
            <img className="logo__icon" src="logo.png" alt="GraphiQL logo" />
            <Typography variant="caption">GraphiQL</Typography>
          </Link>
        </Grid>
        <Grid item container xs={6} justifyContent="center">
          <img className="header__product" src="logo-starwars.png" alt="Logo starwars" />
        </Grid>
        <Grid item container xs justifyContent="flex-end">
          <UserMenu uid={uid} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
