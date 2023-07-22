import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import firebaseApp from '../config/firebaseConfig';
import RNFS from 'react-native-fs';

const storage = getStorage(firebaseApp);

const uriToBlob = uri => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      reject(new Error('uriToBlob failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
};

const uploadImages = async imageUris => {
  try {
    const downloadURLs = [];

    for (const uri of imageUris) {
      const blobData = await uriToBlob(uri);

      const imageName = uri.substring(uri.lastIndexOf('/') + 1);
      const storageRef = ref(storage, 'images/' + imageName);

      // Determine the content type based on the file extension or use a default type
      let contentType = 'image/jpeg'; // Replace with the appropriate MIME type based on your image format

      // Set the content type in the metadata
      const metadata = {
        contentType: contentType,
      };

      await uploadBytes(storageRef, blobData, metadata);
      const downloadURL = await getDownloadURL(storageRef);
      downloadURLs.push(downloadURL);
    }

    return downloadURLs;
  } catch (error) {
    console.error('Error uploading images:', error);
    throw error;
  }
};

export default {uploadImages};
