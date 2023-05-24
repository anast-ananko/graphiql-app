import { useState, forwardRef, useEffect, FC } from 'react';
import { clearErrors, selectErrorsArray } from '../../store/features/errorsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { useTranslation } from 'react-i18next';

import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Pagination from '@mui/material/Pagination';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { paginationStyle } from './errorsDialog.style';
import './errorsDialog.scss';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ErrorsDialog: FC = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const userErrors = useAppSelector(selectErrorsArray);
  const [currentUserError, setCurrentUserError] = useState(userErrors?.[0]);

  const { t: localize } = useTranslation();

  useEffect(() => {
    if (!isOpen && userErrors.length) {
      setIsOpen(true);
      setCurrentUserError(userErrors?.[0]);
    }

    if (isOpen && !userErrors.length) {
      setIsOpen(false);
    }
  }, [userErrors, isOpen]);

  const handleClose = () => {
    dispatch(clearErrors());
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentUserError(userErrors?.[value - 1]);
  };

  return (
    <div>
      <Dialog
        className="errors-dialog"
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {localize('error.errorMainText')}
            </Typography>
            <Pagination
              className="error-dialog__pagination"
              onChange={handlePageChange}
              count={userErrors.length}
              {...paginationStyle}
            />
          </Toolbar>
        </AppBar>
        {currentUserError && (
          <Alert severity="error">
            <AlertTitle>{currentUserError.name}</AlertTitle>
            <pre>{currentUserError.message}</pre>
          </Alert>
        )}
      </Dialog>
    </div>
  );
};

export default ErrorsDialog;
