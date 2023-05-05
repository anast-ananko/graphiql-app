import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { updateVariablesString } from '../../../store/features/editorSlice';

const Variables: FC = () => {
  const { variablesString } = useAppSelector((state) => state.editorReducer);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(updateVariablesString(event.target.value));
  };
  return <textarea onChange={handleChange} value={variablesString} className="variables" />;
};

export default Variables;
