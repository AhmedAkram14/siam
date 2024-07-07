import '../../globals.css';

import React from 'react'; // Import React explicitly

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import Header from '@/components/Header';
import { AuthContextProvider } from '@/context/AuthContext';
import { NextIntlClientProvider } from 'next-intl';


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
  const messages = await getMessages();

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
    <NextIntlClientProvider messages={messages}>
      <AuthContextProvider>

        <Header locale={locale} />
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
    </NextIntlClientProvider>


    //   {/* </body>
    // </html> */}
  );
}
