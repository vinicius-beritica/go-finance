import { Button } from '../Button';
import { Input } from '../Input';
import './style.css';
import { Formik, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { getUserRequest, postLoginRequest } from '../../services/raroLabs';
import { handleErrors } from '../../utils/handleErros';
import { AxiosError } from 'axios';
import { apiRaroLabs } from '../../services/api';
import { useState } from 'react';
import * as Props from './structure';
import { ToastContainer } from 'react-toastify';
import { Loading } from '../Loading';
import { messages } from '../../utils/messages';

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userPage = useNavigate();

  // Função para realizar o login
  const onSubmitLogin = async (values: Props.PropsLogin) => {
    try {
      const response = await postLoginRequest(values);
      if (response.status === 200) {
        setIsLoading(true);
        const { token, id } = response.data;
        apiRaroLabs.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${token}`;
        const userDataResponse = await getUserRequest(id);
        console.log(userDataResponse.status);
        if (userDataResponse.data) {
          localStorage.setItem('user', JSON.stringify(userDataResponse.data));
          setTimeout(() => {
            setIsLoading(false);
            userPage(`/login/${id}`);
          }, 2000);
        }
      }
    } catch (error: unknown) {
      setIsLoading(false);
      const typeRequest = 'postLoginRequest';
      handleErrors(error as AxiosError, typeRequest);
    }
  };

  return (
    <>
      <section className="sc-login">
        <div className="container-login">
          <h1 className="title-login">Login</h1>
          <p>
            Entre ou{' '}
            <Link className="a-new-register" to="../register">
              faça o seu cadastro
            </Link>
          </p>
          <Formik
            initialValues={Props.initialvalues}
            onSubmit={onSubmitLogin}
            validationSchema={Props.schemaValidateLogin}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {({ errors, touched, isSubmitting, isValid }) => (
              <Form className="form-login">
                <Input
                  id="email"
                  placeholder="Email"
                  name="email"
                  type="email"
                  errors={touched.email && errors.email}
                />
                <Input
                  id="password"
                  placeholder="Senha"
                  name="password"
                  type="password"
                  errors={touched.password && errors.password}
                />
                <Button disabled={isSubmitting || !isValid} text={'Entrar'} />
                <Link className="forgot-password" to="/deu_ruim">
                  Esqueceu sua senha
                </Link>
                {isLoading && (
                  <Loading text={`${messages.textModal.loadingLogin}`} />
                )}
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};
