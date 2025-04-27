import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import {
  useFormikContext,
  FormikValues,
  FormikErrors,
  FormikTouched,
} from 'formik';

interface FormImagePickerProps {
  name: string;
}

function FormImagePicker({name}: FormImagePickerProps) {
  const {
    errors,
    setFieldValue,
    touched,
    values,
  }: {
    errors: FormikErrors<FormikValues>;
    setFieldValue: (field: string, value: any) => void;
    touched: FormikTouched<FormikValues>;
    values: FormikValues;
  } = useFormikContext();

  const imageUris: string[] = values[name] || [];

  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
