import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const YahooIcon = Icon;

export const Yahoo: engineProps = {
  deactivated: true,
  name: 'Yahoo!',
  key: ':y',
  method: 'GET',
  action: 'https://search.yahoo.com/search',

  icon: ({ ...props }) => {
    return <Icon {...props} />;
  },

  input: {
    primary: {
      name: 'q',
      placeholder: 'Do not explore the web with this',
    },
  },
};
