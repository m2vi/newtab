import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const GoogleIcon = Icon;

export const Google: engineProps = {
  name: 'Google',
  key: ':g',
  method: 'GET',
  action: 'https://www.google.com/search',

  icon: ({ ...props }) => {
    return <Icon {...props} />;
  },

  input: {
    primary: {
      name: 'q',
      placeholder: 'Explore the web with the best experience',
    },
  },
};
