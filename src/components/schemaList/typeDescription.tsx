import { FC, useContext } from 'react';

import { TypeDescriptionProps } from '../../interfaces/schemaList.interfaces';
import { SchemaContext } from '.';

const TypeDescription: FC<TypeDescriptionProps> = ({ typeName }) => {
  const schemaContext = useContext(SchemaContext);
  const type = schemaContext.schemaTypes.find((type) => type.name === typeName);
  const description = type?.description ?? 'without description';

  return (
    <>
      <h3 className="max-width">{`Metadata for ${typeName} type:`}</h3>
      <p className="max-width">{description}</p>
    </>
  );
};

export default TypeDescription;
