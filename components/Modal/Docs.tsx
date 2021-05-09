import { IoInformationCircleOutline } from 'react-icons/io5';
import { ModalLayout } from './Layout';

const Docs = () => {
  return (
    <ModalLayout
      triggerChildren={<Button tooltip='Explore The Docs' flow='left' />}
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
      className='flex justify-center items-center text-white hover:text-normal'
      {...props}
    >
      <IoInformationCircleOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Docs;
