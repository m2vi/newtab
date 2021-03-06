import { toast, ToastOptions } from 'react-toastify';
import { isDevelopment } from './constants';

export const notify = (
  type: string,
  text: string,
  important?: boolean,
  options?: ToastOptions
) => {
  // if (isDevelopment) {
  //   return console.log(text);
  // }
  toast.info(
    text,
    options
      ? options
      : {
          position: toast.POSITION.TOP_RIGHT,
          closeButton: false,
          hideProgressBar: false,
          pauseOnFocusLoss: important ? true : false,
          pauseOnHover: important ? true : false,
          draggableDirection: 'x',
          draggable: true,
          autoClose: 3000,
        }
  );
};

export default notify;

// React.ReactNode
