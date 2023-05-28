const deepCompare = (obj1: { [key: string]: string }, obj2: { [key: string]: string }): boolean => {
  const keys1 = Object.keys(obj1);

  for (const key of keys1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }

  return true;
};

export { deepCompare };
