import { AppBarProps } from '@mui/material/AppBar';
import { GridProps } from '@mui/material/Grid';
import { ButtonProps } from '@mui/material/Button';

const headerBar: AppBarProps = {
  position: 'sticky',
  sx: {
    padding: {
      xs: '10px',
      sm: '15px 30px',
    },
  },
};

const headerContainer: GridProps = {
  item: true,
  container: true,
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const headerLogo: GridProps = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-start',
};

const headerLogoButton: ButtonProps = {
  size: 'medium',
  sx: {
    color: 'primary.contrastText',
  },
};

const headerProduct: GridProps = {
  item: true,
  container: true,
  xs: 4,
  justifyContent: 'center',
  sx: {
    display: {
      xs: 'none',
      sm: 'grid',
    },
  },
};

const headerMenuContainer: GridProps = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-end',
};

export {
  headerContainer,
  headerLogo,
  headerLogoButton,
  headerProduct,
  headerBar,
  headerMenuContainer,
};
