import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const AskIcon = Icon;

export const Ask: engineProps = {
  deactivated: true,
  name: 'Ask',
  key: ':a',
  method: 'GET',
  action: 'https://www.ask.com/web',

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
