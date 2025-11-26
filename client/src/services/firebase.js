/**
 * Firebase Service - Database & Authentication
 * 
 * This file is prepared for future Firebase integration.
 * Currently using localStorage for data persistence, but ready to connect
 * to Firebase services.
 * 
 * FUTURE FIREBASE SETUP:
 * 
 * 1. Create Firebase Project:
 *    - Go to https://console.firebase.google.com/
 *    - Create new project
 *    - Enable Authentication (Email/Password, Google Sign-In)
 *    - Enable Firestore Database
 *    - Enable Storage (for Kolam images)
 * 
 * 2. Install Firebase SDK:
 *    npm install firebase
 * 
 * 3. Get Firebase Config:
 *    - Project Settings > General > Your apps
 *    - Copy firebaseConfig object
 * 
 * 4. Add Config to Environment Variables:
 *    Create .env file:
 *    VITE_FIREBASE_API_KEY=your_api_key
 *    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
 *    VITE_FIREBASE_PROJECT_ID=your_project_id
 *    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
 *    VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
 *    VITE_FIREBASE_APP_ID=your_app_id
 * 
 * 5. Initialize Firebase (uncomment code below):
 */

// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * Firebase Configuration
 * Replace with your actual Firebase config
 */
/*
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
*/

/**
 * AUTHENTICATION FUNCTIONS
 */

/**
 * Sign up new user
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User full name
 * @returns {Promise<object>} - User data
 */
/*
export async function signUpUser(email, password, name) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Save additional user data to Firestore
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      email: user.email,
      name: name,
      createdAt: new Date(),
    });
    
    return { uid: user.uid, email: user.email, name };
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
}
*/

/**
 * Sign in existing user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<object>} - User data
 */
/*
export async function signInUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Fetch user data from Firestore
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    
    let userData = { uid: user.uid, email: user.email };
    querySnapshot.forEach((doc) => {
      userData = { ...userData, ...doc.data() };
    });
    
    return userData;
  } catch (error) {
    console.error("Sign in error:", error);
    throw error;
  }
}
*/

/**
 * Sign out current user
 */
/*
export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Sign out error:", error);
    throw error;
  }
}
*/

/**
 * FIRESTORE DATABASE FUNCTIONS
 */

/**
 * Save Kolam design to Firestore
 * @param {object} kolamData - Kolam design data
 * @returns {Promise<string>} - Document ID
 */
/*
export async function saveKolam(kolamData) {
  try {
    const docRef = await addDoc(collection(db, "kolams"), {
      ...kolamData,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Save Kolam error:", error);
    throw error;
  }
}
*/

/**
 * Fetch user's saved Kolams
 * @param {string} userId - User ID
 * @returns {Promise<array>} - Array of Kolam designs
 */
/*
export async function getUserKolams(userId) {
  try {
    const q = query(collection(db, "kolams"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    
    const kolams = [];
    querySnapshot.forEach((doc) => {
      kolams.push({ id: doc.id, ...doc.data() });
    });
    
    return kolams;
  } catch (error) {
    console.error("Fetch Kolams error:", error);
    throw error;
  }
}
*/

/**
 * STORAGE FUNCTIONS
 */

/**
 * Upload Kolam image to Firebase Storage
 * @param {File} file - Image file
 * @param {string} userId - User ID
 * @returns {Promise<string>} - Download URL
 */
/*
export async function uploadKolamImage(file, userId) {
  try {
    const storageRef = ref(storage, `kolams/${userId}/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error("Upload image error:", error);
    throw error;
  }
}
*/

/**
 * EXAMPLE USAGE:
 * 
 * // Sign up
 * const user = await signUpUser('user@example.com', 'password123', 'John Doe');
 * 
 * // Sign in
 * const user = await signInUser('user@example.com', 'password123');
 * 
 * // Save Kolam
 * const kolamId = await saveKolam({
 *   userId: user.uid,
 *   name: 'My Beautiful Kolam',
 *   imageUrl: 'https://...',
 *   gridSize: 10,
 *   colors: ['#8c2f0c', '#d8b98a']
 * });
 * 
 * // Upload image
 * const imageUrl = await uploadKolamImage(imageFile, user.uid);
 * 
 * // Fetch user's Kolams
 * const userKolams = await getUserKolams(user.uid);
 */

export default {
  // When ready, uncomment and export:
  // signUp: signUpUser,
  // signIn: signInUser,
  // signOut: signOutUser,
  // saveKolam,
  // getUserKolams,
  // uploadImage: uploadKolamImage,
};
