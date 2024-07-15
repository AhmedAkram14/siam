import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import addData from "../firestore/addData";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
        error = e;
    }

    return { result, error };
}
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    try {
        const { user } = await signInWithPopup(auth, provider);
        console.log(user)
        await addData("users", user.uid, { email: user.email, name: user.displayName, id: user.uid })
    } catch (error) {
        throw new Error();
    }
}



