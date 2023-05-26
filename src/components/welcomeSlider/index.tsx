import { FC, useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Grid, Typography } from '@mui/material';
import WelcomeCard from '../welcomeCard/index.tsx';
import { v4 as uuid } from 'uuid';

import { welcomeSliderContainerStyle, welcomeSliderCarouselStyle } from './welcomeSlider.style.ts';
import { getDevelopersData } from '../../utils/dataHandling.ts';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

const WelcomeSlider: FC = () => {
  const { t: localize } = useTranslation();
  const theme = useTheme();
  const isMiddleScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [developersData, setDelelopersData] = useState(getDevelopersData());
  const [carouselStyle, setCarouselStyle] = useState<CarouselProps>(welcomeSliderCarouselStyle);

  useEffect(() => {
    const newStyle = { ...carouselStyle };
    const backgroundColor = isMiddleScreen ? '#00000000' : '#000';

    newStyle.navButtonsAlwaysVisible = !isMiddleScreen;
    newStyle.navButtonsWrapperProps = {
      style: {
        backgroundColor: backgroundColor,
      },
    };
    setCarouselStyle(newStyle);
  }, [isMiddleScreen]);

  useEffect(() => {
    setDelelopersData(getDevelopersData());
  }, [localize]);

  return (
    <Grid {...welcomeSliderContainerStyle}>
      <Grid item>
        <Typography textAlign="justify">
          {localize('welcomeSlider.developersDescription')}
        </Typography>
      </Grid>
      <Grid item>
        <Carousel {...carouselStyle}>
          {developersData.map((developerData) => (
            <WelcomeCard data={developerData} key={uuid()} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default WelcomeSlider;
