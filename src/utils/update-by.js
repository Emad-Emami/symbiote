import { union } from 'lodash-es';
import pascalCase from '@utils/pascal-case';

function updateBy(type, keyBy = 'id', filter) {
  const key = pascalCase(keyBy);
  const typesByKey = `${type}sBy${key}`;
  const typeKeys = `${type}${key}s`;
  return {
    [typesByKey]: (oldValue, newValue) => newValue,
    [typeKeys]: (oldValue, newValue) => union(oldValue, newValue),
    ...(filter && { [filter]: (oldValue, newValue) => newValue }),
  };
}

export default updateBy;
