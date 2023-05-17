import React, { FC } from 'react';
import { useAppDispatch } from '../../../hooks/hook.ts';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase.ts';
import { authSignOut } from '../../../store/services/authSlice.ts';
import { updateQuery } from '../../../store/features/editorSlice.ts';
import { UserMenuType } from '../../../types';
import { Button, MenuItem } from '@mui/material';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import Menu from '@mui/material/Menu';

const UserMenu: FC<UserMenuType> = ({ uid }) => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

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
      <Button href="/login" color="inherit">
        Sign in
      </Button>
    </MenuItem>,
    <MenuItem onClick={handleClose} key="sign-up">
      <Button href="/registration" color="inherit">
        Sign up
      </Button>
    </MenuItem>,
  ];

  const menuItemsForUser: Array<JSX.Element> = [
    <MenuItem onClick={userSignOut} key="sign-out">
      Sign out
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
        {uid ? <ManageAccountsRoundedIcon /> : <KeyRoundedIcon />}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {uid ? menuItemsForUser : menuItems}
      </Menu>
    </>
  );
};

export default UserMenu;
