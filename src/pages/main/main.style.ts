const gridMainContainerStyle = {
  container: true,
  spacing: 2,
  maxWidth: { xs: '300px', sm: '520px', md: '880px', lg: '1240px', xl: '1500px' },
  height: { xs: '100%', lg: 'calc(100vh - 146px)' },
  sx: { m: '10px auto 20px' },
};

const gridMainContentStyle = {
  item: true,
  container: true,
  xs: 12,
  md: 7,
  lg: 8,
  xl: 8,
  sx: { pl: { xs: 0, md: 1 } },
};

export { gridMainContainerStyle, gridMainContentStyle };
