"use client"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import signIn from "@/firebase/auth/signin"
import { useToast } from "./ui/use-toast"
import { useRouter } from "next/navigation";
import { useAdminAuthContext } from "@/context/AdminAuthContext"


const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(100)
})


export default function AdminAuth() {
    const { user } = useAdminAuthContext()
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const { result, error } = await signIn(values.email, values.password);
        if (error) {
            toast({
                title: "Error",
                description: "something went wrong you can,t login",
            })
            return;
        }

    }
    return (
        <div className="w-full h-[100vh] lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center py-12 h-full">
                    <div className="mx-auto grid min-w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to Siam Dashboard
                            </p>
                        </div>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="m@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </Form>
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/cover.jpg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:opacity-60 "
                />
            </div>
        </div >
    )
}
