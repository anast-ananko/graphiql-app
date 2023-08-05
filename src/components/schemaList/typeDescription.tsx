import { FC, useContext } from 'react';

import Typography from '@mui/material/Typography';

import { TypeDescriptionProps } from '../../interfaces/schemaList.interfaces';
import { SchemaContext } from '.';

const TypeDescription: FC<TypeDescriptionProps> = ({ typeName }) => {
  const schemaContext = useContext(SchemaContext);
  const type = schemaContext.schemaTypes.find((type) => type.name === typeName);
  const description = type?.description ?? 'without description';

  return (
    <>
      <Typography variant="body2" align="center" className="max-width">
        {`Metadata for ${typeName} type:`}
      </Typography>
      <Typography variant="body2" align="center" className="max-width">
        {description}
      </Typography>
    </>
  );
};

export default TypeDescription;
