import { reduce } from 'lodash-es';
import pascalCase from '@utils/pascal-case';

function transformBy(items, type, keyBy = 'id', filter) {
  const key = pascalCase(keyBy);
  const typesByKey = `${type}sBy${key}`;
  const typeKeys = `${type}${key}s`;
  return reduce(
    items,
    (transformed, item) => ({
      [typesByKey]: { ...transformed[typesByKey], [item[keyBy]]: item },
      [typeKeys]: [...transformed[typeKeys], item[keyBy]],
      ...(filter && { [filter]: [...transformed[typeKeys], item[keyBy]] }),
    }),
    {
      [typesByKey]: {},
      [typeKeys]: [],
    },
  );
}

export default transformBy;
