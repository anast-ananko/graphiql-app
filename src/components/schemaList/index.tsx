import { FC, useEffect, useState } from 'react';
import {
  IntrospectionField,
  IntrospectionInputValue,
  IntrospectionNamedTypeRef,
  IntrospectionObjectType,
  IntrospectionOutputType,
  IntrospectionQuery,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';

import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';

import Breadcrumbs from '@mui/material/Breadcrumbs';

import './schemaList.scss';

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

type MyIntrospectionTypes =
  | IntrospectionQuery
  | IntrospectionSchema
  | IntrospectionObjectType
  | IntrospectionObjectType[]
  | IntrospectionField
  | IntrospectionInputValue;

function Button({ name, onClick }: { name: string; onClick: () => void }): JSX.Element {
  return <button onClick={onClick}>{name}</button>;
}

const DocList: FC<DocListProps> = ({ title, children }) => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}
      subheader={<ListSubheader>{title}</ListSubheader>}
    >
      {children}
    </List>
  );
};

const DocFieldList: FC<DocFieldListProps> = ({ data, fieldClickHandler }) => {
  if (data && isIntrospectionObjectType(data) && data.fields) {
    return (
      <DocList title="Fields">
        {data.fields.map((field) => {
          return (
            <DocListItem
              key={Math.random() * 10 ** 8}
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

const DocArgList: FC<DocArgListProps> = ({ data, argClickHandler }) => {
  if (data) {
    return (
      <DocList title="Arguments">
        {data.args.map((arg) => {
          return (
            <DocListItem
              key={Math.random() * 10 ** 8}
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

const DocListItem: FC<DocListItemProps> = ({ title, onClick }) => {
  return (
    <ListItemButton>
      <ListItemText primary={title} onClick={onClick} />
    </ListItemButton>
  );
};

function getSchemaLevelByPath(schema: MyIntrospectionTypes, path: string) {
  const result = path
    .split('/')
    .reduce(
      (currentLevel, pathName) => currentLevel?.[pathName as keyof typeof currentLevel],
      schema
    );
  return result;
}

const SchemaList: FC<SchemaListProps> = ({ schema }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<JSX.Element[]>();
  const [schemaLevelPath, setSchemaLevelPath] = useState('__schema');
  const [schemaLevel, setSchemaLevel] = useState(getSchemaLevelByPath(schema, schemaLevelPath));

  function handleRootClick(): void {
    console.log('handleRootClick');
    const newSchemaLevelPath = `${schemaLevelPath}/types`;
    setSchemaLevelPath(newSchemaLevelPath);
    setSchemaLevel(getSchemaLevelByPath(schema, newSchemaLevelPath));
  }

  function handleFieldClick(fieldName: string): void {
    console.log('handleFieldClick');
    const typeIndex = (schema.__schema.types as IntrospectionObjectType[]).findIndex(
      (type) => type.name === 'Root'
    );
    const fieldIndex = (schema.__schema.types as IntrospectionObjectType[])?.[
      typeIndex
    ]?.fields.findIndex((field) => field.name === fieldName);
    const newSchemaLevelPath = `${schemaLevelPath}/${typeIndex}/fields/${fieldIndex}`;
    setSchemaLevelPath(newSchemaLevelPath);
    setSchemaLevel(getSchemaLevelByPath(schema, newSchemaLevelPath));
    console.log(getSchemaLevelByPath(schema, newSchemaLevelPath));
  }

  function handleArgClick(argName: string): void {
    console.log('handleArgClick');
    const argIndex = (schemaLevel as IntrospectionField).args.findIndex(
      (arg) => arg.name === argName
    );
    const newSchemaLevelPath = `${schemaLevelPath}/args/${argIndex}`;
    setSchemaLevelPath(newSchemaLevelPath);
    setSchemaLevel(getSchemaLevelByPath(schema, newSchemaLevelPath));
    console.log(getSchemaLevelByPath(schema, newSchemaLevelPath));
  }

  useEffect(() => {
    let currentPath = '';
    setBreadcrumbs(
      schemaLevelPath.split('/').map((name) => {
        currentPath += `/${name}`;
        const currentLevelPath = currentPath.slice(1);
        const handleClick = () => {
          setSchemaLevelPath(currentLevelPath);
          setSchemaLevel(getSchemaLevelByPath(schema, currentLevelPath));
        };
        return <Button key={Date.now()} name={name} onClick={handleClick} />;
      })
    );
  }, [schema, schemaLevel, schemaLevelPath]);

  return (
    <div className="documentation-panel">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      {schemaLevelPath}
      {schemaLevelPath === '__schema' && (
        <DocList title="Root Types">
          <DocListItem title="query: root" onClick={handleRootClick}></DocListItem>
        </DocList>
      )}
      {schemaLevelPath === '__schema/types' && (
        <DocList title="Root">
          <DocFieldList
            data={(schemaLevel as IntrospectionObjectType[]).find((item) => item.name === 'Root')}
            fieldClickHandler={handleFieldClick}
          ></DocFieldList>
        </DocList>
      )}
      {schemaLevelPath.includes('fields') && schemaLevelPath.split('/').length === 5 && (
        <DocList
          title={`${(schemaLevel as IntrospectionField).name}:${
            (
              (schemaLevel as IntrospectionField)
                .type as IntrospectionNamedTypeRef<IntrospectionOutputType>
            ).name
          }`}
        >
          <DocArgList
            data={schemaLevel as IntrospectionField}
            argClickHandler={handleArgClick}
          ></DocArgList>
        </DocList>
      )}
      {schemaLevelPath.includes('args') && (
        <>
          <h2>{`${(schemaLevel as IntrospectionInputValue).name}:${
            (
              (schemaLevel as IntrospectionInputValue)
                .type as IntrospectionNamedTypeRef<IntrospectionOutputType>
            ).name
          }`}</h2>
          <p>description</p>
        </>
      )}
    </div>
  );
};

function isIntrospectionObjectType(obj: IntrospectionType): obj is IntrospectionObjectType {
  return obj.kind === 'OBJECT';
}

export default SchemaList;

/*
{
  "__schema": {
    "queryType": {
      "name": "Root"
    },
    "types": [
      {
        "kind": "OBJECT",
        "name": "Root",
        "description": null,
        "fields": [
          {
            "name": "allFilms",
            "description": null,
            "args": [
              {
                "name": "after",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              },
              {
                "name": "first",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "before",
                "type": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              },
              {
                "name": "last",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              }
            ],
            "type": {
              "kind": "OBJECT",
              "name": "FilmsConnection",
              "ofType": null
            }
          },
*/
