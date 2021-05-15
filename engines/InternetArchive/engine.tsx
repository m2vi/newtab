import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const InternetArchiveIcon = Icon;

export const InternetArchive: engineProps = {
  name: 'Internet Archive',
  key: ':ia',
  method: 'GET',
  action: 'https://archive.org/search.php',

  icon: ({ ...props }) => {
    return <Icon {...props} />;
  },

  input: {
    primary: {
      name: 'query',
      placeholder: 'Explore the web archive',
    },
  },
};
