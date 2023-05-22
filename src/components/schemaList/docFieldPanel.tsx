import { FC } from 'react';
import DocArgList from './docArgList';
import TypeDescription from './typeDescription';
import DocFieldsList from './docFieldsList';

import {
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionOutputType,
} from 'graphql';
import { DocFieldPanelProps } from '../../interfaces/schemaList.interfaces';

const DocFieldPanel: FC<DocFieldPanelProps> = ({ schemaField }) => {
  const fieldName = schemaField.name;
  const typeName =
    (schemaField.type as IntrospectionNamedTypeRef<IntrospectionOutputType>).name ??
    (schemaField.type as IntrospectionListTypeRef<IntrospectionOutputType>).ofType.name;

  return (
    <>
      <h2 className="max-width">{`${fieldName}:${typeName}`}</h2>
      <DocArgList field={schemaField} />
      <TypeDescription typeName={typeName} />
      <DocFieldsList typeName={typeName} />
    </>
  );
};

export default DocFieldPanel;
