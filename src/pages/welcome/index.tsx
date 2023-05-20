import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import WelcomeAccordion from './welcomeAccordion';
import WelcomeSlider from './welcomeSlider';
import { Button, Grid, Typography } from '@mui/material';
import {
  welcomeContainer,
  welcomeHeader,
  welcomeSection,
  welcomeSectionHeader,
  welcomeButtonContainer,
} from './welcome.style.ts';

const Welcome: FC = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  return (
    <Grid {...welcomeContainer}>
      <Grid {...welcomeHeader}>
        <Typography variant="h2">Welcome to StarWars GraphQl far, far away</Typography>
      </Grid>
      {uid && (
        <Grid {...welcomeButtonContainer}>
          <Button href="/main" variant="outlined">
            Open main page
          </Button>
        </Grid>
      )}
      <Grid {...welcomeSection}>
        <Grid {...welcomeSectionHeader}>
          <Typography variant="h3">About</Typography>
        </Grid>
        <Grid item>
          <WelcomeAccordion />
        </Grid>
      </Grid>
      <Grid {...welcomeSection}>
        <Grid {...welcomeSectionHeader}>
          <Typography variant="h3">Developers</Typography>
        </Grid>
        <Grid item>
          <WelcomeSlider />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
