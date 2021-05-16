import { useEffect, useState, useRef, RefObject } from 'react';
import { Input } from '../components/Input';
import log from '../utils/log';

import { allEngines, getEngineFromKey, keys } from './engine';

export const Bar = () => {
  const [currentEngine, setEngine] = useState(getEngineFromKey(null));
  const ref = useRef();

  const handleClick = () => {
    const k = keys(allEngines);
    const { key } = currentEngine;

    const nextEngineIndex = k.indexOf(key) + 1;
    const defaultEngineIndex = 0;

    let newEngineIndex = defaultEngineIndex;

    if (k.indexOf(key) !== -1 && !allEngines[nextEngineIndex].deactivated)
      newEngineIndex = nextEngineIndex;

    const newEngine = allEngines[newEngineIndex];

    log.do(`Current Engine: ${newEngine.name}`);

    setEngine(newEngine);
  };

  const doFocus = (ref: RefObject<HTMLInputElement>) => {
    if (ref === null || !ref.current) return;
    ref.current.focus();
  };

  useEffect(() => {
    doFocus(ref);
  }, []);

  return (
    <div className='w-full h-auto pb-6 pt-9 flex justify-center items-center flex-col '>
      <EngineIcon engine={currentEngine} onClick={handleClick} />
      <form
        action={currentEngine.action}
        method={currentEngine.method}
        className='flex justify-center items-center w-full'
      >
        {currentEngine.input.other && <currentEngine.input.other />}
        <Input
          name={currentEngine.input.primary.name}
          placeholder={currentEngine.input.primary.placeholder}
          ref={ref}
          type='text'
          autoCapitalize='off'
          autoComplete='off'
          autoCorrect='off'
          spellCheck='false'
          autoFocus
          className='mx-3 max-w-2xl'
        />
      </form>
    </div>
  );
};

export const EngineIcon = ({ engine, ...props }) => {
  return (
    <engine.icon
      className='activeUp cursor-pointer select-none mb-7 mt-7'
      bgColor='var(--color-primary-700)'
      {...props}
    />
  );
};
