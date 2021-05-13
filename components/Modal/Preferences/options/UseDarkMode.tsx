import { ChangeEvent, useContext } from 'react';
import { applyTheme, ThemeContext } from '../../../../context/theme';
import notification from '../../../../utils/notification';
import { optionProps } from './optionProps';

const useDarkMode = ({ className, ...props }: optionProps) => {
  const { state } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    applyTheme({
      darkMode: e.target.checked,
      options: {
        silent: false,
      },
    });
  };

  return (
    <div
      className={`flex justify-between items-center select-none ${className}`}
      {...props}
    >
      <span>Use dark mode</span>
      <div className='flex items-center justify-center'>
        <input type='checkbox' id='darkModeSwitch' onChange={handleChange} />
        <label htmlFor='darkModeSwitch' />
      </div>
    </div>
  );
};

export default useDarkMode;
