import { FC, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks/hook';
import { selectQuery } from '../../store/features/editorSlice';
import { useLazyGetSchemaQuery } from '../../store/services/graphQlApi';
import SchemaList from '../schemaList';

const DocumentationPanel: FC<{ openState: boolean }> = ({ openState }) => {
  const { t: localize } = useTranslation();
  const storedQuery = useAppSelector(selectQuery);
  const [query, setQuery] = useState<string | void>();
  const [getSchema, { isError, isFetching, data }] = useLazyGetSchemaQuery();

  useEffect(() => {
    if (storedQuery.includes('__schema')) {
      setQuery(storedQuery);
    }
  }, [storedQuery]);

  useEffect(() => {
    if (openState && !data) {
      getSchema(query);
    }
  }, [openState]);

  return (
    <>
      {!isError && !isFetching && data && (
        <>
          <h1 className="explorer__title">{localize('explorer.title')}</h1>
          <SchemaList schema={data} />
        </>
      )}
    </>
  );
};

export default DocumentationPanel;
