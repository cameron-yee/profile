import React from "react";

import { MainLayout } from "../layouts";


const Page = (): JSX.Element => {
  return (
    <MainLayout seoTitle="Projects">
      <div>
        <p className="max-w-xl">Recently I've been working in Gatsby, NextJS, and Golang. More information about these projects will be available soon.</p>
      </div>
    </MainLayout>
  );
};

export default Page;

