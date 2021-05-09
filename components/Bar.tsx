import {
  useEffect,
  useState,
  FC,
  useRef,
  forwardRef,
  RefObject,
  useContext,
} from 'react';
import { ThemeContext } from '../context/theme';
import { Input } from '../interface/Input';

import DuckDuckGoImage from './icons/DuckDuckGo';
import GoogleImage from './icons/Google';
import MsBingImage from './icons/MsBing';

export interface BarProps {
  Engine: string;
}

export const getEngine = (engine: string) => {
  switch (engine) {
    case 'DuckDuckGo':
      return DuckDuckGo;
    case 'Google':
      return Google;
    case 'Bing':
      return Bing;

    default:
      return DuckDuckGo;
  }
};

export const BarConfig = ['DuckDuckGo', 'Google', 'Bing'];

export const Bar = ({ Engine }: BarProps) => {
  const [engine, setEngine] = useState(getEngine(Engine) as any);
  const ref = useRef();
  const { state } = useContext(ThemeContext);

  const handleClick = () => {
    const newEngine =
      BarConfig.indexOf(engine.name) !== -1
        ? BarConfig.indexOf(engine.name) + 1
        : 0;

    setEngine(getEngine(BarConfig[newEngine]));
  };

  const doFocus = (ref: RefObject<HTMLInputElement>) => {
    if (ref === null) return;
    ref.current.focus();
  };

  useEffect(() => {
    doFocus(ref);
  }, []);

  return (
    <div className='w-full h-auto pb-6 pt-9 flex justify-center items-center flex-col '>
      <engine.img
        onClick={handleClick}
        type={state.darkMode ? 'dark' : 'light'}
        className='activeUp cursor-pointer select-none mb-7 mt-9'
      />
      <engine.form
        ref={ref}
        type='text'
        autoCapitalize='off'
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        autoFocus
        className='max-w-2xl mx-3 '
      />
    </div>
  );
};

export const DuckDuckGo = {
  name: 'DuckDuckGo',
  form: forwardRef(({ className, ...props }: any, ref) => {
    return (
      <form
        method='get'
        action='https://duckduckgo.com/'
        className='flex justify-center items-center w-full'
      >
        <input type='hidden' name='kp' value='1' />
        <input type='hidden' name='kaf' value='1' />
        <input type='hidden' name='kg' value='g' />
        <input type='hidden' name='k5' value='1' />
        <Input
          name='q'
          placeholder='Explore the web anonymously'
          className={`${className}`}
          ref={ref}
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return <DuckDuckGoImage className={`${className}`} {...props} />;
  },
};

export const Google = {
  name: 'Google',
  form: forwardRef(({ className, ...props }: any, ref) => {
    return (
      <form
        action='https://www.google.com/search'
        method='GET'
        className='flex justify-center items-center w-full'
      >
        <input name='source' type='hidden' value='hp' />
        <Input
          name='q'
          placeholder='Explore the web with the best experience'
          className={`${className}`}
          role='combobox'
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return <GoogleImage className={`${className}`} {...props} />;
  },
};

export const Bing = {
  name: 'Bing',
  form: forwardRef(({ className, ...props }: any, ref) => {
    return (
      <form
        method='get'
        action='https://www.bing.com//search'
        className='flex justify-center items-center w-full'
      >
        <Input
          name='q'
          placeholder='Explore the web with many disadvantages'
          className={`${className}`}
          ref={ref}
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return <MsBingImage className={` ${className}`} {...props} />;
  },
};

export interface engineProps {
  form: FC;
  img: FC;
}
