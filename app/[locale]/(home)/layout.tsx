
import React from "react"; // Import React explicitly

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import { AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";
import { unstable_setRequestLocale } from 'next-intl/server';
import { AuthContextProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });



interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function Layout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  // Determine text direction based on locale
  // const direction = locale === "ar" ? "rtl" : "ltr";
  unstable_setRequestLocale(locale);

  return (
    // // <html lang={locale}>
    // //   <head>
    // //     <style>{`body { direction: ${direction}; }`}</style>
    // //     <style>{`${inter.style}`}</style>
    // //     <style>{`
    // //       .ltr-component {
    // //         direction: ltr !important; /* Force ltr direction */
    // //         /* Add any other specific styles */
    // //       }
    // //     `}</style>
    // //   </head>
    //   {/* <body> */}
    <AuthContextProvider>

      <Header />
      <main>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement, {
              className: `${child.props.className ? child.props.className + " " : ""
                } ltr-component`,
            })
            : child
        )}
      </main>
    </AuthContextProvider>

    //   {/* </body>
    // </html> */}
  );
}
