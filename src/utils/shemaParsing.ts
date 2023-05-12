import { IntrospectionObjectType, IntrospectionType } from 'graphql';
import { AppIntrospectionTypes } from '../interfaces/schemaList.interfaces';

function getSchemaLevelByPath(schema: AppIntrospectionTypes, path: string): AppIntrospectionTypes {
  const result = path
    .split('/')
    .reduce(
      (currentLevel, pathName) => currentLevel?.[pathName as keyof typeof currentLevel],
      schema
    );
  return result;
}

function isIntrospectionObjectType(obj: IntrospectionType): obj is IntrospectionObjectType {
  return obj.kind === 'OBJECT';
}

export { getSchemaLevelByPath, isIntrospectionObjectType };
