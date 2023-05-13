import { FC, useState } from 'react';

import { Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import CodeMirrorGraphQL from './code-mirror';
import Variables from './variables';
import Headers from './headers';
import { IEditor } from '../../interfaces/editorComponent';
import { MIN_HEIGHT, MAX_HEIGHT } from '../../constants/heightConstants';

import {
  gridEditorStyle,
  gridEditorCodemirrorStyle,
  gridRunButtonStyle,
  gridEditorOptionsStyle,
} from './editor.style';
import './editor.scss';

const Editor: FC<IEditor> = ({ getData }) => {
  const [activeButton, setActiveButton] = useState<string>('');
  const [open, setOpen] = useState(false);

  const { t: localize } = useTranslation();

  const buttonHandler = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setActiveButton(newAlignment);
    setOpen(true);
  };

  return (
    <Grid {...gridEditorStyle} className="editor">
      <Grid
        {...gridEditorCodemirrorStyle}
        className={classNames('editor__codemirror', {
          editor__codemirror_open: open,
        })}
      >
        <Grid item xs={10} lg={10}>
          <CodeMirrorGraphQL height={open ? MIN_HEIGHT : MAX_HEIGHT} />
        </Grid>
        <Grid {...gridRunButtonStyle}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="editor__button"
            onClick={getData}
            sx={{ p: 1 }}
          ></Button>
        </Grid>
      </Grid>
      <Grid
        {...gridEditorOptionsStyle}
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
            <ToggleButton value="variables">{localize('editor.variables')}</ToggleButton>
            <ToggleButton value="headers">{localize('editor.headers')}</ToggleButton>
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
