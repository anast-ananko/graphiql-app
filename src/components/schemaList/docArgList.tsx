import { FC } from 'react';

import DocList from './docList';
import DocListItem from './docListItem';

import { IntrospectionNamedTypeRef, IntrospectionOutputType } from 'graphql';
import { DocArgListProps } from '../../interfaces/schemaList.interfaces';

const DocArgList: FC<DocArgListProps> = ({ data, argClickHandler }) => {
  if (data) {
    return (
      <DocList title="Arguments">
        {data.args.map((arg) => {
          return (
            <DocListItem
              key={Math.random() * 10 ** 8} // refactor!!!
              title={`${arg.name}:${
                (arg.type as IntrospectionNamedTypeRef<IntrospectionOutputType>).name
              }`}
              onClick={argClickHandler.bind(null, arg.name)}
            ></DocListItem>
          );
        })}
      </DocList>
    );
  }

  return null;
};

export default DocArgList;
