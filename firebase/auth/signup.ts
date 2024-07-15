import firebase_app from "../config";
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, NextOrObserver, User } from "firebase/auth";
import addData from "../firestore/addData";

const auth = getAuth(firebase_app);


export default async function signUp(email: string, password: string, name: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        await addData("users", result.user.uid, { email, name, id: result?.user?.uid })
    } catch (e: any) {
        error = e;
    }

    return { result, error };
}

export function _onAuthStateChanged(cb: NextOrObserver<User>) {
    return onAuthStateChanged(auth, cb);
}



export async function signOut() {
    try {
        return await auth.signOut();
    } catch (error) {
        console.error("Error signing out with Google", error);
    }
}

// export async function signUpWithGoogle(data: any = {}) {
//     const provider = new GoogleAuthProvider();

//     try {
//         const { user } = await signInWithPopup(auth, provider);
//         await addData("users", user.uid, data)
//     } catch (error) {
//         throw new Error();
//     }
// }