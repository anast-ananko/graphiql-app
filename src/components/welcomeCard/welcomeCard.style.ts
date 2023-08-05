import { GridProps } from '@mui/material/Grid';
import { TypographyProps } from '@mui/material/Typography';

const welcomeCardContainer: GridProps = {
  container: true,
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  spacing: 2,
  sx: {
    margin: '0 auto',
    width: '85%',
    flexWrap: {
      xs: 'wrap',
      sm: 'nowrap',
    },
    height: { xs: '753px', sm: '468px', md: '282px', lg: '282px' },
  },
};

const welcomeCardImage: object = {
  style: {
    width: '175px',
    height: '175px',
    borderRadius: '6px',
    objectFit: 'cover',
  },
};

const welcomeCardText: TypographyProps = {
  textAlign: 'justify',
  style: {
    padding: '5px 0',
  },
};

export { welcomeCardContainer, welcomeCardImage, welcomeCardText };
