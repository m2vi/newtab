import { engineProps } from '../shared/engineProps';
import Icon from './icon';

export const DuckDuckGoIcon = Icon;

export const DuckDuckGo: engineProps = {
  name: 'DuckDuckGo',
  key: ':d',
  method: 'GET',
  action: 'https://duckduckgo.com/',

  icon: ({ ...props }) => {
    return <Icon {...props} />;
  },

  input: {
    primary: {
      name: 'q',
      placeholder: 'Explore the web with privacy protection',
    },
    other: () => {
      return (
        <>
          <input type='hidden' name='kp' value='1' />
          <input type='hidden' name='kaf' value='1' />
          <input type='hidden' name='kg' value='g' />
          <input type='hidden' name='k5' value='1' />
        </>
      );
    },
  },
};
