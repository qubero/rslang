import * as yup from 'yup';

const schemaForLogin = yup.object({
  name: yup.string(),
  email: yup.string().email(' Некорректный Email').required('Email is required'),
  password: yup.string().min(8, 'Минимум 8 символов').required('Password is required'),
});
const schemaForRegistration = yup.object({
  name: yup.string().min(4, 'Минимум 4 символа').required('Name is required'),
  email: yup.string().email(' Некорректный Email').required('Email is required'),
  password: yup.string().min(8, 'Минимум 8 символов').required('Password is required'),
});

export { schemaForLogin, schemaForRegistration };
