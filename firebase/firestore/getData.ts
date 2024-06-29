import { categorySchemaType } from "@/schemas/category";
import firebase_app from "../config";
import { getFirestore, doc, getDoc, collection, getDocs, QueryDocumentSnapshot, DocumentData, query } from "firebase/firestore";

const db = getFirestore(firebase_app)
export async function getDocument(collection: string, id: string) {
    let docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export async function getDocuments(coll: string) {
    const usersCollectionRef = collection(db, coll);

    // Function to get all documents from the 'users' collection
    const usersSnapshot = await getDocs(usersCollectionRef);
    const usersList = [] as unknown as QueryDocumentSnapshot<DocumentData, DocumentData> & { id: string }[];

    usersSnapshot.forEach((doc) => {
        // doc.data() is a function to retrieve the data of each document
        usersList.push({ id: doc.id, ...doc.data() });
    });

    return usersList;
}


export const getCollectionAndDocuments = async (): Promise<categorySchemaType[]> => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data()) as categorySchemaType[];
};

export const getCategory = async (categoryTitle: string): Promise<categorySchemaType | undefined> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, categoryTitle);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { ...docSnap.data() } as categorySchemaType;
        } else {
            console.log(`No such document with id ${categoryTitle}`);
            return undefined;
        }
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error; // You might want to handle or rethrow the error as needed
    }
}