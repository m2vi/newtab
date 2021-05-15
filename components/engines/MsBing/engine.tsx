import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const MsBingIcon = Icon;

export const MsBing: engineProps = {
  name: 'Microsoft Bing',
  key: ':b',
  method: 'GET',
  action: 'https://www.bing.com/search',

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
