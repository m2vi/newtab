import { IoOptionsOutline } from 'react-icons/io5';
import { ModalLayout } from '../Layout';
import UseDarkMode from './options/UseDarkMode';

const Preferences = () => {
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
      className='flex justify-center items-center text-primary-100 hover:text-primary-200'
      {...props}
    >
      <IoOptionsOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Preferences;
