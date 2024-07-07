import firebase_app from "../config";
import { getFirestore, doc, getDoc, collection, getDocs, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

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