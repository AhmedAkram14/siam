"use client"
import React, { ReactNode } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { ImSpinner8, ImSpinner9 } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";

const auth = getAuth(firebase_app);
type TAuthContext = {
    user: User | null
}

export const AuthContext = React.createContext<TAuthContext & {}>({ user: null });

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: { children: ReactNode }) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div className='flex w-full flex-grow h-[100vh] items-center justify-center'>
                <FaSpinner className="w-8 h-8 animate-spin" />
            </div> : children}
        </AuthContext.Provider>
    );
};