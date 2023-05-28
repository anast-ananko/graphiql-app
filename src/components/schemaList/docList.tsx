import { FC } from 'react';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';

import { DocListProps } from '../../interfaces/schemaList.interfaces';
import { listProps } from './schemaList.style';

const DocList: FC<DocListProps> = ({ title, children }) => {
  return (
    <List {...listProps} subheader={<ListSubheader>{title}</ListSubheader>}>
      {children}
    </List>
  );
};

export default DocList;
