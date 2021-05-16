import { ChangeEvent, useContext } from 'react';
import { Toggle } from '../components/Toggle';
import { applyTheme, ThemeContext } from '../context/theme';

export interface optionProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
}

export const DarkMode = ({ className, ...props }: optionProps) => {
  const { state } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);
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
      <Toggle defaultChecked={state.darkMode} onChange={handleChange} />
    </div>
  );
};
