import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string(),
  email: yup.string().email(' Некорректный Email').required('Email is required'),
  password: yup.string().min(8, 'Минимум 8 символов').required('Password is required'),
});

export { validationSchema };
