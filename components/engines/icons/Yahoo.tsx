import { iconProps } from './iconProps';

const DuckDuckGo = ({ bgColor, ...props }: iconProps) => {
  return (
    <svg
      width='173'
      height='202'
      viewBox='0 0 173 202'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clip-path='url(#clip0)'>
        <path
          d='M78.7991 4.20941L8.35473 42.7154C3.20375 45.531 2.39395e-05 50.9334 2.25854e-05 56.8037L2.19626e-06 145.196C0 151.067 3.20374 156.469 8.35472 159.285L78.7991 197.791C83.598 200.414 89.402 200.414 94.2008 197.791L164.645 159.285C169.796 156.469 173 151.067 173 145.196L173 56.8037C173 50.9334 169.796 45.5311 164.645 42.7154L94.2008 4.2094C89.402 1.58628 83.598 1.58629 78.7991 4.20941Z'
          fill={bgColor}
        />
        <g filter='url(#filter0_d)'>
          <path
            d='M36 78.9283H54.443L65.1821 106.403L76.0606 78.9283H94.0178L66.9782 143.97H48.9071L56.3088 126.735L36 78.9283Z'
            fill='#5F01D1'
          />
        </g>
        <g filter='url(#filter1_d)'>
          <path
            d='M105.381 127.331C111.551 127.331 116.553 122.329 116.553 116.159C116.553 109.989 111.551 104.987 105.381 104.987C99.2107 104.987 94.2087 109.989 94.2087 116.159C94.2087 122.329 99.2107 127.331 105.381 127.331Z'
            fill='#5F01D1'
          />
        </g>
        <g filter='url(#filter2_d)'>
          <path
            d='M120.224 100.883H100.111L117.962 57.9999H138L120.224 100.883Z'
            fill='#5F01D1'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='0.349514'
          y='43.2779'
          width='129.319'
          height='136.343'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='17.8252' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.372549 0 0 0 0 0.00392157 0 0 0 0 0.819608 0 0 0 0.4 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d'
          x='58.5583'
          y='69.3362'
          width='93.6455'
          height='93.6455'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='17.8252' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.372549 0 0 0 0 0.00392157 0 0 0 0 0.819608 0 0 0 0.4 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <filter
          id='filter2_d'
          x='64.4609'
          y='22.3495'
          width='109.19'
          height='114.184'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='17.8252' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.372549 0 0 0 0 0.00392157 0 0 0 0 0.819608 0 0 0 0.4 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <clipPath id='clip0'>
          <rect width='173' height='202' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DuckDuckGo;
