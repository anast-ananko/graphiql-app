import { IntrospectionInterfaceType, IntrospectionObjectType, IntrospectionType } from 'graphql';
import { schemaBreadcrumb } from '../interfaces/schemaList.interfaces';

function isFieldsType(
  obj: IntrospectionType
): obj is IntrospectionObjectType | IntrospectionInterfaceType {
  return obj.kind === 'OBJECT' || obj.kind === 'INTERFACE';
}

function createBreadcrumb(props: schemaBreadcrumb): schemaBreadcrumb {
  return { ...props };
}

function sliceBreadcrumbsByLength(length: number, arr: schemaBreadcrumb[]): schemaBreadcrumb[] {
  return arr.slice(0, length);
}

function getEditorQueryByFieldName(fieldName: string): string {
  const query = `query ${
    fieldName.slice(0, 1).toLocaleUpperCase() + fieldName.slice(1)
  } {\n  ${fieldName} {\n\n }\n}`;

  return query;
}

export { isFieldsType, createBreadcrumb, sliceBreadcrumbsByLength, getEditorQueryByFieldName };
