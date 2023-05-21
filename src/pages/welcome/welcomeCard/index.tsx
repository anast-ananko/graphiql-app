import { FC } from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { WelcomeCardType } from '../../../types';
import { welcomeCardContainer, welcomeCardImage, welcomeCardText } from './welcomeCard.style.ts';

const WelcomeCard: FC<WelcomeCardType> = ({ data }) => {
  return (
    <Grid {...welcomeCardContainer}>
      <Grid item>
        <img src={data.imageUrl} {...welcomeCardImage} alt="card" />
      </Grid>
      <Grid item>
        <Link href="/" color="secondary">
          <Typography {...welcomeCardText}>{data.name}</Typography>
        </Link>
        <Typography {...welcomeCardText}>{data.description}</Typography>
      </Grid>
    </Grid>
  );
};

export default WelcomeCard;
