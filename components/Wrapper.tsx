import { useContext, useEffect } from 'react';
import { ThemeContext, init__theme } from '../context/theme';

const Wrapper = ({ children }) => {
  const theme = useContext(ThemeContext);

  useEffect(() => {
    init__theme(theme);
  }, []);

  return children;
};

export default Wrapper;
