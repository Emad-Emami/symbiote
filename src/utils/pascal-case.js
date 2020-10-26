import { camelCase, startCase } from 'lodash-es';

function pascalCase(str) {
  return startCase(camelCase(str)).replace(/ /g, '');
}

export default pascalCase;
