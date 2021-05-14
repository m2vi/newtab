import { useRouter } from 'next/router';
import { IoOptionsOutline } from 'react-icons/io5';
import Button from './Button';

const Preferences = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/settings/preferences');
  };

  return (
    <Button
      tooltip='Customize New Tab'
      name='Preferences'
      Icon={IoOptionsOutline}
      onClick={handleClick}
    />
  );
};

export default Preferences;
