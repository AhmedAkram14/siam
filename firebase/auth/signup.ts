import firebase_app from "../config";
import { Auth, createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, NextOrObserver, User } from "firebase/auth";
import addData from "../firestore/addData";

const auth = getAuth(firebase_app);


export default async function signUp(email: string, password: string, data: any) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        await addData("users", result.user.uid, data)
    } catch (e) {
        error = e;
    }

    return { result, error };
}

export function _onAuthStateChanged(cb: NextOrObserver<User>) {
    return onAuthStateChanged(auth, cb);
}



export async function signOut() {
    try {
        return auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}