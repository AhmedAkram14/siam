import firebase_app from "../config";
import { getFirestore, doc, setDoc, collection, getDocs, query, writeBatch, getDoc } from "firebase/firestore";
import { categorySchemaType } from "@/schemas/category";
import { productSchemaType } from "@/schemas/product";
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
        const collectionRef = collection(db, "categories");
        const docRef = doc(collectionRef, category.title_EN);
        await setDoc(docRef, category);
    }
    catch (error) {
        console.log("Error adding category:", error);
        throw error;
    }
}
export const deleteCategory = async (category: categorySchemaType): Promise<void> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, category.title_EN);
    await setDoc(docRef, {}, { merge: true });
}


export const addNewCategoryItem = async (category: categorySchemaType, item: productSchemaType): Promise<void> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, category.title_EN);
    await setDoc(docRef, {
        items: [...category.items, item]
    }, { merge: true });
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

