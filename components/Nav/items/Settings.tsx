import { useRouter } from 'next/router';
import { IoSettingsOutline } from 'react-icons/io5';
import Button from './Button';

const Settings = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/settings/settings');
  };

  return (
    <Button
      Icon={IoSettingsOutline}
      name='Settings'
      tooltip='View And Edit Settings'
      onClick={handleClick}
    />
  );
};

export default Settings;
