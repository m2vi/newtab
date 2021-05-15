import { iconProps } from '../shared/iconProps';

const MsBing = ({ bgColor, ...props }: iconProps) => {
  return (
    <svg
      width={173}
      height={202}
      viewBox='0 0 173 202'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M78.8 4.21L8.354 42.714A16.056 16.056 0 000 56.804v88.392a16.056 16.056 0 008.355 14.089l70.444 38.506a16.056 16.056 0 0015.402 0l70.444-38.506A16.057 16.057 0 00173 145.196V56.804c0-5.87-3.204-11.273-8.355-14.089L94.201 4.21a16.056 16.056 0 00-15.402 0z'
        fill={bgColor}
      />
      <g filter='url(#prefix__filter0_d)'>
        <path d='M83.776 56H41v42.776h42.776V56z' fill='#F26522' />
      </g>
      <g filter='url(#prefix__filter1_d)'>
        <path d='M131 56H88.224v42.776H131V56z' fill='#8DC63F' />
      </g>
      <g filter='url(#prefix__filter2_d)'>
        <path d='M83.776 103.224H41V146h42.776v-42.776z' fill='#00AEEF' />
      </g>
      <g filter='url(#prefix__filter3_d)'>
        <path d='M131 103.224H88.224V146H131v-42.776z' fill='#FFC20E' />
      </g>
      <defs>
        <filter
          id='prefix__filter0_d'
          x={5}
          y={20}
          width={114.776}
          height={114.776}
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
          <feColorMatrix values='0 0 0 0 0.992157 0 0 0 0 0.305882 0 0 0 0 0.305882 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter1_d'
          x={52.224}
          y={20}
          width={114.776}
          height={114.776}
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
          <feColorMatrix values='0 0 0 0 0.258824 0 0 0 0 0.956863 0 0 0 0 0.454275 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter2_d'
          x={5}
          y={67.224}
          width={114.776}
          height={114.776}
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
          <feColorMatrix values='0 0 0 0 0.670588 0 0 0 0 0.803922 0 0 0 0 1 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
        <filter
          id='prefix__filter3_d'
          x={52.224}
          y={67.224}
          width={114.776}
          height={114.776}
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
          <feColorMatrix values='0 0 0 0 0.937255 0 0 0 0 0.992157 0 0 0 0 0.305882 0 0 0 0.4 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  );
};

export default MsBing;
