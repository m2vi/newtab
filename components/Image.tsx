import { useEffect } from 'react';

export const Image = ({ className, ...props }: ImageProps) => {
  const getIndex = (max: number) => {
    return [Math.floor(Math.random() * max)];
  };

  return (
    <>
      {getIndex(imageConfig.length).map((index) => {
        const { src, alt, className, css, bodyCSS, hasImage } = imageConfig[
          index
        ];

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
          <img
            src={hasImage ? src : null}
            alt={alt}
            className={`${cn} ${!hasImage && 'hidden opacity-0'} ${className}`}
            style={css}
            key={alt}
            {...props}
          />
        );
      })}
    </>
  );
};

export default Image;

export const imageConfig: ImageItemProps = [
  {
    hasImage: false,
    src: '/bg/sand.png',
    alt: 'Some Sand Image',
    bodyCSS: {
      backgroundColor: '#CFC3B3',
      backgroundImage: 'url(/bg/sand.png)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    className: 'bottom-0 right-0 top-0 left-0 h-full w-full',
  },
];

export interface ImageProps {
  className?: string;
}

export interface ImageItemProps {
  [index: number]: {
    hasImage?: boolean;
    src?: string;
    alt?: string;
    className?: string;
    css?: object;
    bodyCSS?: object;
  };
  length: number;
}
