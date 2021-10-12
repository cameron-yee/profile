import React, { HTMLProps } from "react";

import {
  ContactForm,
  Footer,
  Header,
  SEO,
  SEOProps,
  YellowArea
} from "../components";


interface LayoutProps extends HTMLProps<HTMLDivElement>, SEOProps {};

export function MainLayout({ children, seoTitle, seoDescription }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-tan text-navy">
      <SEO seoTitle={seoTitle} seoDescription={seoDescription} />
      <Header />
      <main className="px-5 py-10 md:px-10 lg:px-16 xl:px-24">
        {children}
      </main>
      <YellowArea className="px-5 py-10 md:px-10 lg:px-16 xl:px-24 flex-grow">
        <h2 className="text-3xl font-bold">Contact me</h2>
        <div className="flex justify-center w-full">
          <ContactForm />
        </div>
      </YellowArea>
      <Footer />
    </div>
  );
}

export default MainLayout;
