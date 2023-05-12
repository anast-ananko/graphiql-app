import { FC } from 'react';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

import { DocListProps } from '../../interfaces/schemaList.interfaces';

const DocList: FC<DocListProps> = ({ title, children }) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>{title}</ListSubheader>}
    >
      {children}
    </List>
  );
};

export default DocList;