import { useEffect, useState, FC, useRef, forwardRef, RefObject } from 'react';
import { Input } from '../interface/Input';

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
      <engine.img onClick={handleClick} />
      <engine.form ref={ref} />
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
          type='text'
          name='q'
          placeholder='Explore the web anonymously'
          className={`max-w-2xl mx-3 ${className}`}
          autoComplete='off'
          autoCapitalize='off'
          autoCorrect='off'
          autoFocus
          ref={ref}
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, onClick, ...props }) => {
    return (
      <img
        src='/icons/DuckDuckGo.svg'
        className={`activeUp cursor-pointer select-none mb-7 mt-9 ${className}`}
        alt='DuckDuckGo'
        onClick={onClick}
        {...props}
      />
    );
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
          className={`max-w-2xl mx-3 ${className}`}
          type='text'
          name='q'
          placeholder='Explore the web with the best experience'
          autocapitalize='off'
          autocomplete='off'
          autoCorrect='off'
          autofocus
          role='combobox'
          spellcheck='false'
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return (
      <img
        src='/icons/Google.svg'
        className={`activeUp cursor-pointer select-none mb-7 mt-9 ${className}`}
        alt='Google'
        {...props}
      />
    );
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
          type='search'
          placeholder='Explore the web with many disadvantages'
          className={`max-w-2xl mx-3 ${className}`}
          autoComplete='off'
          autoCapitalize='off'
          autoCorrect='off'
          autoFocus
          ref={ref}
          {...props}
        />
      </form>
    );
  }),
  img: ({ className, ...props }) => {
    return (
      <img
        src='/icons/MsBing.svg'
        className={`activeUp cursor-pointer select-none mb-7 mt-9 ${className}`}
        alt='MsBing'
        {...props}
      />
    );
  },
};

export interface engineProps {
  form: FC;
  img: FC;
}
