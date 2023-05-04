import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { updateVariables } from '../../../store/features/editorSlice';

const Variables: FC = () => {
  const { variables } = useAppSelector((state) => state.editorReducer);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (event.target.value) {
      dispatch(updateVariables(JSON.parse(event.target.value)));
    } else {
      dispatch(updateVariables({}));
    }
  };

  return (
    <textarea onChange={handleChange} value={JSON.stringify(variables)} className="variables" />
  );
};

export default Variables;
