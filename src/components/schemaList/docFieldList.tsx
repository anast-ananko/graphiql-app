import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { isIntrospectionObjectType } from '../../utils/shemaParsing';
import DocList from './docList';
import DocListItem from './docListItem';

import { IntrospectionNamedTypeRef, IntrospectionOutputType } from 'graphql';
import { DocFieldListProps } from '../../interfaces/schemaList.interfaces';

const DocFieldList: FC<DocFieldListProps> = ({ data, fieldClickHandler }) => {
  if (data && isIntrospectionObjectType(data) && data.fields) {
    return (
      <DocList title="Fields">
        {data.fields.map((field) => {
          return (
            <DocListItem
              key={uuid()}
              title={`${field.name}:${
                (field.type as IntrospectionNamedTypeRef<IntrospectionOutputType>).name
              }`}
              onClick={fieldClickHandler.bind(null, field.name)}
            ></DocListItem>
          );
        })}
      </DocList>
    );
  }

  return null;
};

export default DocFieldList;
