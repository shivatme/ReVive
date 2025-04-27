import React from 'react';
import {
  useFormikContext,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

interface AppFormFieldProps {
  name: string;
  width?: string | number;
  [key: string]: any; // Allow additional props to be passed to AppTextInput
}

function AppFormField({name, width, ...otherProps}: AppFormFieldProps) {
  const {setFieldTouched, setFieldValue, errors, touched, values} =
    useFormikContext<FormikValues>();

  return (
    <>
      <AppTextInput
        onChangeText={(text: string) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
