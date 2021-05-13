import { IoInformationCircleOutline } from 'react-icons/io5';
import { ModalLayout } from './Layout';

const Docs = () => {
  return <Button tooltip='Explore The Docs' flow='left' />;
};

export const Button = ({ ...props }) => {
  const handleClick = () => {
    window.location.href = 'https://github.com/m2vi/newtab/blob/main/README.md';
  };

  return (
    <button
      name='Preferences'
      className='flex justify-center items-center text-primary-100 hover:text-primary-200'
      onClick={handleClick}
      {...props}
    >
      <IoInformationCircleOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Docs;
