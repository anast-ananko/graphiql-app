const welcomeContainer: object = {
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

const welcomeHeader: object = {
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

const welcomeSection: object = {
  item: true,
  container: true,
  direction: 'column',
  rowSpacing: {
    xs: 2,
    md: 4,
  },
};

const welcomeSectionHeader: object = {
  item: true,
  sx: {
    padding: '0 16px',
  },
};

export { welcomeContainer, welcomeHeader, welcomeSection, welcomeSectionHeader };
