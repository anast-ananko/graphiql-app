import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import Breadcrumbs from '@mui/material/Breadcrumbs';

import SchemaNavButton from './schemaNavButton';

import { DocBreadcrumbsProps } from '../../interfaces/schemaList.interfaces';

const DocBreadcrumbs: FC<DocBreadcrumbsProps> = ({ breadcrumbs, clickHandler }) => {
  return (
    <Breadcrumbs className="documentation-panel__breadcrumbs" separator="›" aria-label="breadcrumb">
      {breadcrumbs?.map((breadcrumb, index, arr) => {
        return (
          <SchemaNavButton
            key={uuid()}
            name={breadcrumb.title}
            onClick={clickHandler.bind(null, index + 1)}
            disabled={index === arr.length - 1}
          />
        );
      })}
    </Breadcrumbs>
  );
};

export default DocBreadcrumbs;
