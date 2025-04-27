import React from 'react';
import {
  useFormikContext,
  FormikErrors,
  FormikTouched,
  FormikValues,
} from 'formik';

import ErrorMessage from './ErrorMessage';
import AppPicker from '../AppPicker';

interface AppFormPickerProps {
  items: any[]; // Define the shape of the items if possible
  width?: string | number;
  name: string;
  numOfColumns?: number;
  placeholder?: string;
  PickerItemComponent: React.ComponentType<any>; // Type for the picker item component
}

function AppFormPicker({
  items,
  width,
  name,
  numOfColumns,
  placeholder,
  PickerItemComponent,
}: AppFormPickerProps) {
  const {errors, setFieldValue, touched, values} =
    useFormikContext<FormikValues>();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item: any) => setFieldValue(name, item)} // Type `item` based on the shape of your items array
        width={width}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        numOfColumns={numOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
