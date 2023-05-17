import { FC } from 'react';
import { AppBar, Button, Grid } from '@mui/material';
import UserMenu from './userMenu';
import ElevationScroll from './elevationScroll';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Language from './language';
import './header.scss';

const Header: FC = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  return (
    <ElevationScroll>
      <AppBar
        position="sticky"
        className="header"
        sx={{ padding: { xs: '10px', sm: '15px 30px' } }}
      >
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
    </ElevationScroll>
  );
};

export default Header;
