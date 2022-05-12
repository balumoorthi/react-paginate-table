const compactObject = data => {
  if (typeof data !== 'object') {
    return data;
  }

  return Object.keys(data).reduce((accumulator, key) => {
    const isObject = typeof data[key] === 'object';
    const value = isObject ? compactObject(data[key]) : data[key];
    const isEmptyObject = isObject && !Object.keys(value).length;
    if (value === undefined || value === '' || isEmptyObject) {
      return accumulator;
    }

    return Object.assign(accumulator, { [key]: value });
  }, {});
};

export default compactObject;
