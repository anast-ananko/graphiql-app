import { GridProps } from '@mui/material/Grid';
import { CarouselProps } from 'react-material-ui-carousel/dist/components/types';

const welcomeSliderContainerStyle: GridProps = {
  item: true,
  container: true,
  direction: 'column',
  rowSpacing: {
    xs: 2,
    md: 4,
  },
  sx: {
    padding: '0 16px',
  },
};

const welcomeSliderCarouselStyle: CarouselProps = {
  sx: {
    width: '100%',
  },
  stopAutoPlayOnHover: true,
  animation: 'slide',
  duration: 750,
  navButtonsAlwaysVisible: true,
  navButtonsWrapperProps: {
    style: {
      backgroundColor: '#000',
    },
  },
};

export { welcomeSliderContainerStyle, welcomeSliderCarouselStyle };
