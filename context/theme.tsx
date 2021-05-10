import { createContext, useReducer } from 'react';
import log from '../utils/log';
import capitalize from '../utils/text/capitalize';

export const ThemeContext = createContext(null);

export const detectTheme = () => {
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';

    log.do(`${capitalize(theme)} theme was loaded from localStorage`);
    return theme;
  } else {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    log.do(`${capitalize(theme)} theme was loaded from localStorage`);
    return theme;
  }
};

export const initialState = {
  darkMode: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'light':
      applyTheme({ darkMode: false });
      return { darkMode: false };
    case 'dark':
      applyTheme({ darkMode: true });
      return { darkMode: true };
    default:
      applyTheme({ darkMode: true });
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const applyTheme = (state) => {
  const body = document.querySelector('body').classList;

  body.remove('theme-dark');
  body.remove('theme-light');

  body.add(`theme-${state.darkMode ? 'dark' : 'light'}`);

  localStorage.setItem('theme', state.darkMode ? 'dark' : 'light');
};
