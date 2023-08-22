export const capitalize = (name: string): string => {
  name = name.replace(/[^\w\s-]/g, ' ');
  return name
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export interface UsersResponse {
  id: number;
  name: string;
  email: string;
  token: string;
}
export interface PropsRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  checked: boolean;
}

export interface PropsLogin {
  id: number;
  email: string;
  password: string;
  token: string;
}
