import { FC } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import Logo from '../logo';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import i18n from '../../data/i18n';
import { changeLanguage } from '../../store/features/langSlice';
import ElevationScroll from './elevationScroll';

import './header.scss';

const Header: FC = () => {
  const { lang } = useAppSelector((state) => state.langReducer);

  const dispatch = useAppDispatch();

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

  return (
    <ElevationScroll>
      <AppBar position="sticky" className="header">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div className="header__container">
              <div className="header__topography">
                <Logo />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  className="header__logo"
                  sx={
                    {
                      // display: { xs: 'none', md: 'flex' },
                    }
                  }
                >
                  GraphiQL
                </Typography>
              </div>
              <div className="language">
                <button
                  title="button__lang"
                  className="button__lang"
                  onClick={handleLanguageChange}
                >
                  <span className="language__title">
                    {lang === 'en' ? 'en' : lang === 'by' ? 'by' : 'ru'}
                  </span>
                </button>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
