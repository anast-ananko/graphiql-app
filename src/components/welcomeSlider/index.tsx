import { FC, useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import WelcomeCard from '../welcomeCard/index.tsx';
import { v4 as uuid } from 'uuid';

import { welcomeSliderContainer, welcomeSliderCarousel } from './welcomeSlider.style.ts';
import { getDevelopersData } from '../../utils/dataHandling.ts';

const WelcomeSlider: FC = () => {
  const { t: localize } = useTranslation();

  const [developersData, setDelelopersData] = useState(getDevelopersData());

  useEffect(() => {
    setDelelopersData(getDevelopersData());
  }, [localize]);

  return (
    <Grid {...welcomeSliderContainer}>
      <Grid item>
        <Typography textAlign="justify">
          {localize('welcomeSlider.developersDescription')}
        </Typography>
      </Grid>
      <Grid item>
        <Carousel {...welcomeSliderCarousel}>
          {developersData.map((developerData) => (
            <WelcomeCard data={developerData} key={uuid()} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default WelcomeSlider;
