import { GridProps } from '@mui/material/Grid';

const welcomeContainer: GridProps = {
  container: true,
  direction: 'column',
  rowSpacing: {
    xs: 4,
    md: 8,
  },
  sx: {
    maxWidth: {
      sm: '90%',
      lg: '1000px',
    },
    margin: {
      xs: '50px auto',
      sm: '30px auto',
    },
  },
};

const welcomeHeader: GridProps = {
  item: true,
  container: true,
  justifyContent: 'center',
  sx: {
    margin: '0 auto',
    width: {
      xs: '75%',
      md: '700px',
    },
    textAlign: 'center',
  },
};

const welcomeButtonContainer: GridProps = {
  item: true,
  container: true,
  direction: 'row',
  justifyContent: 'center',
  rowSpacing: {
    xs: 2,
    md: 4,
  },
};

const welcomeSection: GridProps = {
  item: true,
  container: true,
  direction: 'column',
  rowSpacing: {
    xs: 2,
    md: 4,
  },
};

const welcomeSectionHeader: GridProps = {
  item: true,
  sx: {
    padding: '0 16px',
  },
};

export {
  welcomeContainer,
  welcomeHeader,
  welcomeSection,
  welcomeButtonContainer,
  welcomeSectionHeader,
};
