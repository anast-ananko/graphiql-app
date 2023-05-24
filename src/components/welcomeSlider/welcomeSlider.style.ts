const welcomeSliderContainer: object = {
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

const welcomeSliderCarousel: object = {
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

export { welcomeSliderContainer, welcomeSliderCarousel };
