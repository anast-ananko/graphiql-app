import { FC } from 'react';

import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import { DocListItemProps } from '../../interfaces/schemaList.interfaces';

const DocListItem: FC<DocListItemProps> = ({ title, onClick }) => {
  return (
    <ListItemButton>
      <ListItemText primary={title} onClick={onClick} />
    </ListItemButton>
  );
};

export default DocListItem;
