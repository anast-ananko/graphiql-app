import { FC } from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { DocListItemProps } from '../../interfaces/schemaList.interfaces';
import { useAppDispatch } from '../../hooks/hook';
import { updateQuery } from '../../store/features/editorSlice';

const DocListItem: FC<DocListItemProps> = ({ title, onClick, editorQuery }) => {
  const dispatch = useAppDispatch();

  function addQuery() {
    if (editorQuery) {
      dispatch(updateQuery(editorQuery));
      onClick();
    }
  }

  return (
    <ListItem
      secondaryAction={
        editorQuery ? (
          <IconButton onClick={addQuery} edge="end" aria-label="Add Circle Outline Icon">
            <AddCircleOutlineIcon />
          </IconButton>
        ) : null
      }
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={title} onClick={onClick} />
      </ListItemButton>
    </ListItem>
  );
};

export default DocListItem;
