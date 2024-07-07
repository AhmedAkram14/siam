import '../../globals.css';

import React from 'react'; // Import React explicitly

import { unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import { AuthContextProvider } from '@/context/AuthContext';

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
  const direction = locale === "ar" ? "rtl" : "ltr";
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
      <html lang={locale}>
        <head>
          <style>{`body { direction: ${direction}; }`}</style>
          <style>{`${inter.style}`}</style>
          <style>{`
          .ltr-component {
            direction: ltr !important; /* Force ltr direction */
            /* Add any other specific styles */
          }
        `}</style>
        </head>
        <body>
          <Header />
          <main>
            {React.Children.map(children, (child) =>
              React.isValidElement(child)
                ? React.cloneElement(child as React.ReactElement, {
                    className: `${
                      child.props.className ? child.props.className + " " : ""
                    } ltr-component`,
                  })
                : child
            )}
          </main>
        </body>
      </html>
    </AuthContextProvider>

    //   {/* </body>
    // </html> */}
  );
}
