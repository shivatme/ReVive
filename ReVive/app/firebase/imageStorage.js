import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseApp from "../config/firebaseConfig";

const storage = getStorage(firebaseApp);

const uploadImages = async (imageUris) => {
  try {
    console.log(imageUris);
    const downloadURLs = [];
    for (const uri of imageUris) {
      const response = await fetch(uri);
      const blob = await response.blob();
      const imageName = uri.substring(uri.lastIndexOf("/") + 1);
      const storageRef = ref(storage, "images/" + imageName);

      // Upload the image file to Firebase Storage
      await uploadBytes(storageRef, blob);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // console.log("Image uploaded successfully. Download URL:", downloadURL);

      downloadURLs.push(downloadURL);
    }

    return downloadURLs;
  } catch (error) {
    console.error("Error uploading images:", error);
    throw error;
  }
};

export default { uploadImages };
