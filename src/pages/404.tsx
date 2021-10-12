import React from "react";
import { Link } from "gatsby";

import { MainLayout } from "../layouts";

import { Button } from "../components";


const Page = (): JSX.Element => {
  return (
    <MainLayout seoTitle="404 Not Found">
      <div>
        <p className="max-w-xl">This page doesn't exist.</p>
        <Link to="/">
          <Button className="mt-8">
            Return Home
          </Button>
        </Link>
      </div>
    </MainLayout>
  );
};

export default Page;
