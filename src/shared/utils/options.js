import get from 'lodash/get';

import isEmpty from 'lodash/isEmpty';

const getOptions = async ({ method, payload, params, label, value }) => {
  const res = await method({
    ...payload,
    ...params,
  });

  if (res && res.data) {
    let dataFormat;

    if (dataFormat && isEmpty(dataFormat)) {
      dataFormat = res.data;
    } else if (dataFormat) {
      dataFormat = get(res.data, dataFormat);
    } else {
      dataFormat = res.data.data;
    }

    const optionsData = dataFormat.map(item => ({
      label: get(item, label),
      value: item[value],
    }));

    return optionsData;
  }

  return [];
};

export default getOptions;
