import { createContext, useReducer } from 'react';
import log from '../utils/log';
import notify from '../utils/notification';
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

const themeReducer = (state, { type, silent }) => {
  switch (type) {
    case 'light':
      applyTheme({ darkMode: false, options: { silent } });
      return { darkMode: false };
    case 'dark':
      applyTheme({ darkMode: true, options: { silent } });
      return { darkMode: true };
    default:
      applyTheme({ darkMode: true, options: { silent } });
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

export const applyTheme = ({ darkMode, options }) => {
  const { silent } = options;

  const themeName = darkMode ? 'dark' : 'light';

  const body = document.querySelector('body').classList;

  body.remove('theme-dark');
  body.remove('theme-light');

  body.add(`theme-${darkMode ? 'dark' : 'light'}`);

  localStorage.setItem('theme', themeName);

  if (!silent) {
    notify('info', `Applied ${themeName} theme`, !silent);
  }
};

export interface applyOptions {
  silent?: boolean;
  callback?: Function;
}

export interface appyThemeProps {
  darkMode: boolean;
}
