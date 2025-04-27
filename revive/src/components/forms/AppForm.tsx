import React, {ReactNode} from 'react';
import {Formik, FormikHelpers, FormikValues} from 'formik';

interface AppFormProps {
  initialValues: FormikValues;
  onSubmit: (
    values: FormikValues,
    formikHelpers: FormikHelpers<FormikValues>,
  ) => void;
  validationSchema: any; // You can replace `any` with the specific schema type if available
  children: ReactNode;
}

function AppForm({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}: AppFormProps) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
}

export default AppForm;
