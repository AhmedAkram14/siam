import Header from "@/components/Header";
import { AuthContextProvider } from "@/context/AuthContext";


export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthContextProvider>
            <Header />
            <main>{children}</main>
        </AuthContextProvider>
    )
}