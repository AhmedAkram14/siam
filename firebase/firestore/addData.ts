import firebase_app from "../config";
import { getFirestore, doc, setDoc, collection, getDocs, query, writeBatch, getDoc, deleteDoc } from "firebase/firestore";
import { categorySchemaType } from "@/schemas/category";
import { productSchemaType } from "@/schemas/product";
import { getCategory } from "./getData";
const db = getFirestore(firebase_app)
export default async function addData(collection: string, id: string, data: any) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}
// export type TCategoryItem = {
//     id: number;
//     imageUrls: string[];
//     name_EN: string;
//     name_AR: string;
//     description_EN: string;
//     description_AR: string;
//     price: number;
// }
// export type TCategory = {
//     title: string;
//     imageUrl: string;
//     description: string;
//     items: TCategoryItem[];
// }
// export type objectsToAdd = {
//     title: string
// }

// export const addCollectionAndDocuments = async <T extends objectsToAdd>(
//     collectionKey: string,
//     objectsToAdd: T[]
// ): Promise<void> => {
//     const collectionRef = collection(db, collectionKey);
//     const batch = writeBatch(db);

//     objectsToAdd.forEach((object) => {
//         const docRef = doc(collectionRef, object.title);
//         batch.set(docRef, object);
//     });
//     await batch.commit();
// };

export const addNewCategory = async (category: categorySchemaType): Promise<void | Error> => {
    try {
        const collectionRef = collection(db, 'categories');
        const docRef = doc(collectionRef, category.title_EN);

        // Check if document already exists
        const docSnapshot = await getDoc(docRef);
        if (docSnapshot.exists()) {
            throw new Error(`Document with title ${category.title_EN} already exists.`);
        }

        // Document does not exist, proceed to create it
        await setDoc(docRef, category);
        console.log(`Document ${category.title_EN} successfully added.`);
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }
};
export const updateCategory = async (category: categorySchemaType, title: string): Promise<void> => {
    try {
        if (title === category.title_EN) {
            const collectionRef = collection(db, "categories");
            const docRef = doc(collectionRef, title);
            await setDoc(docRef, category, { merge: true });
        }
        else {
            const collectionRef = collection(db, "categories");
            const oldDocRef = doc(collectionRef, title);

            // Step 1: Retrieve the data from the old document
            const oldDocSnapshot = await getDoc(oldDocRef);
            if (oldDocSnapshot.exists()) {
                const data = oldDocSnapshot.data();

                // Step 2: Create a new document with the new name and set its data
                const newDocRef = doc(collectionRef, category.title_EN);
                await setDoc(newDocRef, data);
                await setDoc(newDocRef, category, { merge: true });
                // Step 3: Delete the old document (optional)
                await deleteDoc(oldDocRef);

            } else {
                throw new Error(`Document ${title} does not exist`);
            }
        }
    } catch (error) {
        console.error("Error changing document name:", error);
        throw error; // Optional: re-throw the error or handle it as per your application's needs
    }
}
export const deleteCategory = async (category: categorySchemaType): Promise<void> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, category.title_EN);
    await deleteDoc(docRef);
}


// export const addNewCategoryItem = async (category: categorySchemaType, item: productSchemaType): Promise<void> => {
//     const collectionRef = collection(db, "categories");
//     const docRef = doc(collectionRef, category.title_EN);
//     await setDoc(docRef, {
//         items: [...category.items, item]
//     }, { merge: true });
// }
export const addNewCategoryItem = async (categoryTitle: string, item: productSchemaType): Promise<void> => {
    try {
        const collectionRef = collection(db, "categories");
        const docRef = doc(collectionRef, categoryTitle);
        const category = await getCategory(categoryTitle)
        if (category) {
            await setDoc(docRef, {
                items: [...category.items, item]
            }, { merge: true });
        }
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteCategoryItem = async (category: categorySchemaType, item: productSchemaType): Promise<void> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, category.title_EN);
    await setDoc(docRef, {
        items: category.items.filter((i) => i.id !== item.id)
    }, { merge: true });
}

export const updateCategoryItem = async (category: categorySchemaType, item: productSchemaType): Promise<void> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, category.title_EN);
    await setDoc(docRef, {
        items: category.items.map((i) => i.id === item.id ? item : i)
    }, { merge: true });
}

