import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { ErrorMessage, Formik } from 'formik';
import { FC, useState } from 'react';

import CustomButton from '@/shared/components/custom-button';

import { initialValues, textFields, validationSchema } from './data';
import { useHandleSubmit } from './hooks';
import { FormContainer } from './styles';

const Home: FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { handleSubmit, isLoading, success } = useHandleSubmit();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <Box display="grid" gap="20px" width="min(100%, 400px)">
      <Typography variant="h3">Please Register</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          isValid,
          isSubmitting,
          dirty,
          submitForm,
        }) => {
          const isDisabled = !isValid || !dirty || isSubmitting;

          return (
            <FormContainer autoComplete="on" onSubmit={(e) => e.preventDefault()}>
              <>
                {textFields.map(({ label, name, type = 'text' }) => (
                  <TextField
                    key={name}
                    variant="outlined"
                    label={label}
                    type={type === 'password' ? (isPasswordVisible ? 'text' : 'type') : type}
                    name={name}
                    value={values[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors[name] && touched[name]}
                    helperText={<ErrorMessage name={name} />}
                    disabled={isSubmitting || success}
                    InputProps={{
                      endAdornment:
                        name === 'password' ? (
                          <InputAdornment position="end">
                            <IconButton disabled={success} onClick={togglePasswordVisibility}>
                              {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        ) : null,
                    }}
                  />
                ))}
              </>
              <CustomButton
                variant="contained"
                color={success ? 'success' : 'primary'}
                type="submit"
                disabled={isDisabled}
                onClick={submitForm}
              >
                {isLoading ? <CircularProgress /> : success ? 'Success' : 'Submit'}
              </CustomButton>
            </FormContainer>
          );
        }}
      </Formik>
    </Box>
  );
};

export default Home;
