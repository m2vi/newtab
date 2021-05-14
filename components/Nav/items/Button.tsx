import { IconType } from 'react-icons/lib/cjs/iconBase';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  name: string;
  tooltip?: string;
  flow?: string;
  Icon?: IconType;
  icon?: IconType;
}

const Base = ({ Icon, name, className, ...props }: ButtonProps) => {
  return (
    <button
      name={name}
      className={`flex justify-center items-center text-primary-100 hover:text-primary-200 ${className}`}
      {...props}
    >
      <Icon className='h-5 w-5 pointer-events-none m-2' />
    </button>
  );
};

const Button = ({
  icon,
  name,
  className,
  tooltip,
  flow,
  ...props
}: ButtonProps) => {
  return (
    <Base
      name={name}
      className={className}
      Icon={icon}
      tooltip={tooltip}
      flow={flow ? flow : null}
      {...props}
    />
  );
};

export default Button;
