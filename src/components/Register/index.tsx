import { Button } from '../Button';
import { Input } from '../Input';
import './style.css';
import { Formik, Form, Field } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import * as Props from './structure';
import { ToastContainer } from 'react-toastify';
import { postRegisterRequest } from '../../services/raroLabs';
import { handleErrors } from '../../utils/handleErros';
import { AxiosError } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Loading } from '../Loading';
import { messages } from '../../utils/messages';

export const Register = () => {
  const initialPage = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Função para submeter o formulário à Api.
  const onSubmitRegister = async (values: Props.PropsRegister) => {
    try {
      const response = await postRegisterRequest(values);
      setIsLoading(true);
      if (response.status === 201) {
        setTimeout(() => {
          setIsLoading(false);
          initialPage('/');
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      const typeRequest = 'postRegisterRequest';
      handleErrors(error as AxiosError, typeRequest);
    }
  };
  return (
    <>
      <section className="sc-register">
        <div className="container-register">
          <h1 className="title-register">Cadastro</h1>
          <p>para iniciar</p>
          <Formik<Props.PropsRegister>
            initialValues={Props.initialValues}
            onSubmit={onSubmitRegister}
            validationSchema={Props.schemaValidateRegister}
            validateOnChange={true}
            validateOnBlur={false}
          >
            {({ errors, touched, isSubmitting, isValid, values }) => (
              <Form className="form-register">
                <Input
                  id="name"
                  placeholder="Nome e Sobrenome"
                  name="name"
                  type="text"
                  errors={touched.name && errors.name}
                />
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
                  name={'password'}
                  type="password"
                  errors={touched.password && errors.password}
                />

                <Input
                  id="confirmPassword"
                  placeholder="Confirma senha"
                  name="confirmPassword"
                  type="password"
                  errors={touched.confirmPassword && errors.confirmPassword}
                />
                <label className="check-label">
                  <Field
                    className="input-check"
                    type="checkbox"
                    name="checked"
                    errors={touched.checked && errors.checked}
                  />
                  Declaro que li e concordo com os termos e condições de uso.
                </label>
                <Button
                  disabled={
                    isSubmitting ||
                    !isValid ||
                    JSON.stringify(Props.initialValues) ===
                      JSON.stringify(values)
                  }
                  text={'Cadastrar'}
                />
                <Link className="a-back" to="/">
                  Voltar
                </Link>
                {isLoading && (
                  <Loading text={`${messages.textModal.loadingRegister}`} />
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
