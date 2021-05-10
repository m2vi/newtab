import log from '../log';

const capitalize = (str: any) => {
  if (typeof str !== 'string') {
    log.error('Param must be a string!');
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default capitalize;
