import { useRouter } from 'next/router';
import { IoBookOutline } from 'react-icons/io5';
import { ModalLayout } from './Layout';

const Bookmarks = () => {
  return <Button tooltip='Manage Bookmarks' flow='left' />;
};

export const Button = ({ ...props }) => {
  const { push } = useRouter();
  return (
    <button
      name='Bookmarks'
      className='flex justify-center items-center text-white hover:text-normal'
      {...props}
    >
      <IoBookOutline className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

export default Bookmarks;
