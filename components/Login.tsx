import signIn, { signInWithGoogle } from "@/firebase/auth/signin";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useToast } from "./ui/use-toast";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";


const Login = () => {
  const t = useTranslations("login");
  const formSchema = z.object({
    email: z.string().email(t("emailError")),
    password: z.string().min(6, t("passwordError")),
  })
  const locale = useLocale();
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }

  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await signIn(values.email, values.password)
      if (error) {
        toast({
          title: "Error",
          description: error?.message || t("loginError")
        })
        return
      }
      else {
        router.push("/")
      }
    }
    catch (error) {
      toast({
        title: "Error",
        description: t("loginError"),
      })
    }
  }
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: t("loginError"),
      })

    }
  }
  return (
    <div className="py-6 md:py-0 md:h-screen w-full text-center  flex flex-col justify-center items-center">
      <motion.div>
        <h2 className={`text-3xl capitalize font-bold mb-6 font-zilla `}>
          <span
            className={`text-red-500 text-4xl ${locale == "en" ? "hidden" : ""
              }`}
          >
            .
          </span>
          {t("sign in to your account")}
          <span
            className={`text-red-500 text-4xl ${locale == "ar" ? "hidden" : ""
              }`}
          >
            .
          </span>
        </h2>
        <div className="flex justify-center space-x-4 mb-6">
          {/* <button>
            <FaFacebook className="text-4xl" />
          </button> */}
          <button onClick={handleLoginWithGoogle}>
            <FaGoogle className="text-4xl" />
          </button>
        </div>
        <p className="text-center font-mont font-medium text-slate-500 mb-6">
          {t("or")}
        </p>
        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("email")} {...field} className="text-secondary w-full p-3 py-4 pl-10 border outline-none border-gray-300 rounded-sm mt-1 bg-[#E8E8E8]" />
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
                  <FormControl>
                    <Input type="password" placeholder={t("password")} {...field} className=" text-secondary w-full p-3 py-4 pl-10 border outline-none border-gray-300 rounded-sm mt-1 bg-foreground" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-right mb-6 ">{t("forgot")}</p>
            <Button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 font-bold font-mont border-2 border-red-500 hover:scale-90 hover:bg-white transition-all duration-300 hover:text-red-500"
            >
              {t("login")}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default Login;
