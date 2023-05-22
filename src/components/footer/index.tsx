import { FC } from 'react';
import { AppBar, Button, Grid, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  footerBar,
  footerContainer,
  footerYear,
  footerRSSchool,
  footerGithubProfiles,
} from './footer.style.ts';

const Footer: FC = () => {
  return (
    <AppBar className="footer" {...footerBar}>
      <Grid {...footerContainer}>
        <Grid {...footerYear}>
          <Typography>2023</Typography>
        </Grid>
        <Grid {...footerRSSchool}>
          <Button href="https://rs.school/react/" color="inherit" target="_blank">
            <img
              src="rs-school.png"
              style={{ height: '50px ' }}
              alt="RS School React final project"
            />
          </Button>
        </Grid>
        <Grid {...footerGithubProfiles}>
          <IconButton href="https://github.com/ablbsk" target="_blank" aria-label="Github @ablbsk">
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://github.com/ExIxIxS"
            target="_blank"
            aria-label="Github @ExIxIxS"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://github.com/anast-ananko"
            target="_blank"
            aria-label="Github @anast-ananko"
          >
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
