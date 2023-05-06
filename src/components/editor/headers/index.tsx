import { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { updateHeaders } from '../../../store/features/headersSlice';

const Headers: FC = () => {
  const { value } = useAppSelector((state) => state.userHeaders);

  const [authorization, setAuthorization] = useState<string>(value?.Authorization || '');
  const [accessControlAllowOrigin, setAccessControlAllowOrigin] = useState<string>(
    value?.['Access-Control-Allow-Origin'] || ''
  );
  const [accessControlAllowCredentials, setAccessControlAllowCredentials] = useState<string>(
    value?.['Access-Control-Allow-Credentials'] || ''
  );
  const [connection, setConnection] = useState<string>(value?.Connection || '');

  const dispatch = useAppDispatch();

  const getHeader = (event: React.ChangeEvent<HTMLInputElement>, propName: string) => {
    return !event.target.value
      ? { ...value, [propName]: null }
      : { ...value, [propName]: event.target.value };
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>, key: string): void => {
    const header = getHeader(event, key);
    dispatch(updateHeaders(header));

    if (key === 'Authorization') {
      setAuthorization(event.target.value);
    } else if (key === 'Access-Control-Allow-Origin') {
      setAccessControlAllowOrigin(event.target.value);
    } else if (key === 'Access-Control-Allow-Credentials') {
      setAccessControlAllowCredentials(event.target.value);
    } else if (key === 'Connection') {
      setConnection(event.target.value);
    }
  };

  return (
    <div className="headers">
      <div className="headers__header">
        <label htmlFor="authorization-input" className="header__label">
          Authorization:{' '}
        </label>
        <input
          id="authorization-input"
          value={authorization}
          onChange={(event) => handleInput(event, 'Authorization')}
        />
      </div>
      <div className="headers__header">
        <label htmlFor="access-control-origin-input" className="header__label">
          Access-Control-Allow-Origin:{' '}
        </label>
        <input
          id="access-control-origin-input"
          value={accessControlAllowOrigin}
          onChange={(event) => handleInput(event, 'Access-Control-Allow-Origin')}
        />
      </div>
      <div className="headers__header">
        <label htmlFor="access-control-credentials-input" className="header__label">
          Access-Control-Allow-Credentials:{' '}
        </label>
        <input
          id="access-control-credentials-input"
          value={accessControlAllowCredentials}
          onChange={(event) => handleInput(event, 'Access-Control-Allow-Credentials')}
        />
      </div>
      <div className="headers__header">
        <label htmlFor="connection-input" className="header__label">
          Connection:{' '}
        </label>
        <input
          id="connection-input"
          value={connection}
          onChange={(event) => handleInput(event, 'Connection')}
        />
      </div>
    </div>
  );
};

export default Headers;
