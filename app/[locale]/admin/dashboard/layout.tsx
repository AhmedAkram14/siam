import DashboardHeader from "./components/dashboard-header";
import SideNavBar from "./components/sideNavBar";

export default function Layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <SideNavBar />
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <DashboardHeader />
                {children}
            </div>
        </div>
    )
}