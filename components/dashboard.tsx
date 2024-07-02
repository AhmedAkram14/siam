"use client"
import { useAdminAuthContext } from "@/context/AdminAuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "./ui/button"
import { signOut } from "@/firebase/auth/signup"

const Dashboard = () => {
    const { user } = useAdminAuthContext()
    const router = useRouter()
    useEffect(() => {
        if (user == null) router.push("/admin")
    }, [router, user])
    return (
        <>
            <h1>Dashboard {user?.email}</h1>
            <Button onClick={async () => signOut()}>sign out</Button>
        </>
    )
}
export default Dashboard;