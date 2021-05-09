import { IoBookOutline } from 'react-icons/io5';

const Bookmarks = () => {
  return <Button tooltip='Manage Bookmarks' flow='right' />;
};

export const Button = ({ ...props }) => {
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
