"use client";
import { useContext, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import Login from "./Login";
import SignUp from "./Signup";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const { user } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  const t = useTranslations("login");
  const router = useRouter();

  const locale = useLocale(); // Get the current locale
  const transition = { duration: 2 }; // Slow down animation
  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [router, user])
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-background w-full rtl-component`}
    >
      <motion.div className="w-full h-screen grid grid-rows-2 md:grid md:grid-cols-2">
        <AnimatePresence>
          {isLogin ? (
            <>
              <motion.div
                key="login-form"
                initial={{ opacity: 20, x: -800 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 20, x: -800 }}
                transition={transition} // Apply transition
                className="ltr-component bg-background  md:h-screen"
              >
                <Login />
              </motion.div>
              <motion.div
                key="welcome-back"
                initial={{ opacity: 20, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 20, x: 800 }}
                transition={transition} // Apply transition
                className="ltr-component min-h-[50%] md:min-h-screen flex flex-col  items-center justify-center p-8 bg-gradient-to-r from-red-500 to-purple-500 text-white"
              >
                <h2 className="text-3xl font-bold mb-6">{t("welcome back")}</h2>
                <p className="mb-6 text-center">{t("please sign")}</p>
                <button
                  onClick={() => setIsLogin(false)}
                  className="bg-transparent border border-white py-2 px-4"
                >
                  {t("sign up")}
                </button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                key="hello-friend"
                initial={{ opacity: 20, x: -800 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 20, x: -800 }}
                transition={transition} // Apply transition
                className="ltr-component min-h-[50%] md:min-h-screen flex flex-col  items-center justify-center p-8 bg-gradient-to-r from-red-500 to-purple-500 text-white"
              >
                <h2 className="text-3xl font-bold mb-6">{t("hello friend")}</h2>
                <p className="mb-6 text-center">{t("provide")}</p>
                <button
                  onClick={() => setIsLogin(true)}
                  className="bg-transparent border border-white py-2 px-4"
                >
                  {t("login")}
                </button>
              </motion.div>
              <motion.div
                key="signup-form"
                initial={{ opacity: 20, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 20, x: 800 }}
                transition={transition} // Apply transition
                className="ltr-component bg-background md:h-screen"
              >
                <SignUp />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AuthForm;
