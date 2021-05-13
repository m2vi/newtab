import { useContext, useEffect } from 'react';
import { detectTheme, ThemeContext } from '../context/theme';

const Wrapper = ({ children }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    theme.dispatch({
      type: detectTheme(),
      silent: true,
    });
  }, []);

  return children;
};

export default Wrapper;
