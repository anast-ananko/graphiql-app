import { AppBarProps } from '@mui/material/AppBar';
import { GridProps } from '@mui/material/Grid';

const footerBar: AppBarProps = {
  position: 'static',
  sx: {
    padding: {
      xs: '10px',
      sm: '5px 60px',
    },
  },
};

const footerContainer: GridProps = {
  container: true,
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
};

const footerYear: GridProps = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-start',
  sx: {
    display: {
      xs: 'none',
      sm: 'grid',
    },
  },
};

const footerRSSchool: GridProps = {
  item: true,
  container: true,
  xs: 4,
  sx: {
    justifyContent: {
      xs: 'flex-start',
      sm: 'center',
    },
  },
};

const footerGithubProfiles: GridProps = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-end',
};

export { footerBar, footerContainer, footerYear, footerRSSchool, footerGithubProfiles };
