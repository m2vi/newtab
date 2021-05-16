import { Line } from 'rc-progress';
import { useEffect, useState } from 'react';
import { CloseBtn } from './CloseButton';
import { Spinner } from './Spinner';

const Progress = (props) => {
  const [active, setActive] = useState(false);
  const [percent, setPercent] = useState(100);
  const [loading, setLoading] = useState(false);

  const waitForBookmarks = (callback: Function, iteration?: number) => {
    const win = window as any;
    const waitingTime = iteration ? Math.floor(iteration * 250 * 1.1) : 250;

    if (!active) {
      setLoading(false);
      setPercent(0);
    }

    if (win.bookmarks) {
      return callback(win.bookmarks);
    }

    console.log({
      text: 'Trying to receive the bookmarks',
      iteration,
      waitingTime,
    });

    setTimeout(() => {
      waitForBookmarks(callback, iteration ? iteration + 1 : 1);
    }, waitingTime);
  };

  useEffect(() => {
    // waitForBookmarks((bookmarks) => console.log(bookmarks));
  }, []);

  return (
    <>
      {percent === 100 || !active ? (
        <props.after />
      ) : (
        <div className='overflow-hidden absolute top-0 left-0 bottom-0 right-0 h-screen w-full bg-primary-900 flex justify-center items-center'>
          <CloseBtn
            className='absolute top-0 right-0 m-4'
            transparent
            onClick={() => {
              setActive(false);
              console.log('h?');
            }}
          />
          <div className='flex flex-col items-center'>
            <div className='flex justify-between max-w-xs items-center'>
              <Line
                percent={percent}
                strokeColor='var(--color-accent)'
                trailColor='var(--color-primary-700)'
                className='h-1'
              />
              <Percentage loading={loading} percent={percent} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Progress;

export const Percentage = ({ percent, loading }) => {
  const style = {
    fontSize: '0.8rem',
    lineHeight: '1.5',
    width: '19px',
    height: '19px',
  };

  return (
    <>
      {loading ? (
        <div
          className='ml-2 flex items-center justify-center'
          style={{ height: '19px', width: '19px' }}
        >
          <Spinner tooltip='If you wait very long, try to reload' />
        </div>
      ) : (
        <p className='text-right ml-2 text-primary-300' style={style}>
          {percent}%
        </p>
      )}
    </>
  );
};
