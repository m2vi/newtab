import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Spinner } from '../../components/Spinner';

export const initialOptions: TransitionOptions = {
  shallow: true,
};

export interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export interface redirectProps {
  url: string;
  type: 'push' | 'replace';
  options?: TransitionOptions;
}

export const Redirect = ({ url, type, options, ...props }: any) => {
  const { push, replace } = useRouter();

  options = options || initialOptions;

  useEffect(() => {
    switch (type) {
      case 'push':
        push(url, null, options);
        break;

      case 'replace':
        replace(url, null, options);
        break;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
      <div className='h-full min-h-screen w-full flex justify-center items-center overflow-hidden'>
        <div className='flex flex-col text-center'>
          <a className='text-accent text-base p-2' href={url} {...props}>
            <Spinner className='text-accent' />
          </a>
        </div>
      </div>
    </>
  );
};
