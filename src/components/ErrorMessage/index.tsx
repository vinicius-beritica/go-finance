import './style.css';
interface PropsErrorMessage {
  message: string | false | undefined;
}

export const ErrorMessage = ({ message }: PropsErrorMessage) => {
  return <span className="msg-error">{message}</span>;
};
