import {
  IntrospectionField,
  IntrospectionInputValue,
  IntrospectionObjectType,
  IntrospectionQuery,
  IntrospectionSchema,
} from 'graphql';

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
}

interface DocFieldListProps {
  data: IntrospectionObjectType | void;
  fieldClickHandler: (arg: string) => void;
}

interface DocArgListProps {
  data: IntrospectionField | void;
  argClickHandler: (arg: string) => void;
}

type AppIntrospectionTypes =
  | IntrospectionQuery
  | IntrospectionSchema
  | IntrospectionObjectType
  | IntrospectionObjectType[]
  | IntrospectionField
  | IntrospectionInputValue;

interface SchemaNavButtonProps {
  name: string;
  disabled: boolean;
  onClick: () => void;
}

export type {
  SchemaListProps,
  DocListProps,
  DocListItemProps,
  DocFieldListProps,
  DocArgListProps,
  AppIntrospectionTypes,
  SchemaNavButtonProps,
};
