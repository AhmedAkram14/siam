import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { CiLock } from "react-icons/ci";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Login = () => {
  const t = useTranslations("login");
  const locale = useLocale();

  return (
    <div className="py-6 md:py-0 md:h-screen w-full text-center  flex flex-col justify-center items-center">
      <motion.div>
        <h2 className={`text-3xl capitalize font-bold mb-6 font-zilla `}>
          <span
            className={`text-red-500 text-4xl ${
              locale == "en" ? "hidden" : ""
            }`}
          >
            .
          </span>
          {t("sign in to your account")}
          <span
            className={`text-red-500 text-4xl ${
              locale == "ar" ? "hidden" : ""
            }`}
          >
            .
          </span>
        </h2>
        <div className="flex justify-center space-x-4 mb-6">
          <button>
            <FaFacebook className="text-4xl" />
          </button>
          <button>
            <FaGoogle className="text-4xl" />
          </button>
        </div>
        <p className="text-center font-mont font-medium text-slate-500 mb-6">
          {t("or")}
        </p>
        <form className="w-full">
          <div className="mb-4 relative">
            <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              placeholder={t("email")}
              className="w-full p-3 py-4 pl-10 border outline-none border-gray-300 rounded-sm mt-1 bg-[#E8E8E8]"
            />
          </div>
          <div className="mb-4 relative">
            <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />

            <input
              type="password"
              placeholder={t("password")}
              className="w-full p-3 py-4 pl-10 border outline-none border-gray-300 rounded-sm mt-1 bg-[#E8E8E8]"
            />
          </div>
          <p className="text-right mb-6 ">{t("forgot")}</p>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 font-bold font-mont border-2 border-red-500 hover:scale-90 hover:bg-white transition-all duration-300 hover:text-red-500"
          >
            {t("login")}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
