import React, { HTMLProps } from "react";

import {
  Footer,
  Header,
  SEO,
  SEOProps,
} from "../components";


interface LayoutProps extends HTMLProps<HTMLDivElement>, SEOProps {};

export function SuccessLayout({ children, seoTitle, seoDescription }: LayoutProps): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-tan text-navy">
      <SEO seoTitle={seoTitle} seoDescription={seoDescription} />
      <Header />
      <main className="p-10 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default SuccessLayout;

