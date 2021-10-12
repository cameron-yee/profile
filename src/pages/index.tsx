import React from "react";

import { MainLayout } from "../layouts";

import { Button } from "../components";

import Download from "../assets/download.svg";


const Page = (): JSX.Element => {
  return (
    <MainLayout seoTitle="Home">
      <div>
        <p className="max-w-xl"><span className="font-bold">Welcome!</span> My name is Cameron. I'm a software developer from Colorado Springs, CO. For the last 4 years, I've been working on various React, Golang, Vue, and Angular projects. I have a passion for developer experience, backend microservices, and React patterns. In my free time, I mountain bike, read fantasy books, attend a Bible study, and nerd out about coffee.</p>
        <a href="/files/resume.pdf" target="_blank">
          <Button className="flex justify-center mt-8">
            <Download /><span className="ml-2">R&eacute;sum&eacute;</span>
          </Button>
        </a>
      </div>
    </MainLayout>
  );
};

export default Page;

