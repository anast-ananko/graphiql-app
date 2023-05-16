import { FC } from 'react';

import WelcomeButtons from './welcomeButtons';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import './welcomeToolbar.scss';

const WelcomeToolbar: FC = () => {
  return (
    <Box className="welcome-toolbar" sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar className="welcome-toolbar__toolbar">
          <WelcomeButtons />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default WelcomeToolbar;
