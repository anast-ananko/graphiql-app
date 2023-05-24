import { GridProps } from '@mui/material/Grid';

const gridMainContainerStyle: GridProps = {
  container: true,
  spacing: 2,
  maxWidth: { xs: '300px', sm: '520px', md: '880px', lg: '1240px', xl: '1500px' },
  // header 88px + footer 72px + margins 30px = 190px
  height: { xs: '100%', lg: 'calc(100vh - 190px)' },
  sx: { m: '10px auto 20px' },
};

const gridMainContentStyle: GridProps = {
  item: true,
  container: true,
  xs: 12,
  md: 7,
  lg: 8,
  xl: 8,
  sx: { pl: { xs: 0, md: 1 } },
};

export { gridMainContainerStyle, gridMainContentStyle };
