import Preferences from './items/Preferences';
import Bookmarks from './items/Bookmarks';
import Settings from './items/Settings';
import Docs from './items/Docs';

const Nav = ({ ...props }) => {
  return (
    <div className={`w-full absolute bottom-0 right-0`} {...props}>
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
