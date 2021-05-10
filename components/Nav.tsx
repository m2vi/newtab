import Preferences from './Modal/Preferences';
import Bookmarks from './Modal/Bookmarks';
import Settings from './Modal/Settings';
import Docs from './Modal/Docs';

const Nav = ({ className, ...props }) => {
  return (
    <div className={`${className} w-full`} {...props}>
      <div className='w-full h-full flex justify-center sm:justify-end p-2'>
        <Preferences />
        <Settings />
        <Bookmarks />
        <Docs />
      </div>
    </div>
  );
};

export default Nav;
