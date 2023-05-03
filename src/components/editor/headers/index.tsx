import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { updateHeaders } from '../../../store/features/headersSlice';

const Headers: FC = () => {
  const { value } = useAppSelector((state) => state.userHeaders);
  const dispatch = useAppDispatch();

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    let header;
    dispatch(updateHeaders({}));
    if (key === 'authorization' && event.target.value) {
      header = { ...value, Authorization: event.target.value };
    }
    if (key === 'access-control-origin') {
      header = { ...value, 'Access-Control-Allow-Origin': event.target.value };
    }
    if (key === 'access-control-credentials') {
      header = { ...value, 'Access-Control-Allow-Credentials': event.target.value };
    }
    if (key === 'connection') {
      header = { ...value, Connection: event.target.value };
    }
    dispatch(updateHeaders(header));
  };

  return (
    <div className="headers">
      <div className="headers__header">
        <label htmlFor="authorization-input" className="header__label">
          Authorization:{' '}
        </label>
        <input id="authorization-input" onChange={(event) => handleInput(event, 'authorization')} />
      </div>
      <div className="headers__header">
        <label htmlFor="access-control-origin-input" className="header__label">
          Access-Control-Allow-Origin:{' '}
        </label>
        <input
          id="access-control-origin-input"
          onChange={(event) => handleInput(event, 'access-control-origin')}
        />
      </div>
      <div className="headers__header">
        <label htmlFor="access-control-credentials-input" className="header__label">
          Access-Control-Allow-Credentials:{' '}
        </label>
        <input
          id="access-control-credentials-input"
          onChange={(event) => handleInput(event, 'access-control-credentials')}
        />
      </div>
      <div className="headers__header">
        <label htmlFor="connection-input" className="header__label">
          Connection:{' '}
        </label>
        <input id="connection-input" onChange={(event) => handleInput(event, 'connection')} />
      </div>
    </div>
  );
};

export default Headers;
