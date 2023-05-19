import React, { FC } from 'react';
import { Button, MenuItem } from '@mui/material';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Menu from '@mui/material/Menu';

const Language: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        startIcon={<LanguageRoundedIcon />}
        size="large"
        color="inherit"
        onClick={handleClick}
      >
        Ru
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Русский</MenuItem>
        <MenuItem onClick={handleClose}>Беларусский</MenuItem>
      </Menu>
    </>
  );
};

export default Language;
