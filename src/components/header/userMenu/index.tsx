import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../hooks/hook.ts';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.ts';
import { authSignOut } from '../../../store/features/authSlice.ts';
import { updateQuery } from '../../../store/features/editorSlice.ts';
import { UserMenuType } from '../../../types';
import { Button, Link, MenuItem, Menu } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

const UserMenu: FC<UserMenuType> = ({ uid }) => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { t: localize } = useTranslation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const userSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(authSignOut());
    } catch (error) {
      error instanceof Error && dispatch(updateQuery(error.message));
    }
  };

  const menuItems: Array<JSX.Element> = [
    <MenuItem onClick={handleClose} key="sign-in">
      <Link href="/sign-in" color="inherit" underline="none" style={{ width: '100%' }}>
        {localize('auth.signIn')}
      </Link>
    </MenuItem>,
    <MenuItem onClick={handleClose} key="sign-up">
      <Link href="/sign-up" color="inherit" underline="none" style={{ width: '100%' }}>
        {localize('auth.signUp')}
      </Link>
    </MenuItem>,
  ];

  const menuItemsForUser: Array<JSX.Element> = [
    <MenuItem onClick={userSignOut} key="sign-out">
      {localize('auth.signOut')}
    </MenuItem>,
  ];

  return (
    <>
      <Button
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        {uid ? <LogoutIcon /> : <KeyRoundedIcon />}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClose={handleClose}
      >
        {uid ? menuItemsForUser : menuItems}
      </Menu>
    </>
  );
};

export default UserMenu;
