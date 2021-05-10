import { ChangeEvent, useContext, useEffect } from 'react';
import { IoOptionsOutline } from 'react-icons/io5';
import { applyTheme, ThemeContext } from '../../../context/theme';
import { ModalLayout } from '../Layout';
import UseDarkMode from './options/UseDarkMode';

const Preferences = () => {
  const { state } = useContext(ThemeContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    applyTheme({ darkMode: e.target.checked });
  };

  return (
    <ModalLayout
      triggerChildren={<Button tooltip='Customize New Tab' />}
      contentLabel='Preferences'
      title='Preferences'
    >
      <UseDarkMode />
    </ModalLayout>
  );
};

export const Button = ({ ...props }) => {
  return (
    <button
      name='Preferences'
      className='flex justify-center items-center text-primary-900 hover:text-primary-800'
      {...props}
    >
      <IoOptionsOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Preferences;
