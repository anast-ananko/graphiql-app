import React, { FC, useState } from 'react';

const Variables: FC = () => {
  const [value, setValue] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  return <textarea onChange={handleChange} value={value} className="variables" />;
};

export default Variables;
