import { FC, createContext, useEffect, useState } from 'react';

import DocList from './docList';
import DocListItem from './docListItem';
import DocFieldsList from './docFieldsList';
import DocBreadcrumbs from './docBreadcrumbs';
import { sliceBreadcrumbsByLength } from '../../utils/shemaParsing';
import { ROOT_QUERY } from '../../constants/queryConstants';

import {
  SchemaContextModel,
  SchemaListProps,
  schemaBreadcrumb,
} from '../../interfaces/schemaList.interfaces';

import './schemaList.scss';

const SchemaContext = createContext({} as SchemaContextModel);

const SchemaList: FC<SchemaListProps> = ({ schema }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<schemaBreadcrumb[]>([]);
  const [currentDocumentation, setCurrentDocumentation] = useState<JSX.Element>();
  const [addedBreadcrumb, setAddedBreadcrumb] = useState<schemaBreadcrumb | null>();

  function addBreadcrumb(newBreadcrumb: schemaBreadcrumb): void {
    setAddedBreadcrumb(newBreadcrumb);
  }

  function cutBreadcrumbsByLength(length: number) {
    const slicedArr = sliceBreadcrumbsByLength(length, breadcrumbs);
    setBreadcrumbs(slicedArr);
    setAddedBreadcrumb(null);
  }

  useEffect(() => {
    const rootBreadcrumb: schemaBreadcrumb = {
      title: 'Root query',
      documentationElement: (
        <DocList title="Root">
          <DocFieldsList typeName={'Root'} isQueries={true} />
        </DocList>
      ),
    };

    const initialBreadcrumbs: schemaBreadcrumb[] = [
      {
        title: 'Root',
        documentationElement: (
          <DocList title="Root Types">
            <DocListItem
              title="query: Root"
              onClick={addBreadcrumb.bind(null, rootBreadcrumb)}
              editorQuery={ROOT_QUERY}
            />
          </DocList>
        ),
      },
    ];

    setBreadcrumbs(initialBreadcrumbs);
  }, []);

  useEffect(() => {
    if (addedBreadcrumb) {
      setBreadcrumbs([...breadcrumbs, addedBreadcrumb]);
    }
  }, [addedBreadcrumb]);

  useEffect(() => {
    const currentDoc = breadcrumbs.at(-1)?.documentationElement;

    if (currentDoc) {
      setCurrentDocumentation(currentDoc);
    }
  }, [breadcrumbs]);

  return (
    <div className="documentation-panel">
      <SchemaContext.Provider
        value={{
          schema: schema,
          schemaTypes: schema.__schema.types,
          breadcrumbSetter: setAddedBreadcrumb,
        }}
      >
        <DocBreadcrumbs breadcrumbs={breadcrumbs} clickHandler={cutBreadcrumbsByLength} />
        <div className="documentation-panel__content">{currentDocumentation}</div>
      </SchemaContext.Provider>
    </div>
  );
};

export { SchemaContext };

export default SchemaList;
