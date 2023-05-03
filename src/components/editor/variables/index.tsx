import React, { FC, useState } from 'react';

const Variables: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(event.target.value);
  };

  return <textarea onChange={handleChange} value={value} className="variables" />;
};

export default Variables;
