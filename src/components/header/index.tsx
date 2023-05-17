import React, { FC } from 'react';
import { AppBar, Button, Typography, Grid } from '@mui/material';
import i18n from '../../data/i18n';
import { useTranslation } from 'react-i18next';
import UserMenu from './userMenu';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { changeLanguage, selectLang } from '../../store/features/langSlice';
import ElevationScroll from './elevationScroll';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateQuery } from '../../store/features/editorSlice.ts';

import { headerLogoStyle } from './header.style.ts';
import './header.scss';
import Language from './language';

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
    <AppBar position="sticky" className="header" sx={{ padding: { xs: '10px', sm: '15px 30px' } }}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item container xs justifyContent="flex-start">
          <Button href="/" className="logo" size="medium" color="inherit">
            <img className="logo__icon" src="logo.png" alt="GraphiQL logo" />
            GraphiQL
          </Button>
        </Grid>
        <Grid
          item
          container
          xs={4}
          justifyContent="center"
          sx={{ display: { xs: 'none', sm: 'grid' } }}
        >
          <img className="header__product" src="logo-starwars.png" alt="Logo starwars" />
        </Grid>
        <Grid item container xs justifyContent="flex-end">
          <Language />
          <UserMenu uid={uid} />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
