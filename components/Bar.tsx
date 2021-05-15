import { useEffect, useState, FC, useRef, forwardRef, RefObject } from 'react';
import { Input } from './Input';

import DuckDuckGoImage from './engines/DuckDuckGo/icon';
import GoogleImage from './engines/Google/icon';
import GoogleScholarImage from './engines/GoogleScholar/icon';
import MsBingImage from './engines/MsBing/icon';

export interface BarProps {
  Engine: string;
}

export const getEngine = (engine: string) => {
  switch (engine) {
    case 'DuckDuckGo':
      return DuckDuckGo;
    case 'Google':
      return Google;
    case 'Google Scholar':
      return GoogleScholar;
    case 'Bing':
      return Bing;

    default:
      return DuckDuckGo;
  }
};

export const BarConfig = ['DuckDuckGo', 'Google', 'Google Scholar', 'Bing'];

export const Bar = ({ Engine }: BarProps) => {
  const [engine, setEngine] = useState(getEngine(Engine) as any);
  const ref = useRef();

  const handleClick = () => {
    console.log(BarConfig.indexOf(engine.name) !== -1);
    const newEngine =
      BarConfig.indexOf(engine.name) !== -1
        ? BarConfig.indexOf(engine.name) + 1
        : 0;

    console.log(getEngine(BarConfig[newEngine]));
    setEngine(getEngine(BarConfig[newEngine]));
  };

  const doFocus = (ref: RefObject<HTMLInputElement>) => {
    if (ref === null) return;
    if (!ref.current) return;
    ref.current.focus();
  };

  useEffect(() => {
    doFocus(ref);
  }, []);

  return (
    <div className='w-full h-auto pb-6 pt-9 flex justify-center items-center flex-col '>
      <engine.img
        onClick={handleClick}
        className='activeUp cursor-pointer select-none mb-7 mt-7'
        bgColor='var(--color-primary-700)'
      />
      <engine.form
        ref={ref}
        type='text'
        autoCapitalize='off'
        autoComplete='off'
        autoCorrect='off'
        spellCheck='false'
        autoFocus
        className='max-w-2xl mx-3'
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
          placeholder='Explore the web with privacy protection'
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
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return <GoogleImage className={`${className}`} {...props} />;
  },
};

export const GoogleScholar = {
  name: 'Google Scholar',
  form: forwardRef(({ className, ...props }: any, ref) => {
    return (
      <form
        action='https://scholar.google.at/scholar'
        method='GET'
        className='flex justify-center items-center w-full'
      >
        <input name='source' type='hidden' value='hp' />
        <Input
          name='q'
          placeholder='Explore scientific literature'
          className={`${className}`}
          role='combobox'
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return <GoogleScholarImage className={`${className}`} {...props} />;
  },
};

export const Bing = {
  name: 'Bing',
  form: forwardRef(({ className, ...props }: any, ref) => {
    return (
      <form
        method='get'
        action='https://www.bing.com/search'
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
