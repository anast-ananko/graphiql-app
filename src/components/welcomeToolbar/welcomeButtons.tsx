import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';

const WelcomeButtons: FC = () => {
  const { uid } = useSelector((state: RootState) => state.auth);

  return (
    <div className="welcome-toolbar__buttons">
      {uid ? (
        <NavLink className="welcome-toolbar__nav-button" to="/main">
          <Button variant="outlined" color="secondary">
            Go to main page
          </Button>
        </NavLink>
      ) : (
        <>
          <NavLink className="welcome-toolbar__nav-button" to="/login">
            <Button variant="outlined" color="secondary">
              Sign in
            </Button>
          </NavLink>
          <NavLink className="welcome-toolbar__nav-button" to="/registration">
            <Button variant="outlined" color="secondary">
              Sign up
            </Button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default WelcomeButtons;
