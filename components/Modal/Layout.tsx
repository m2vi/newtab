import { createRef, useState, ReactNode } from 'react';
import ReactModal from 'react-modal';
import { IoCloseOutline } from 'react-icons/io5';

export interface ModalLayoutProps {
  id?: string;
  contentLabel: string;
  children: ReactNode;
  title: string;
  triggerChildren: ReactNode;
}

export const ModalLayout = ({
  id,
  contentLabel,
  children,
  triggerChildren,
  title,
  ...props
}: ModalLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        id={id && `${id}Trigger`}
        onClick={() => setIsOpen(true)}
        {...props}
      >
        {triggerChildren}
      </span>
      <ReactModal
        isOpen={isOpen}
        closeTimeoutMS={0}
        style={{ overlay: {}, content: {} }}
        contentLabel={contentLabel}
        portalClassName={'Modal__Portal'}
        overlayClassName={
          'Modal__Overlay h-full absolute left-0 bottom-0 right-0 w-full h-full'
        }
        id={id}
        className={
          'Modal__Content max-w-3xl bg-primary-700 p-4 rounded-8 text-primary-100 w-full pt-7'
        }
        bodyOpenClassName={'Modal__Body__Open'}
        ariaHideApp={false}
        shouldFocusAfterRender={true}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        shouldReturnFocusAfterClose={true}
        role={'dialog'}
        preventScroll={false}
        parentSelector={() => document.body}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className='Modal__Head absolute top-0 left-0 right-0 p-2 px-4 flex justify-between items-center'>
          <h4 className='Modal__Title'>{title}</h4>
          <button onClick={() => setIsOpen(false)}>
            <IoCloseOutline className='h-6 w-6' />
          </button>
        </div>
        <div className='Modal__Inner'>{children}</div>
      </ReactModal>
    </>
  );
};
