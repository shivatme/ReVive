import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import UploadScreen from "./UploadScreen";
import { getCategories } from "../store/categories";
import { addListing } from "../store/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const categories = getCategories();

function ListingEditScreen(props) {
  const location = useLocation();
  const [visibleUpload, setVisibleUpload] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setVisibleUpload(true);
    simulateProgressBar();

    const { images, ...rest } = listing; // Destructure 'images' from 'listing'

    const updatedListing = {
      ...rest, // Spread the remaining properties of 'listing'
      images: [{ location: images[0] }], // Assign 'images[0]' to 'images[0].location'
      location: location,
    };
    console.log(updatedListing);

    addListing(updatedListing);
    console.log(updatedListing);
    function simulateProgressBar() {
      let progressBar = 0;
      const interval = setInterval(() => {
        progressBar += 5;
        setProgress(progressBar / 100);

        if (progressBar >= 100) {
          clearInterval(interval);
          resetForm();
        }
      }, 3);
    }
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
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
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
}
const styles = StyleSheet.create({
  container: {
    top: 20,
    padding: 20,
  },
});
export default ListingEditScreen;
