import { FormikHelpers } from 'formik';
import { useState } from 'react';

import MockApi from '@/api/mock-api';

import { initialValues } from './data';

export const useHandleSubmit = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = async (
    data: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>,
  ) => {
    if (success) return;
    setIsLoading(true);
    await MockApi();
    console.log(data, actions);
    setIsLoading(false);
    setSuccess(true);
  };

  return { isLoading, success, handleSubmit };
};
