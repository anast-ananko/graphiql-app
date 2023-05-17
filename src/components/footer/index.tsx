import { FC } from 'react';
import { AppBar, Button, Grid, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import './footer.scss';

const Footer: FC = () => {
  return (
    <AppBar position="static" className="footer" sx={{ padding: { xs: '15px', sm: '10px 60px' } }}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Grid item container xs sx={{ display: { xs: 'none', sm: 'grid' } }}>
          <Typography variant="subtitle1" justifyContent="flex-start">
            2023
          </Typography>
        </Grid>
        <Grid item container xs={4} sx={{ justifyContent: { xs: 'flex-start', sm: 'center' } }}>
          <Button href="https://rs.school/react/" color="inherit">
            <img className="footer__rss" src="rs-school.png" alt="RS School React final project" />
          </Button>
        </Grid>
        <Grid item container xs justifyContent="flex-end">
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
