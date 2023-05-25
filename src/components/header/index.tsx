import { FC, useState } from 'react';
import { AppBar, Button, Grid } from '@mui/material';
import { useAppSelector } from '../../hooks/hook.ts';

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
import { NavLink } from 'react-router-dom';
import { APP_ROUTE_PATHS } from '../../constants/appRoutingConstants.ts';

const Header: FC = () => {
  const { uid } = useAppSelector((state: RootState) => state.auth);

  const [isScroll, setIsScroll] = useState<boolean>(false);

  return (
    <ElevationScroll setIsScroll={setIsScroll}>
      <AppBar className="header" {...headerBar}>
        <Grid {...headerContainer}>
          <Grid {...headerLogo}>
            <NavLink to={APP_ROUTE_PATHS.ROOT}>
              <Button className="logo-button" {...headerLogoButton}>
                <img className="logo-button__icon" src="logo.png" alt="GraphiQL logo" />
                GraphiQL
              </Button>
            </NavLink>
          </Grid>
          <Grid {...headerProduct}>
            <img
              className="header__product"
              src={isScroll ? 'logo-starwars-active.png' : 'logo-starwars.png'}
              alt="Logo starwars"
            />
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
