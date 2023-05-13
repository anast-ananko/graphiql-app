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

export { isFieldsType, createBreadcrumb, sliceBreadcrumbsByLength };
