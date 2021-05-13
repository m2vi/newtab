export interface toggleProps {
  id?: string;
  disabled?: boolean;
  checked?: boolean;
  size?: 'large' | 'small';
}

export const Toggle = ({ id, disabled, checked, size }: toggleProps) => {
  return (
    <div className='flex relative h-full justify-center items-center' id={id}>
      <input
        type='checkbox'
        className='appearance-none absolute z-100 w-full h-full top-0 left-0'
      />

      <div
        className={`relative block cursor-pointer ${
          size === 'large' ? 'h-2' : 'h-1'
        }`}
      >
        <label className='h-1 mt-1 w-full rounded-5'></label>
        <label className='w-4 h-4 absolute right-0'></label>
      </div>
    </div>
  );
};
