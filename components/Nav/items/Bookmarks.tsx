import { useRouter } from 'next/router';
import { IoBookOutline } from 'react-icons/io5';
import Button from './Button';

const Bookmarks = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/settings/bookmarks');
  };

  return (
    <Button
      Icon={IoBookOutline}
      name='Bookmarks'
      tooltip='Manage Bookmarks'
      flow='right'
      onClick={handleClick}
    />
  );
};
export default Bookmarks;
