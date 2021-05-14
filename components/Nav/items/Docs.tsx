import { IoInformationCircleOutline } from 'react-icons/io5';
import Button from './Button';

const Docs = () => {
  const handleClick = () => {
    window.location.href = 'https://github.com/m2vi/newtab/blob/main/README.md';
  };

  return (
    <Button
      tooltip='Explore The Docs'
      flow='left'
      name='Preferences'
      onClick={handleClick}
      Icon={IoInformationCircleOutline}
    />
  );
};

export default Docs;
