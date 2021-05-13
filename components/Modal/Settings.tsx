import { IoSettingsOutline } from 'react-icons/io5';
import { ModalLayout } from './Layout';

const Settings = () => {
  return (
    <ModalLayout
      triggerChildren={<Button tooltip='View And Edit Settings' />}
      contentLabel='Settings'
      title='Settings'
    >
      Hello World
    </ModalLayout>
  );
};

export const Button = ({ ...props }) => {
  return (
    <button
      name='Settings'
      className='flex justify-center items-center text-primary-100 hover:text-primary-200'
      {...props}
    >
      <IoSettingsOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Settings;
