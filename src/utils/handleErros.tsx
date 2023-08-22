import { AxiosError } from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { messages } from './messages';

export const handleErrors = (error: AxiosError, typeRequest: string) => {
  // tratar todos os erros de request
  if (error.response) {
    switch (error.response.status) {
      case 400:
        toast.error(messages.handleErrors.errorDefault400);
        break;
      case 401:
        if (typeRequest === 'postLoginRequest') {
          toast.error(messages.handleErrors.errorLogin401);
          break;
        } else {
          toast.error(messages.handleErrors.errorDefault401);
          break;
        }
      case 404:
        toast.error(messages.handleErrors.errorDefault404);
        break;
      case 422:
        toast.error(
          `${messages.handleErrors.errorDefault422}. Código de erro: ${error.response.status}`
        );
        break;
      default:
        toast.error(messages.handleErrors.default);
    }
  } else {
    console.log(messages.handleErrors.errorNet);
  }
  <ToastContainer />;
};
