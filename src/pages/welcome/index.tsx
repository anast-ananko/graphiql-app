import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, Grid, Typography } from '@mui/material';

import { RootState } from '../../store';
import WelcomeAccordion from '../../components/welcomeAccordion/index.tsx';
import WelcomeSlider from '../../components/welcomeSlider/index.tsx';

import {
  welcomeContainer,
  welcomeHeader,
  welcomeSection,
  welcomeSectionHeader,
  welcomeButtonContainer,
} from './welcome.style.ts';

const Welcome: FC = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  const { t: localize } = useTranslation();

  return (
    <Grid {...welcomeContainer}>
      <Grid {...welcomeHeader}>
        <Typography variant="h2">{localize('welcome.text')}</Typography>
      </Grid>
      {uid && (
        <Grid {...welcomeButtonContainer}>
          <Button href="/main" variant="outlined">
            {localize('welcome.button')}
          </Button>
        </Grid>
      )}
      <Grid {...welcomeSection}>
        <Grid {...welcomeSectionHeader}>
          <Typography variant="h3">{localize('welcome.about')}</Typography>
        </Grid>
        <Grid item>
          <WelcomeAccordion />
        </Grid>
      </Grid>
      <Grid {...welcomeSection}>
        <Grid {...welcomeSectionHeader}>
          <Typography variant="h3">{localize('welcome.developers')}</Typography>
        </Grid>
        <Grid item>
          <WelcomeSlider />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Welcome;
