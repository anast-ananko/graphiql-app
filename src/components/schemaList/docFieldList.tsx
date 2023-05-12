import { FC } from 'react';

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
              key={Math.random() * 10 ** 8} // refactor!!!
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
