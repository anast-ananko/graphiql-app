import { TypographyProps } from '@mui/material';
import { ButtonProps } from '@mui/material/Button';

const authContainer: object = {
  container: true,
  direction: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  rowSpacing: {
    xs: 4,
    sm: 6,
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

const authButton: ButtonProps = {
  color: 'secondary',
  size: 'medium',
  style: { textTransform: 'none' },
};

const preAuthButtonText: TypographyProps = {
  variant: 'button',
  style: { textTransform: 'none' },
};

const authRedirectLink: object = {
  item: true,
  container: true,
  justifyContent: 'center',
  textAlign: 'center',
};

const authImage: object = {
  sx: {
    display: {
      xs: 'none',
      md: 'block',
    },
  },
};

export { authContainer, authButton, authRedirectLink, authImage, preAuthButtonText };
