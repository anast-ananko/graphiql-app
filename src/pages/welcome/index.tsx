import { FC } from 'react';

import WelcomeToolbar from '../../components/welcomeToolbar';
import WelcomeContent from '../../components/welcomeContent';

import './welcome.scss';

const Welcome: FC = () => {
  return (
    <div className="welcome-page">
      <WelcomeToolbar></WelcomeToolbar>
      <h1 className="welcome-page__title">Welcome to StarWars GraphQl far, far away.</h1>
      <WelcomeContent />
    </div>
  );
};

export default Welcome;
