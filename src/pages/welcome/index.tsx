import { FC } from 'react';
import WelcomeContent from '../../components/welcomeContent';

import './welcome.scss';

const Welcome: FC = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page__title">Welcome to StarWars GraphQl far, far away.</h1>
      <WelcomeContent />
    </div>
  );
};

export default Welcome;
