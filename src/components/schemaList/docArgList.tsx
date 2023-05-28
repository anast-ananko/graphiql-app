import { FC, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import DocList from './docList';
import DocListItem from './docListItem';
import { SchemaContext } from '.';
import TypeDescription from './typeDescription';
import { createBreadcrumb } from '../../utils/shemaParsing';

import { IntrospectionNamedTypeRef, IntrospectionOutputType } from 'graphql';
import { DocArgListProps } from '../../interfaces/schemaList.interfaces';

const DocArgList: FC<DocArgListProps> = ({ field }) => {
  const schemaContext = useContext(SchemaContext);

  if (field && field.args.length) {
    return (
      <DocList title="Arguments">
        {field.args.map((arg) => {
          const argName = arg.name;
          const typeName = (arg.type as IntrospectionNamedTypeRef<IntrospectionOutputType>).name;
          const element = <TypeDescription typeName={typeName} />;
          const newBreadcrumb = createBreadcrumb({
            title: argName,
            documentationElement: element,
          });

          return (
            <DocListItem
              key={uuid()}
              title={`${argName}:${typeName}`}
              onClick={schemaContext.breadcrumbSetter.bind(null, newBreadcrumb)}
            ></DocListItem>
          );
        })}
      </DocList>
    );
  }

  return null;
};

export default DocArgList;
