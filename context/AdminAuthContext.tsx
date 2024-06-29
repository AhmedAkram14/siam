"use client"
import React, { ReactNode } from 'react';
import {
    onAuthStateChanged,
    getAuth,
    User,
} from 'firebase/auth';
import firebase_app from '@/firebase/config';
import { FaSpinner } from "react-icons/fa";
import { getDocument } from '@/firebase/firestore/getData';
import { useToast } from '@/components/ui/use-toast';
import { signOut } from '@/firebase/auth/signup';
import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app);
type TAuthContext = {
    user: User | null
}

export const AdminAuthContext = React.createContext<TAuthContext & {}>({ user: null });

export const useAdminAuthContext = () => React.useContext(AdminAuthContext);

export const AdminAuthContextProvider = ({
    children,
}: { children: ReactNode }) => {
    const { toast } = useToast()
    const router = useRouter()
    const [user, setUser] = React.useState<User | null>(null);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log(user?.uid)
            if (user) {
                const { result, error } = await getDocument("users", user.uid || "")
                console.log(result)
                if (result?.data()?.isAdmin) {
                    setUser(user);
                    router.push("/admin/dashboard")
                }
                else {
                    console.log(error)
                    toast({
                        title: "Error",
                        description: "You are not an admin",
                    })
                    await signOut();
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [router, toast]);

    return (
        <AdminAuthContext.Provider value={{ user }}>
            {loading ? <div className='flex w-full flex-grow h-[100vh] items-center justify-center'>
                <FaSpinner className="w-8 h-8 animate-spin" />
            </div> : children}
        </AdminAuthContext.Provider>
    );
};