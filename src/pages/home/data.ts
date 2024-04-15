import * as Yup from 'yup';

import { EMAIL_REGEX } from '@/utils/static';

type InitialValueName = keyof typeof initialValues;

interface TextFieldProps {
  label: string;
  name: InitialValueName;
  type?: string;
}

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
} as const;

export const textFields: TextFieldProps[] = [
  { label: 'First Name', name: 'firstName' },
  { label: 'Last Name', name: 'lastName' },
  { label: 'Email', name: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Repeat Password', name: 'repeatPassword', type: 'password' },
] as const;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().matches(EMAIL_REGEX, 'Invalid email format').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Repeat Password is required'),
});
