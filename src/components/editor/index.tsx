import { FC, useState } from 'react';

import { Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import classNames from 'classnames';

import CodeMirrorGraphQL from './code-mirror';
import Variables from './variables';
import Headers from './headers';
import { IEditor } from '../../interfaces/editorComponent';
import { MIN_HEIGHT, MAX_HEIGHT } from '../../constants/heightConstants';

import './editor.scss';

const Editor: FC<IEditor> = ({ getData }) => {
  const [activeButton, setActiveButton] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(false);

  const handleChange = (value: string): void => {
    setValue(value);
  };

  const buttonHandler = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setActiveButton(newAlignment);
    setOpen(true);
  };

  return (
    <Grid
      item
      container
      xs={12}
      md={12}
      lg={6}
      sx={{ mr: { xs: 1, lg: 0 }, bgcolor: 'background.paper' }}
      height={{ xs: '520px', lg: '100%' }}
      className="editor"
    >
      <Grid
        container
        item
        xs={12}
        className={classNames('editor__codemirror', {
          editor__codemirror_open: open,
        })}
      >
        <Grid item xs={10} lg={9}>
          <CodeMirrorGraphQL onChange={handleChange} height={open ? MIN_HEIGHT : MAX_HEIGHT} />
        </Grid>
        <Grid
          item
          xs={2}
          lg={3}
          sx={{ display: 'flex', alignItems: 'start', justifyContent: 'flex-end' }}
        >
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="editor__button"
            onClick={getData}
            sx={{ p: 1 }}
          >
            Run
          </Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        lg={12}
        sx={{ ml: 1 }}
        className={classNames('editor__options', {
          editor__options_open: open,
        })}
      >
        <div className="options__buttons">
          <ToggleButtonGroup
            color="primary"
            value={activeButton}
            exclusive
            onChange={buttonHandler}
            aria-label="Section"
          >
            <ToggleButton value="variables">Variables</ToggleButton>
            <ToggleButton value="headers">Headers</ToggleButton>
          </ToggleButtonGroup>
          <IconButton
            className={classNames('options__button-close', {
              'options__button-close_open': open,
            })}
            aria-label="close"
            size="small"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </div>
        <div
          className={classNames('options__content', {
            options__content_open: open,
          })}
        >
          {activeButton === 'variables' ? <Variables /> : null}
          {activeButton === 'headers' ? <Headers /> : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default Editor;
