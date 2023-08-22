import './style.css';
import email from '../../assets/icon-email.svg';
import password from '../../assets/icon-password.svg';
import user from '../../assets/icon-user.svg';
import { Field } from 'formik';
import { ErrorMessage } from '../ErrorMessage';

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  errors: string | false | undefined;
}

export const Input = ({ id, placeholder, name, type, errors }: PropsInput) => {
  return (
    <>
      <div className="input-form">
        <img
          src={
            name === 'email'
              ? email
              : name === 'password'
              ? password
              : name === 'name'
              ? user
              : password
          }
          alt=""
        />
        <Field
          id={id}
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage message={errors} />
    </>
  );
};
