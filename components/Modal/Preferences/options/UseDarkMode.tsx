import { ChangeEvent, useContext } from 'react';
import { applyTheme, ThemeContext } from '../../../../context/theme';
import { optionProps } from './optionProps';

const useDarkMode = ({ className, ...props }: optionProps) => {
  const { state } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    applyTheme({ darkMode: e.target.checked });
  };

  return (
    <div
      className={`flex justify-between items-center select-none ${className}`}
      {...props}
    >
      <span>Use dark mode</span>
      <input type='checkbox' id='darkModeSwitch' onChange={handleChange} />
      <label htmlFor='darkModeSwitch' />
    </div>
  );
};

export default useDarkMode;
