import React, { ReactElement, useEffect } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { IElevationScroll } from '../../../interfaces/elevationScroll';

const ElevationScroll = ({ children, setIsScroll }: IElevationScroll): ReactElement => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  useEffect(() => setIsScroll(trigger), [trigger]);

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      borderTop: '0px',
      borderRight: '0px',
      borderLeft: '0px',
      borderBottom: '4px',
      borderStyle: 'solid',
      borderColor: trigger && '#ffe919',
    },
  });
};

export default ElevationScroll;
