import { get } from 'lodash';

export const interpolateString = (str, obj) => {
  return str.replace(/\[(.+?)\]/g, (match, p1) => {
    return get(obj, p1);
  });
};
