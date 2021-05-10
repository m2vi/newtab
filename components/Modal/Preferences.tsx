import { IoOptionsOutline } from 'react-icons/io5';
import { ModalLayout } from './Layout';

const Preferences = () => {
  return (
    <ModalLayout
      triggerChildren={<Button tooltip='Customize New Tab' />}
      contentLabel='Preferences'
      title='Preferences'
    >
      Hello World
    </ModalLayout>
  );
};

export const Button = ({ ...props }) => {
  return (
    <button
      name='Preferences'
      className='flex justify-center items-center text-white hover:text-focus'
      {...props}
    >
      <IoOptionsOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Preferences;
