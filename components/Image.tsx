import React, { useEffect } from 'react';

export const Image = ({ ...props }: ImageProps) => {
  const getIndex = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  // const { src, alt, className, css, bodyCSS, hasImage } =
  //   imageConfig.children[getIndex(imageConfig.children.length)];

  const { src, alt, className, css, bodyCSS, hasImage } = imageConfig.default;

  const setBodyStyle = (style: object) => {
    for (let i in style) {
      document.body.style[i] = style[i];
    }
  };

  const cn = 'pointer-events-none absolute z-n1 select-none';

  useEffect(() => {
    setBodyStyle(bodyCSS);
  }, []);

  return (
    <>
      {hasImage ? (
        <img
          src={hasImage ? src : ''}
          alt={alt}
          className={`${cn} 'bottom-0 right-0 top-0 left-0 h-full w-full'`}
          style={css}
          key={alt}
          {...props}
        />
      ) : null}
    </>
  );
};

export default Image;

export const imageConfig: ImageObjProps = {
  default: {
    hasImage: false,
    bodyCSS: {
      background:
        'linear-gradient(to right bottom, rgba(113,150,255,1) 0%, var(--color-accent) 70%) center center',
    },
  },
  children: [
    {
      hasImage: false,
      bodyCSS: {
        backgroundColor: '#CFC3B3',
        backgroundImage: 'url(/bg/sand.avif)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
    {
      hasImage: false,
      bodyCSS: {
        backgroundColor: '#aab9c7',
        backgroundImage: "url('/bg/valley.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    },
  ],
};

export interface ImageProps {
  className?: string;
}

export interface ImageObjProps {
  default: ImageItemProps;
  children: Array<ImageItemProps>;
}

export interface ImageItemProps {
  theme?: 'light' | 'dark';
  hasImage?: boolean;
  src?: string;
  alt?: string;
  className?: string;
  css?: React.CSSProperties;
  bodyCSS?: React.CSSProperties;
}
