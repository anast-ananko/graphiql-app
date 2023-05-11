import { FC, useState } from 'react';

import { Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';

import CodeMirrorGraphQL from './code-mirror';
import Variables from './variables';
import Headers from './headers';
import { IEditor } from '../../interfaces/editorComponent';
import { MIN_HEIGHT, MAX_HEIGHT } from '../../constants/heightConstants';

import './editor.scss';

const Editor: FC<IEditor> = ({ getData }) => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState(false);

  const handleChange = (value: string): void => {
    setValue(value);
  };

  const buttonHandler = (num: number) => {
    setActiveButton(num);
    setOpen(true);
  };

  return (
    <Grid
      item
      container
      xs={12}
      md={12}
      lg={6}
      sx={{ mr: { xs: 1, md: 1, lg: 0 } }}
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
        <Grid item xs={10} lg={10}>
          <CodeMirrorGraphQL onChange={handleChange} height={open ? MIN_HEIGHT : MAX_HEIGHT} />
        </Grid>
        <Grid item xs={2} lg={2}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="editor__button"
            onClick={getData}
          ></Button>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        lg={12}
        className={classNames('editor__options', {
          editor__options_open: open,
        })}
      >
        <div className="options__buttons">
          <div className="options__buttons-section">
            <Button
              variant="contained"
              className={classNames('options__button-section', {
                'options__button-section_active': activeButton === 1,
              })}
              onClick={() => buttonHandler(1)}
            >
              Variables
            </Button>
            <Button
              variant="contained"
              className={classNames('options__button-section', {
                'options__button-section_active': activeButton === 2,
              })}
              onClick={() => buttonHandler(2)}
            >
              Headers
            </Button>
          </div>
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
          {activeButton === 1 ? <Variables /> : null}
          {activeButton === 2 ? <Headers /> : null}
        </div>
      </Grid>
    </Grid>
  );
};

export default Editor;
