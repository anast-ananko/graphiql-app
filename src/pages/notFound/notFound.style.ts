import { GridProps } from '@mui/material/Grid';
import { ContainerProps } from '@mui/material/Container';

const notFoundContainer: GridProps = {
  container: true,
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  rowSpacing: {
    xs: 2,
    sm: 4,
  },
  minWidth: {
    md: '700px',
  },
  sx: {
    padding: {
      xs: '0 10px',
      sm: '0 30px',
    },
  },
};

const notFoundImage: ContainerProps = {
  sx: {
    display: {
      xs: 'none',
      md: 'block',
    },
  },
};

export { notFoundContainer, notFoundImage };
