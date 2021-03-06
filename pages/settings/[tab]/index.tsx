import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Divider from '../../../components/Divider';
import { DarkMode } from '../../../settings/preferences';
import capitalize from '../../../utils/text/capitalize';

const index = () => {
  const { query } = useRouter();
  const [title, setTitle] = useState(null);

  useEffect(() => {
    console.log(query);
    if (!query) return;

    setTitle(capitalize(query.tab));
  }, [query]);

  return (
    <div className='min-h-screen w-full h-full flex flex-row font-discord'>
      <Head>
        <title>{title}</title>
      </Head>
      <aside
        className='h-full min-h-screen w-full flex justify-end bg-primary-800 select-none'
        style={{
          flex: '1 0 218px',
        }}
      >
        <nav className='h-full w-300 pt-7 pr-0 pb-9 pl-7'>
          <div className='pr-2'>
            <p className='text-primary-300 mb-2 ml-2 uppercase text-xs'>
              Preferences
            </p>
            <ul className='flex flex-col w-full h-full'>
              <li className='rounded-5 bg-primary-700 hover:bg-primary-700 hover:opacity-95 px-2 py-1 cursor-pointer mb-1 text-base text-primary-200 flex items-center justify-start'>
                Theme
              </li>
              <li className='rounded-5 hover:bg-primary-700 hover:opacity-95 px-2 py-1 cursor-pointer mb-1 text-base text-primary-200 flex items-center justify-start'>
                Theme
              </li>
            </ul>
            <Divider />
          </div>
        </nav>
      </aside>
      <aside
        className='w-full py-7 px-6'
        style={{
          flex: '1 0 800px',
        }}
      >
        <nav className='h-full w-800'>
          <div className='w-full h-14 bg-primary-800 rounded-8 mb-4' />

          <DarkMode />
        </nav>
      </aside>
    </div>
  );
};

export default index;
