"use client";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";

import Login from "./Login";
import SignUp from "./Signup";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const locale = useLocale(); // Get the current locale
  const transition = { duration: 2 }; // Slow down animation

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-100 w-full rtl-component`}
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
                className="ltr-component bg-white  md:h-screen"
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
                <h2 className="text-3xl font-bold mb-6">Welcome Back!</h2>
                <p className="mb-6">
                  Please sign in to your account with the given details to
                  continue.
                </p>
                <button
                  onClick={() => setIsLogin(false)}
                  className="bg-transparent border border-white py-2 px-4"
                >
                  Sign Up
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
                <h2 className="text-3xl font-bold mb-6">Hello Friend!</h2>
                <p className="mb-6">
                  Please provide the information to register your account.
                </p>
                <button
                  onClick={() => setIsLogin(true)}
                  className="bg-transparent border border-white py-2 px-4"
                >
                  Sign In
                </button>
              </motion.div>
              <motion.div
                key="signup-form"
                initial={{ opacity: 20, x: 800 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 20, x: 800 }}
                transition={transition} // Apply transition
                className="ltr-component bg-white md:h-screen"
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
