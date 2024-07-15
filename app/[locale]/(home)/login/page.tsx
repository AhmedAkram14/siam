import AuthForm from "@/components/AuthForm";
import { unstable_setRequestLocale } from "next-intl/server";

const Login = ({
    params: { locale },
}: Readonly<{ params: { locale: string } }>) => {
    unstable_setRequestLocale(locale);
    return (
        <AuthForm />
    )
}
export default Login;