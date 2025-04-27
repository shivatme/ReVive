import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import FormImagePicker from '../components/forms/FormImagePicker';
import UploadScreen from './UploadScreen';

// Type definitions for form values
interface ListingFormValues {
  title: string;
  price: string;
  description: string;
  category: any; // Type according to your categories structure
  images: any[]; // Array of images or file paths
}

// Validation schema for the form
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image'),
});

// const categories = getCategories();

// Type for the component props
interface ListingEditScreenProps {}

const ListingEditScreen: React.FC<ListingEditScreenProps> = () => {
  const [visibleUpload, setVisibleUpload] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  const handleSubmit = async (
    listing: ListingFormValues,
    {resetForm}: {resetForm: () => void},
  ) => {
    setProgress(0);
  };

  const generateListingId = (): string => {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0');
    return timestamp + random;
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setVisibleUpload(false)}
        progress={progress}
        visible={visibleUpload}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        onSubmit={() => handleSubmit}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        {/* <AppFormPicker
          items={categories}
          name="category"
          numOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        /> */}
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 20,
    padding: 20,
  },
});

export default ListingEditScreen;
