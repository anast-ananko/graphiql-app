import { FC, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror-graphql/mode';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror-graphql/hint';
import 'codemirror/theme/dracula.css';
import { Button, Grid, ThemeProvider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { createTheme } from '@mui/material/styles';

import CodeMirrorGraphQL from '../code-mirror';

import './editor.scss';

const Editor: FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#00acc1',
      },
    },
  });

  const [value, setValue] = useState<string>('');

  //const myGraphQLSchema = {};

  const handleChange = (value: string) => {
    setValue(value);
    console.log(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item lg={10}>
        <CodeMirrorGraphQL onChange={handleChange} />
      </Grid>
      <Grid item lg={2}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ mt: 1 }}
          className="editor__button"
        ></Button>
      </Grid>
    </ThemeProvider>
  );
};

export default Editor;
