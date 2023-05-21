const notFoundContainer: object = {
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

const notFoundImage: object = {
  sx: {
    display: {
      xs: 'none',
      md: 'block',
    },
  },
};

export { notFoundContainer, notFoundImage };
