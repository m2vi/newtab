import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const GoogleScholarIcon = Icon;

export const GoogleScholar: engineProps = {
  name: 'Google',
  key: ':gs',
  method: 'GET',
  action: 'https://scholar.google.at/scholar',

  icon: ({ ...props }) => {
    return <Icon {...props} />;
  },

  input: {
    primary: {
      name: 'q',
      placeholder: 'Explore scientific literature part in the web',
    },
  },
};
