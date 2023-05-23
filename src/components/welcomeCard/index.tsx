import { FC } from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { WelcomeCardType } from '../../types/index.ts';
import { welcomeCardContainer, welcomeCardImage, welcomeCardText } from './welcomeCard.style.ts';

const WelcomeCard: FC<WelcomeCardType> = ({ data }) => {
  return (
    <Grid {...welcomeCardContainer}>
      <Grid item>
        <img src={data.imageUrl} {...welcomeCardImage} alt="Card" />
      </Grid>
      <Grid item>
        <Link href={data.github} color="secondary" target="_blank">
          <Typography {...welcomeCardText}>{data.name}</Typography>
        </Link>
        <Typography {...welcomeCardText}>{data.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default WelcomeCard;
