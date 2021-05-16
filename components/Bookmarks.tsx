import Image from 'next/image';
import Divider from './Divider';

export interface BookmarkWrapperProps {
  children: any;
}

export interface BookmarkProps {
  name?: string;
  url?: string;
  creationDate?: Date;
}

export interface BookmarksProps {
  name: string;
  children: Array<BookmarkProps>;
}

export const initialBookmarks: BookmarksProps = {
  name: 'Fallback Bookmarks',
  children: [
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      creationDate: new Date(),
    },
    {
      name: 'Netflix',
      url: 'http://netflix.com/',
      creationDate: new Date(),
    },
    {
      name: 'Google',
      url: 'http://google.com/',
      creationDate: new Date(),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      creationDate: new Date(),
    },
    {
      name: 'Netflix',
      url: 'http://netflix.com/',
      creationDate: new Date(),
    },
    {
      name: 'Google',
      url: 'http://google.com/',
      creationDate: new Date(),
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com',
      creationDate: new Date(),
    },
    {
      name: 'Netflix',
      url: 'https://netflix.com/',
      creationDate: new Date(),
    },
    {
      name: 'Google',
      url: 'https://google.com/',
      creationDate: new Date(),
    },
  ],
};

export const BookmarkWrapper = ({ children }: BookmarkWrapperProps) => {
  return (
    <div className='w-full flex justify-center flex-col items-center'>
      <div className='bookmarkWrapper w-full' style={{ maxWidth: '512px' }}>
        {children}
      </div>
    </div>
  );
};

export const BookmarkElement = ({ name, url, ...props }: BookmarkProps) => {
  return (
    <a
      title={name}
      href={url}
      className='cursor-pointer rounded-8 flex flex-col justify-start items-center'
      style={{
        height: '110px',
        width: '78px',
        gap: '8px',
      }}
      {...props}
    >
      <BookmarkIcon url={url} />
      <p
        className='flex-nowrap flex max-w-full text-white'
        style={{ fontSize: '11px', lineHeight: '17px', padding: '0px 2px' }}
      >
        {name}
      </p>
    </a>
  );
};

export const Bookmarks = () => {
  return (
    <BookmarkWrapper>
      {initialBookmarks.children.map(({ name, url }) => {
        return (
          <BookmarkElement
            name={name}
            url={url}
            key={name + url + new Date()}
          />
        );
      })}
    </BookmarkWrapper>
  );
};

export const BookmarkIcon = ({ url }: BookmarkProps) => {
  return (
    <img
      width='70'
      height='70'
      src={iconSrc(url)}
      draggable={false}
      className='p-3 bg-primary-700 rounded-8 shadow-2'
    />
  );
};

export const iconSrc = (url: string) => {
  const { hostname } = new URL(url);
  console.log(hostname);

  return `https://www.google.com/s2/favicons?sz=128&domain_url=${hostname}`;
};
