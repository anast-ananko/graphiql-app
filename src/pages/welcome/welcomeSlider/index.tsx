import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid, Typography } from '@mui/material';
import { welcomeSliderContainer, welcomeSliderCarousel } from './welcomeSlider.style.ts';
import WelcomeCard from '../welcomeCard';

const WelcomeSlider: FC = () => {
  const developers = [
    {
      name: 'Denis Bondarenko',
      description:
        'Can write code faster than Han Solo can make the Kessel Run in less than twelve parsecs—impressive, even for a Millennium Falcon pilot! Just like R2-D2, this developer`s troubleshooting skills are legendary. Much like Obi-Wan Kenobi, this developer has a knack for mentoring and guiding junior team members, shaping them into Jedi knights of the coding realm.',
      imageUrl: 'https://www.sideshow.com/storage/product-images/400372/c-3po_star-wars_square.jpg',
      github: 'https://github.com/ExIxIxS',
    },
    {
      name: 'Nastassia Ananka',
      description:
        'Software developer who works in a secret organization that resists the evil emperor. She can write code in different languages, including droid and wookiee. She also has a power that allows her to communicate with other developers remotely and influence their decisions. She is not afraid of facing difficulties and bugs, and always ready to help her colleagues. She dreams of creating a program that can destroy the death star - the main weapon of the emperor.',
      imageUrl:
        'https://www.gannett-cdn.com/-mm-/60b313f9f1ca6e3b61d7df27a25045a345f8e0fc/c=0-0-1359-768/local/-/media/2017/11/28/USATODAY/USATODAY/636474965143079134-ETAB-STAR-WARS-PRINCESS-LEIA-421017.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp',
      github: 'https://github.com/anast-ananko',
    },
    {
      name: 'Aliaksei Balabushka',
      description:
        'A software developer who works in a secret organization that resists the evil emperor. He can write code in any language, including droid, wookiee and ewok. He also has a power that allows him to hack any security systems and control various mechanisms. He is not afraid of facing difficulties and bugs, and always ready to help his friends. He dreams of creating a program that can destroy the death star - the main weapon of the emperor.',
      imageUrl:
        'https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=247%2C0%2C951%2C536',
      github: 'https://github.com/ablbsk',
    },
  ];

  return (
    <Grid {...welcomeSliderContainer}>
      <Grid item>
        <Typography textAlign="justify">
          Introducing the project developers, a motley crew of code-wielding rebels and tech-savvy
          scoundrels! With their fingers flying across keyboards at hyperspeed, they bring forth a
          project that`s more powerful than an army of astromech droids and funnier than Jar Jar
          Binks clumsiness.
        </Typography>
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
