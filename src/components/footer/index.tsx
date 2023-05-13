import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container } from '@mui/material';

import { containerFooterStyle } from './footer.style';
import './footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <AppBar position="static">
        <Container style={{ ...containerFooterStyle }} className="footer__container" maxWidth="xl">
          <div className="footer__links">
            <Link className="footer__link" to="https://github.com/ablbsk" target="_blank"></Link>
            <Link className="footer__link" to="https://github.com/ExIxIxS" target="_blank"></Link>
            <Link
              className="footer__link"
              to="https://github.com/anast-ananko"
              target="_blank"
            ></Link>
          </div>
          <div className="footer__year">2023</div>
          <div className="footer__logo"></div>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
