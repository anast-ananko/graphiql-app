import { FC } from 'react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import Logo from '../logo';

import './header.scss';

const Header: FC = () => {
  return (
    <AppBar position="static" className="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
