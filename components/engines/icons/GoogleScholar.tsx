import { iconProps } from './iconProps';

const GoogleScholar = ({ bgColor, ...props }: iconProps) => {
  return (
    <svg
      width={173}
      height={202}
      viewBox='0 0 173 202'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#prefix__clip0)'>
        <path
          d='M78.8 4.21L8.354 42.714A16.056 16.056 0 000 56.804v88.392a16.056 16.056 0 008.355 14.089l70.444 38.506a16.056 16.056 0 0015.402 0l70.444-38.506A16.057 16.057 0 00173 145.196V56.804c0-5.87-3.204-11.273-8.355-14.089L94.201 4.21a16.056 16.056 0 00-15.402 0z'
          fill={bgColor}
        />
        <g filter='url(#prefix__filter0_d)'>
          <path d='M86.5 133.524L32 89.146 86.5 46v87.524z' fill='#4285F4' />
        </g>
        <g filter='url(#prefix__filter1_d)'>
          <path d='M86.5 133.524L141 89.146 86.5 46v87.524z' fill='#356AC3' />
        </g>
        <g filter='url(#prefix__filter2_d)'>
          <path
            d='M86.5 155c17.558 0 31.792-14.234 31.792-31.792S104.058 91.417 86.5 91.417s-31.792 14.233-31.792 31.791S68.942 155 86.5 155z'
            fill='#A0C3FF'
          />
        </g>
        <g filter='url(#prefix__filter3_d)'>
          <path
            d='M57.768 109.583c5.102-10.74 16.05-18.166 28.732-18.166 12.682 0 23.63 7.425 28.732 18.166H57.768z'
            fill='#76A7FA'
          />
        </g>
      </g>
      <defs>
        <filter
          id='prefix__filter0_d'
          x={-4}
          y={10}
          width={126.5}
          height={159.524}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={18} />
          <feColorMatrix values='0 0 0 0 0.258824 0 0 0 0 0.521569 0 0 0 0 0.956863 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter1_d'
          x={50.5}
          y={10}
          width={126.5}
          height={159.524}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={18} />
          <feColorMatrix values='0 0 0 0 0.207843 0 0 0 0 0.415686 0 0 0 0 0.764706 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter2_d'
          x={18.708}
          y={55.417}
          width={135.583}
          height={135.583}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset />
          <feGaussianBlur stdDeviation={18} />
          <feColorMatrix values='0 0 0 0 0.627451 0 0 0 0 0.764706 0 0 0 0 1 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter3_d'
          x={21.768}
          y={59.417}
          width={129.465}
          height={90.167}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={18} />
          <feColorMatrix values='0 0 0 0 0.462745 0 0 0 0 0.654902 0 0 0 0 0.980392 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <clipPath id='prefix__clip0'>
          <path fill='#fff' d='M0 0h173v202H0z' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GoogleScholar;
