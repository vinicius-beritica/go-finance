export const messages = {
  default: {
    required: 'Campo obrigatório'
  },
  name: {
    required: 'Nome é obrigatório',
    invalid: 'Nome e sobrenome são obrigatórios'
  },
  email: {
    required: 'E-mail é obrigatório',
    invalid: 'Formato de email inválido'
  },
  password: {
    required: 'Senha é obrigatória',
    max: 'E senha não pode ter mais que 8 caracteres',
    number: 'A senha precisa ter 8 caracteres',
    uppercase: 'Senha deve ter pelo menos 1 letra maiúscula',
    special: 'Senha deve ter pelo menos 1 caractere especial'
  },
  confirmPassword: {
    required: 'Confirmação de senha é obrigatória',
    equalPass: 'Senhas devem ser iguais'
  },
  checked: {
    required: 'Necessário aceitar os termos e condições.'
  },
  handleErrors: {
    default: 'Ocorreu um erro inesperado',
    errorDefault400: 'Um ou mais campos não foram preenchidos corretamente.',
    errorDefault401: 'Token não fornecido. Token inválido ou expirado.',
    errorLogin401: 'Usuário ou senha incorretos',
    errorDefault404: 'Usuário não encontrado.',
    errorDefault422:
      'Erro interno ocorrido. Entre em contato com o administrador do sistema!',
    errorNet: 'Ocorreu um erro de rede.'
  },

  textModal: {
    loadingLogin: 'Carregando...',
    loadingRegister: 'Cadastro realizado com sucesso, faça o seu login!',
    forgotPassword: 'Já era, parceiro!!!'
  }
};
