import { FC, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import { SchemaContext } from '.';
import {
  createBreadcrumb,
  getEditorQueryByFieldName,
  isFieldsType,
} from '../../utils/shemaParsing';
import DocList from './docList';
import DocListItem from './docListItem';
import DocFieldPanel from './docFieldPanel';

import {
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionOutputType,
} from 'graphql';
import { DocFieldsListProps } from '../../interfaces/schemaList.interfaces';

const DocFieldsList: FC<DocFieldsListProps> = ({ typeName, isQueries = false }) => {
  const schemaContext = useContext(SchemaContext);
  const type = schemaContext.schemaTypes?.find((type) => type.name === typeName);

  if (type && isFieldsType(type) && type.fields) {
    return (
      <DocList title="Fields">
        {type.fields.map((field) => {
          const fieldName = field.name;
          const typeName =
            (field.type as IntrospectionNamedTypeRef<IntrospectionOutputType>).name ??
            (field.type as IntrospectionListTypeRef<IntrospectionOutputType>).ofType.name;
          const element = <DocFieldPanel schemaField={field} />;
          const newBreadcrumb = createBreadcrumb({
            title: field.name,
            documentationElement: element,
          });
          const editorQuery = getEditorQueryByFieldName(field.name);

          return (
            <DocListItem
              key={uuid()}
              title={`${fieldName}: ${typeName}`}
              editorQuery={isQueries ? editorQuery : null}
              onClick={schemaContext.breadcrumbSetter.bind(null, newBreadcrumb)}
            ></DocListItem>
          );
        })}
      </DocList>
    );
  }

  return null;
};

export default DocFieldsList;
