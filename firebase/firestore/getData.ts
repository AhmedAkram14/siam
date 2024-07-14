import { categorySchemaType } from "@/schemas/category";
import firebase_app from "../config";
import { getFirestore, doc, getDoc, collection, getDocs, QueryDocumentSnapshot, DocumentData, query, Timestamp } from "firebase/firestore";
import { timestampToDate } from "@/utils/helperFunctions";

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
    return querySnapshot.docs.map((docSnapshot) => {
        const doc = JSON.parse(JSON.stringify(docSnapshot.data()));
        doc.createdAt = timestampToDate(doc.createdAt as Timestamp);
        if (doc.updatedAt) doc.updatedAt = timestampToDate(doc.updatedAt as Timestamp);
        for (const item of doc.items) {
            item.createdAt = timestampToDate(item.createdAt as Timestamp);
            if (item.updatedAt) {
                item.updatedAt = timestampToDate(item.updatedAt as Timestamp);
            }
        }
        return { ...doc }
    }) as categorySchemaType[];
};

export const getCategory = async (categoryTitle: string): Promise<categorySchemaType | undefined> => {
    const collectionRef = collection(db, "categories");
    const docRef = doc(collectionRef, categoryTitle);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const category = docSnap.data();
            for (const item of category.items) {
                item.createdAt = timestampToDate(item.createdAt as Timestamp);
                if (item.updatedAt) {
                    item.updatedAt = timestampToDate(item.updatedAt as Timestamp);
                }
            }
            return { ...category } as categorySchemaType;
        } else {
            console.log(`No such document with id ${categoryTitle}`);
            return undefined;
        }
    } catch (error) {
        console.error("Error fetching category:", error);
        throw error; // You might want to handle or rethrow the error as needed
    }
}