import React, { FC, useState } from 'react';
import { Button, MenuItem } from '@mui/material';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import Menu from '@mui/material/Menu';

import i18n from '../../../data/i18n';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { changeLanguage, selectLang } from '../../../store/features/langSlice';

const Language: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const lang = useAppSelector(selectLang);

  const dispatch = useAppDispatch();

  const handleLanguageChange = (lang: string): void => {
    i18n.changeLanguage(lang);
    dispatch(changeLanguage(lang));
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void =>
    setAnchorEl(event.currentTarget);

  const handleClose = (): void => setAnchorEl(null);

  const menuItemHandler = (lang: string): void => {
    handleClose();
    handleLanguageChange(lang);
  };

  return (
    <>
      <Button
        startIcon={<LanguageRoundedIcon />}
        size="large"
        color="inherit"
        onClick={handleClick}
      >
        {lang === 'en' ? 'EN' : lang === 'by' ? 'BY' : 'RU'}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleClose}
      >
        <MenuItem onClick={() => menuItemHandler('en')}>EN</MenuItem>
        <MenuItem onClick={() => menuItemHandler('by')}>BY</MenuItem>
        <MenuItem onClick={() => menuItemHandler('ru')}>RU</MenuItem>
      </Menu>
    </>
  );
};

export default Language;
