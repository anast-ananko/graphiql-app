import { GridProps } from '@mui/material/Grid';

const gridEditorStyle: GridProps = {
  item: true,
  container: true,
  xs: 12,
  md: 12,
  lg: 6,
  sx: { mr: { xs: 1, lg: 0 }, bgcolor: 'background.paper' },
  height: { xs: '520px', lg: '100%' },
};

const gridEditorCodemirrorStyle: GridProps = {
  container: true,
  item: true,
  xs: 12,
};

const gridEditorOptionsStyle: GridProps = {
  item: true,
  xs: 12,
  lg: 12,
  sx: { ml: 1 },
};

const gridRunButtonStyle: GridProps = {
  item: true,
  xs: 3,
  lg: 2,
  sx: { display: 'flex', alignItems: 'start', justifyContent: 'flex-end' },
};

const toggleButtonStyle: object = {
  sx: {
    height: '35px',
    width: { xs: '100px', sm: '115px' },
    fontSize: { xs: '12px', sm: '14px' },
  },
};

export {
  gridEditorStyle,
  gridEditorCodemirrorStyle,
  gridEditorOptionsStyle,
  gridRunButtonStyle,
  toggleButtonStyle,
};
