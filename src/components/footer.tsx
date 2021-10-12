import React from "react";


export function Footer(): JSX.Element {
  return (
    <footer className="bg-navy text-yellow flex justify-center items-center py-3">
      <p className="mx-5">Material &amp; content copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
    </footer>
  );
};

