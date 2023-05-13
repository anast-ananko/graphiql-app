import { FC, useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/hook';
import { selectQuery } from '../../store/features/editorSlice';
import { useGetSchemaQuery } from '../../store/services/graphQlApi';
import SchemaList from '../schemaList';

const DocumentationPanel: FC = () => {
  const storedQuery = useAppSelector(selectQuery);
  const [query, setQuery] = useState<string | void>();
  const { data, isError, isFetching } = useGetSchemaQuery(query);

  useEffect(() => {
    if (storedQuery.includes('__schema')) {
      setQuery(storedQuery);
    }
  }, [storedQuery]);

  return (
    <>
      {!isError && isFetching && <div>Loading...</div>}
      {!isError && data && <SchemaList schema={data} />}
    </>
  );
};

export default DocumentationPanel;
