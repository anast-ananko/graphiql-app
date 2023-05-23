const headerBar: object = {
  position: 'sticky',
  sx: {
    padding: {
      xs: '10px',
      sm: '15px 30px',
    },
  },
};

const headerContainer: object = {
  item: true,
  container: true,
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const headerLogo: object = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-start',
};

const headerLogoButton: object = {
  size: 'medium',
};

const headerLogoButtonStyle: object = { color: 'primary.contrastText' };

const headerProduct: object = {
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

const headerMenuContainer: object = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-end',
};

export {
  headerContainer,
  headerLogo,
  headerLogoButton,
  headerLogoButtonStyle,
  headerProduct,
  headerBar,
  headerMenuContainer,
};
