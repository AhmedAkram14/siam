
import { AdminAuthContextProvider } from '@/context/AdminAuthContext';
import { unstable_setRequestLocale } from 'next-intl/server';

interface RootLayoutProps {
    children: React.ReactNode;
    params: { locale: string };
}

export default function Layout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    unstable_setRequestLocale(locale);

    return (
        <AdminAuthContextProvider>
            <main>{children}</main>
        </AdminAuthContextProvider>
    )
}