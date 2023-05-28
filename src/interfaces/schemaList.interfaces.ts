import {
  IntrospectionField,
  IntrospectionInputValue,
  IntrospectionObjectType,
  IntrospectionQuery,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';

type AppIntrospectionTypes =
  | IntrospectionQuery
  | IntrospectionSchema
  | IntrospectionObjectType
  | IntrospectionObjectType[]
  | IntrospectionField
  | IntrospectionInputValue;

interface SchemaListProps {
  schema: IntrospectionQuery;
}

interface DocListProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

interface DocListItemProps {
  title: string;
  onClick: () => void;
  editorQuery?: string | null;
}

interface DocFieldsListProps {
  typeName: string;
  isQueries?: boolean;
}

interface DocFieldPanelProps {
  schemaField: IntrospectionField;
}

interface DocArgListProps {
  field: IntrospectionField | void;
}

interface TypeDescriptionProps {
  typeName: string;
}

interface SchemaNavButtonProps {
  name: string;
  disabled: boolean;
  onClick: () => void;
}

interface schemaBreadcrumb {
  title: string;
  documentationElement: JSX.Element;
}

interface DocBreadcrumbsProps {
  breadcrumbs: schemaBreadcrumb[];
  clickHandler: (arg: number) => void;
}

interface SchemaContextModel {
  schema: IntrospectionQuery;
  schemaTypes: readonly IntrospectionType[];
  breadcrumbSetter: (arg: schemaBreadcrumb) => void;
}

export type {
  SchemaListProps,
  DocListProps,
  DocListItemProps,
  DocFieldsListProps,
  DocArgListProps,
  AppIntrospectionTypes,
  SchemaNavButtonProps,
  TypeDescriptionProps,
  schemaBreadcrumb,
  DocFieldPanelProps,
  SchemaContextModel,
  DocBreadcrumbsProps,
};
