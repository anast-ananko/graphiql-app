import { useState, forwardRef, useEffect, FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import './ErrorsDialog.scss';
import { clearErrors, selectErrorsArray } from '../../store/features/errorsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';

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
  const [open, setOpen] = useState(false);
  const appErrors = useAppSelector(selectErrorsArray);

  useEffect(() => {
    setOpen(!!appErrors.length);
  }, [appErrors]);

  const handleClose = () => {
    dispatch(clearErrors());
  };

  return (
    <div>
      <Dialog
        className="error-dialog"
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Opps... Something went wrong.
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              next
            </Button>
          </Toolbar>
        </AppBar>
      </Dialog>
    </div>
  );
};

export default ErrorsDialog;
