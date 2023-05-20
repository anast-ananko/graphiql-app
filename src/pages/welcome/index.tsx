import { FC } from 'react';
import WelcomeAccordion from './welcomeAccordion';
import { Grid, Typography } from '@mui/material';
import {
  welcomeContainer,
  welcomeHeader,
  welcomeSection,
  welcomeSectionHeader,
} from './welcome.style.ts';

const Welcome: FC = () => {
  return (
    <Grid {...welcomeContainer}>
      <Grid {...welcomeHeader}>
        <Typography variant="h2">Welcome to StarWars GraphQl far, far away</Typography>
      </Grid>
      <Grid {...welcomeSection}>
        <Grid {...welcomeSectionHeader}>
          <Typography variant="h3">About</Typography>
        </Grid>
        <Grid item>
          <WelcomeAccordion />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
