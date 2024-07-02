
import { AdminAuthContextProvider } from '../../context/AdminAuthContext';


export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AdminAuthContextProvider>
            <main>{children}</main>
        </AdminAuthContextProvider>
    )
}