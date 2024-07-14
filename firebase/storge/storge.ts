import { deleteObject, getDownloadURL, getStorage, ref, StorageReference, uploadBytes } from "firebase/storage"
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

export const deleteImages = async (path: string): Promise<void> => {
    const storageRef: StorageReference = ref(storage, path);

    try {
        // Delete file from Firebase Storage
        await deleteObject(storageRef);
    } catch (error) {
        console.error('Error deleting file:', error);
        throw error; // You can handle or rethrow the error as needed
    }

}
// change directory name
// async function renameDirectory(oldDirectoryName: string, newDirectoryName: string) {
//     try {
//         // List all files in the old directory
//         const [files] = await bucket.getFiles({
//             prefix: `${oldDirectoryName}/`,
//         });

//         // Move each file to the new directory
//         await Promise.all(files.map(async (file) => {
//             const newFilePath = file.name.replace(oldDirectoryName, newDirectoryName);
//             await bucket.file(file.name).move(newFilePath);
//         }));

//         console.log(`Directory '${oldDirectoryName}' renamed to '${newDirectoryName}' successfully.`);
//     } catch (error) {
//         console.error('Error renaming directory:', error);
//     }
// }

export default storage;
