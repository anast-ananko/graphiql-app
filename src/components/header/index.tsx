import { FC } from 'react';
import { AppBar, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import UserMenu from './userMenu';
import ElevationScroll from './elevationScroll';
import { RootState } from '../../store';
import Language from './language';

import {
  headerContainer,
  headerLogo,
  headerLogoButton,
  headerProduct,
  headerBar,
  headerMenuContainer,
} from './header.style.ts';
import './header.scss';

const Header: FC = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  return (
    <ElevationScroll>
      <AppBar className="header" {...headerBar}>
        <Grid {...headerContainer}>
          <Grid {...headerLogo}>
            <Button href="/" className="logo" {...headerLogoButton}>
              <img className="logo__icon" src="logo.png" alt="GraphiQL logo" />
              GraphiQL
            </Button>
          </Grid>
          <Grid {...headerProduct}>
            <img className="header__product" src="logo-starwars.png" alt="Logo starwars" />
          </Grid>
          <Grid {...headerMenuContainer}>
            <Language />
            <UserMenu uid={uid} />
          </Grid>
        </Grid>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
