/* eslint-disable prettier/prettier */
import { FC, useState } from 'react';

import { Button, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import classNames from 'classnames';

import CodeMirrorGraphQL from './code-mirror';
import Variables from './variables';
import Headers from './headers';

import './editor.scss';

const Editor: FC = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  const handleChange = (value: string) => {
    setValue(value);
  };

  return (
    <Grid
      item
      container
      xs={12}
      md={12}
      lg={6}
      sx={{ mr: { xs: 1, md: 1, lg: 0 }}}
      className="editor"
    >
      <Grid item xs={10} lg={10}>
        <CodeMirrorGraphQL onChange={handleChange} />
      </Grid>
      <Grid item xs={2} lg={2}>
          <Button variant="contained" endIcon={<SendIcon />} className="editor__button"></Button>
      </Grid>
      <Grid item xs={12} lg={12} className="editor__options">
          <div className="options__buttons">
            <Button
              variant="contained"
              className={classNames('options__button', {
                'options__button_active': activeButton === 1,
              })}
              onClick={() => setActiveButton(1)}
            >
              Variables
            </Button>
            <Button
              variant="contained"
              className={classNames('options__button', {
                'options__button_active': activeButton === 2,
              })}
              onClick={() => setActiveButton(2)}
            >
              Headers
            </Button>
          </div>
          <div className='options__content'>
            {activeButton === 1 ? (
              <Variables />
            ) : null}
            {activeButton === 2 ? (
              <Headers />
            ) : null}  
          </div>          
      </Grid>
    </Grid>
  );
};

export default Editor;
