const footerBar: object = {
  position: 'static',
  sx: {
    padding: {
      xs: '10px',
      sm: '5px 60px',
    },
  },
};

const footerContainer: object = {
  container: true,
  direction: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const footerYear: object = {
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

const footerRSSchool: object = {
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

const footerGithubProfiles: object = {
  item: true,
  container: true,
  xs: true,
  justifyContent: 'flex-end',
};

export { footerBar, footerContainer, footerYear, footerRSSchool, footerGithubProfiles };
