import React, { ReactElement } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { IElevationScroll } from '../../../interfaces/elevationScroll';

const ElevationScroll = ({ children }: IElevationScroll): ReactElement => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    style: {
      backgroundColor: trigger && '#40D4AF',
    },
  });
};

export default ElevationScroll;
