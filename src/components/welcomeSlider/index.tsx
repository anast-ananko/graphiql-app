import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import { welcomeSliderContainer, welcomeSliderCarousel } from './welcomeSlider.style.ts';
import WelcomeCard from '../welcomeCard/index.tsx';

const WelcomeSlider: FC = () => {
  const { t: localize } = useTranslation();

  const developers = [
    {
      name: 'Nastassia Ananka',
      description: `${localize('welcomeSlider.text-2')}`,
      imageUrl:
        'https://www.gannett-cdn.com/-mm-/60b313f9f1ca6e3b61d7df27a25045a345f8e0fc/c=0-0-1359-768/local/-/media/2017/11/28/USATODAY/USATODAY/636474965143079134-ETAB-STAR-WARS-PRINCESS-LEIA-421017.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      github: 'https://github.com/anast-ananko',
    },
    {
      name: 'Denis Bondarenko',
      description: `${localize('welcomeSlider.text-3')}`,
      imageUrl: 'https://www.sideshow.com/storage/product-images/400372/c-3po_star-wars_square.jpg',
      github: 'https://github.com/ExIxIxS',
    },
    {
      name: 'Aliaksei Balabushka',
      description: `${localize('welcomeSlider.text-4')}`,
      imageUrl:
        'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536',
      github: 'https://github.com/ablbsk',
    },
  ];

  return (
    <Grid {...welcomeSliderContainer}>
      <Grid item>
        <Typography textAlign="justify">{localize('welcomeSlider.text-1')}</Typography>
      </Grid>
      <Grid item>
        <Carousel {...welcomeSliderCarousel}>
          {developers.map((item, i) => (
            <WelcomeCard data={item} key={i} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default WelcomeSlider;
