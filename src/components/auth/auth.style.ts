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

const authLink: object = {
  color: 'secondary',
  underline: 'none',
};

const authRedirectLink: object = {
  item: true,
  container: true,
  justifyContent: 'center',
};

const authImage: object = {
  sx: {
    display: {
      xs: 'none',
      md: 'block',
    },
  },
};

export { authContainer, authLink, authRedirectLink, authImage };
