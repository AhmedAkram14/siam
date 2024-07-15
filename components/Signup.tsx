import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { CiLock } from "react-icons/ci";
import { FaFacebook, FaGoogle, FaUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { z } from "zod";
import { useToast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithGoogle } from "@/firebase/auth/signin";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import signUp from "@/firebase/auth/signup";
import { ImSpinner2 } from "react-icons/im";

const SignUp = () => {
  const t = useTranslations("login");
  const formSchema = z.object({
    name: z.string().min(2, t("userNameError")),
    email: z.string().email(t("emailError")),
    password: z.string().min(6, t("passwordError")),
  })
  const router = useRouter();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }

  })
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { error } = await signUp(values.email, values.password, values.name);
      if (error) {
        toast({
          title: "Error",
          description: error?.message || t("signUpError")
        })
      }
      else {
        router.push("/")
      }
    }
    catch (error) {
      toast({
        title: "Error",
        description: t("signUpError"),
      })
    }
  }
  const handleSignUpWithGoogle = async () => {
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: t("signUpError"),
      })

    }
  }
  const locale = useLocale();
  return (
    <div className="min-h-[50%] md:min-h-screen py-6 md:py-0 w-full text-center  flex flex-col justify-center items-center">
      <motion.div>
        <h2 className={`text-3xl capitalize font-bold mb-6 font-zilla `}>
          <span
            className={`text-red-500 text-4xl ${locale == "en" ? "hidden" : ""
              }`}
          >
            .
          </span>
          {t("register")}
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
          <button>
            <FaGoogle className="text-4xl" onClick={handleSignUpWithGoogle} />
          </button>
        </div>
        <p className="text-center font-mont font-medium text-slate-500 mb-6">
          {t("or")}
        </p>
        <Form {...form}>
          <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("username")} {...field} className="text-secondary w-full p-3 py-4 pl-10 border outline-none border-gray-300 rounded-sm mt-1 bg-[#E8E8E8]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button
              type="submit"
              className=" mt-2 bg-red-500 text-white px-6 py-3 font-bold font-mont border-2 border-red-500 hover:scale-90 hover:bg-white transition-all duration-300 hover:text-red-500 "
              disabled={form.formState.isSubmitting}
            >

              {!form.formState.isSubmitting ? t("sign up") : <ImSpinner2 className='animate-spin' />}
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
};

export default SignUp;
