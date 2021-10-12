import React from "react";
import { Link } from "gatsby";

import { SuccessLayout } from "../layouts";

import { Button } from "../components";


const Page = (): JSX.Element => {
  return (
    <SuccessLayout seoTitle="Success">
      <div>
        <p>Your message has been sent!</p>
        <Link to="/">
          <Button className="flex justify-center mt-8">
            Return home
          </Button>
        </Link>
      </div>
    </SuccessLayout>
  );
};

export default Page;

