import React, { FC, ReactElement } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Logo from '../logo';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import i18n from '../../data/i18n';
import { changeLanguage } from '../../store/features/langSlice';
import flagUS from '../../assets/flag-us.jpg';
import flagRU from '../../assets/flag-ru.jpg';
import { IElevationScroll } from '../../interfaces/elevationScroll';

import './header.scss';

const Header: FC = () => {
  const { lang } = useAppSelector((state) => state.langReducer);

  const dispatch = useAppDispatch();

  const handleLanguageChange = (): void => {
    if (lang === 'en') {
      i18n.changeLanguage('ru');
      dispatch(changeLanguage('ru'));
    } else if (lang === 'ru') {
      i18n.changeLanguage('en');
      dispatch(changeLanguage('en'));
    }
  };

  const ElevationScroll = ({ children }: IElevationScroll): ReactElement => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      style: {
        backgroundColor: trigger ? '#40D4AF' : '#00ACC1',
      },
    });
  };

  return (
    <ElevationScroll>
      <AppBar position="sticky" color="primary" className="header">
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
                  <img
                    className="language__icon"
                    src={lang === 'en' ? flagUS : flagRU}
                    alt="Language"
                  />
                </button>
                <span className="language__title">{lang === 'en' ? 'en' : 'ru'}</span>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
