import { FC, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Breadcrumbs from '@mui/material/Breadcrumbs';

import { getSchemaLevelByPath } from '../../utils/shemaParsing';
import SchemaNavButton from './schemaNavButton';
import DocList from './docList';
import DocListItem from './docListItem';
import DocFieldList from './docFieldList';
import DocArgList from './docArgList';

import {
  IntrospectionField,
  IntrospectionInputValue,
  IntrospectionNamedTypeRef,
  IntrospectionObjectType,
  IntrospectionOutputType,
} from 'graphql';
import { SchemaListProps } from '../../interfaces/schemaList.interfaces';

import './schemaList.scss';

const SchemaList: FC<SchemaListProps> = ({ schema }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<JSX.Element[]>();
  const [schemaLevelPath, setSchemaLevelPath] = useState('__schema');
  const [schemaLevel, setSchemaLevel] = useState(getSchemaLevelByPath(schema, schemaLevelPath));
  const schemaRootLevel = (schema.__schema.types as IntrospectionObjectType[]).find(
    (type) => type.name === 'Root'
  );

  function handleRootClick(): void {
    const newSchemaLevelPath = `${schemaLevelPath}/types`;
    setSchemaLevelPath(newSchemaLevelPath);
    setSchemaLevel(getSchemaLevelByPath(schema, newSchemaLevelPath));
  }

  function handleFieldClick(fieldName: string): void {
    const typeIndex = (schema.__schema.types as IntrospectionObjectType[]).findIndex(
      (type) => type.name === 'Root'
    );
    const fieldIndex = (schema.__schema.types as IntrospectionObjectType[])?.[
      typeIndex
    ]?.fields.findIndex((field) => field.name === fieldName);
    const newSchemaLevelPath = `${schemaLevelPath}/${typeIndex}/fields/${fieldIndex}`;
    setSchemaLevelPath(newSchemaLevelPath);
    setSchemaLevel(getSchemaLevelByPath(schema, newSchemaLevelPath));
  }

  function handleArgClick(argName: string): void {
    const argIndex = (schemaLevel as IntrospectionField).args.findIndex(
      (arg) => arg.name === argName
    );
    const newSchemaLevelPath = `${schemaLevelPath}/args/${argIndex}`;
    setSchemaLevelPath(newSchemaLevelPath);
    setSchemaLevel(getSchemaLevelByPath(schema, newSchemaLevelPath));
  }

  useEffect(() => {
    let currentPath = '';
    const breadcrumbsIndexes = [0, 1, 4, 6];
    const breadcrumbsTitle = {
      0: 'Root',
      1: 'Root',
    };

    setBreadcrumbs(
      schemaLevelPath
        .split('/')
        .map((name, index, arr) => {
          currentPath += `/${name}`;
          const currentLevelPath = currentPath.slice(1);
          const currentLevel = getSchemaLevelByPath(schema, currentLevelPath);
          const handleClick = () => {
            setSchemaLevelPath(currentLevelPath);
            setSchemaLevel(getSchemaLevelByPath(schema, currentLevelPath));
          };
          const buttonTitle =
            breadcrumbsTitle?.[index as keyof typeof breadcrumbsTitle] ??
            (currentLevel as { name: string })?.name ??
            name;
          return (
            <SchemaNavButton
              key={uuid()}
              name={buttonTitle}
              onClick={handleClick}
              disabled={index === arr.length - 1}
            />
          );
        })
        .filter((_, index) => breadcrumbsIndexes.includes(index))
    );
  }, [schema, schemaLevel, schemaLevelPath]);

  return (
    <div className="documentation-panel">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      {schemaLevelPath === '__schema' && (
        <DocList title="Root Types">
          <DocListItem title="query: root" onClick={handleRootClick}></DocListItem>
        </DocList>
      )}
      {schemaLevelPath === '__schema/types' && (
        <DocList title="Root">
          <DocFieldList data={schemaRootLevel} fieldClickHandler={handleFieldClick}></DocFieldList>
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
