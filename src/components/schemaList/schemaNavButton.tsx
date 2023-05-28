import { FC } from 'react';

import Button from '@mui/material/Button';

import { SchemaNavButtonProps } from '../../interfaces/schemaList.interfaces';

const SchemaNavButton: FC<SchemaNavButtonProps> = ({ name, disabled, onClick }) => {
  return (
    <Button size="small" disabled={disabled} onClick={onClick}>
      {name}
    </Button>
  );
};

export default SchemaNavButton;
