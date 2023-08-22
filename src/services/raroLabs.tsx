import { apiRaroLabs } from './api';
import * as Pros from './structure';

export const getUserRequest = (id: number) => {
  return apiRaroLabs.get<Pros.UsersResponse>(`/v1/users/${id}`);
};

export const getAllUsersRequest = () => {
  return apiRaroLabs.get<Pros.UsersResponse>(`/v1/users/`);
};
export const postRegisterRequest = (values: Pros.PropsRegister) => {
  return apiRaroLabs.post<Pros.PropsRegister>(`/v1/users/`, {
    name: Pros.capitalize(values.name),
    email: values.email,
    password: values.password,
    password_confirmation: values.confirmPassword
  });
};
export const postLoginRequest = (values: Pros.PropsLogin) => {
  return apiRaroLabs.post<Pros.PropsLogin>(`/v1/auth/login`, {
    email: values.email,
    password: values.password
  });
};
