import * as Yup from 'yup';

export interface PropsLogin {
  id: number;
  email: string;
  password: string;
  token: string;
}

export const initialvalues = {
  id: 0,
  email: '',
  password: '',
  token: ''
};

export const schemaValidateLogin = Yup.object().shape({
  email: Yup.string()
    .email('Formato de email inválido')
    .required('E-mail obrigatório'),
  password: Yup.string().required('Usuário ou senha incorretos')
});
