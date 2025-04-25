import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../config/firebaseConfig";

const auth = getAuth(firebaseApp);

const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};

// const register = (email, password, name) => {
//   return new Promise((resolve, reject) => {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;

//         resolve(user); // Resolve the promise with the user object
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         reject(errorCode); // Reject the promise with the error object
//       });
//   });
// };

const register = (email, password, name) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Update the display name
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            resolve(user); // Resolve the promise with the user object
          })
          .catch((error) => {
            reject(error); // Reject the promise with the error object
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode); // Reject the promise with the error object
      });
  });
};
export default {
  login,
  register,
};
