import Preferences from './Modal/Preferences';
import Bookmarks from './Modal/Bookmarks';
import Settings from './Modal/Settings';

const Nav = ({ className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <div className='w-full h-full flex p-2'>
        <Preferences />
        <Settings />
        <Bookmarks />
      </div>
    </div>
  );
};

export default Nav;
