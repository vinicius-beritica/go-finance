import * as Yup from 'yup';
import { messages } from '../../utils/messages';

export interface PropsRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  checked: boolean;
}

export const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  checked: false
};

// Função para validação dos campos do formulário
export const schemaValidateRegister = Yup.object().shape({
  name: Yup.string()
    .required(messages.name.required)
    .test('two-name', messages.name.invalid, value => {
      if (!value) return false;
      const names = value.split(' ');
      return names.length >= 2 && names[1] != '';
    }),
  email: Yup.string()
    .required(messages.email.required)
    .email(messages.email.invalid),
  password: Yup.string()
    .required(messages.password.required)
    .max(8, messages.password.max)
    .test('password-number', messages.password.number, value => {
      return value.length === 8;
    })
    .test('uppercase', messages.password.uppercase, value => {
      return /[A-Z]/.test(value);
    })
    .test('special-character', messages.password.special, value => {
      return /[@$!%*?&]/.test(value);
    }),
  confirmPassword: Yup.string()
    .required(messages.confirmPassword.required)
    .oneOf([Yup.ref('password')], messages.confirmPassword.equalPass),
  checked: Yup.bool().oneOf([true], messages.checked.required)
});
