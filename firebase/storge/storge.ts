import { getDownloadURL, getStorage, ref, StorageReference, uploadBytes } from "firebase/storage"
import firebase_app from "../config";

const storage = getStorage(firebase_app)

export const uploadImage = async (file: File, path: string): Promise<string> => {
    const storageRef: StorageReference = ref(storage, path);

    try {
        // Upload file to Firebase Storage
        const snapshot = await uploadBytes(storageRef, file);

        // Get download URL
        const downloadURL = await getDownloadURL(storageRef);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading file:', error);
        throw error; // You can handle or rethrow the error as needed
    }
}

export default storage;
