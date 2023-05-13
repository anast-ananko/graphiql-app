const gridEditorStyle = {
  item: true,
  container: true,
  xs: 12,
  md: 12,
  lg: 6,
  sx: { mr: { xs: 1, lg: 0 }, bgcolor: 'background.paper' },
  height: { xs: '520px', lg: '100%' },
};

const gridEditorCodemirrorStyle = {
  container: true,
  item: true,
  xs: 12,
};

const gridRunButtonStyle = {
  item: true,
  xs: 2,
  lg: 2,
  sx: { display: 'flex', alignItems: 'start', justifyContent: 'flex-end' },
};

const gridEditorOptionsStyle = {
  item: true,
  xs: 12,
  lg: 12,
  sx: { ml: 1 },
};

export { gridEditorStyle, gridEditorCodemirrorStyle, gridRunButtonStyle, gridEditorOptionsStyle };
