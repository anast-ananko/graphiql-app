import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../../hooks/hook.ts';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.ts';
import { addError } from '../../../store/features/errorsSlice.ts';
import { authSignOut } from '../../../store/features/authSlice.ts';
import { UserMenuType } from '../../../interfaces/auth.interfaces.ts';
import { Button, MenuItem, Menu } from '@mui/material';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { NavLink, useLocation } from 'react-router-dom';
import { APP_ROUTE_PATHS } from '../../../constants/appRoutingConstants.ts';
import { menuItemStyle } from './userMenu.style.ts';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

const UserMenu: FC<UserMenuType> = ({ uid }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

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
      error instanceof Error &&
        dispatch(
          addError({
            name: `${localize('titles.error')}`,
            message: error.message,
          })
        );
    }
  };

  const menuItems: Array<JSX.Element> = [
    <NavLink key="sign-in" to={APP_ROUTE_PATHS.LOGIN}>
      <MenuItem onClick={handleClose} {...menuItemStyle}>
        {localize('auth.signIn')}
      </MenuItem>
    </NavLink>,
    <NavLink key="sign-up" to={APP_ROUTE_PATHS.SIGN_UP}>
      <MenuItem onClick={handleClose} {...menuItemStyle}>
        {localize('auth.signUp')}
      </MenuItem>
    </NavLink>,
  ];

  const menuItemsForUser: Array<JSX.Element> =
    uid && location.pathname === '/'
      ? [
          <NavLink key="main-page" to={APP_ROUTE_PATHS.MAIN}>
            <MenuItem onClick={handleClose} {...menuItemStyle}>
              {localize('header.toMainPage')}
            </MenuItem>
          </NavLink>,
          <MenuItem onClick={userSignOut} key="sign-out">
            {localize('auth.signOut')}
          </MenuItem>,
        ]
      : [
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
        {uid ? <BrightnessHighIcon /> : <KeyRoundedIcon />}
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
