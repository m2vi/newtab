import { useRouter } from 'next/router';
import Homepage from '../pages/index';

export interface HomePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const HomePreview = ({ className, ...props }: HomePreviewProps) => {
  const { push } = useRouter();

  const handleClick = () => {
    push('/', null, { shallow: true });
  };

  return (
    <div
      className={`shadow-1 rounded-5 cursor-pointer relative ${className}`}
      onClick={handleClick}
      {...props}
    >
      <div style={{ aspectRatio: '16 / 9' }} className='h-full'>
        <Homepage />
      </div>
    </div>
  );
};

export default HomePreview;
