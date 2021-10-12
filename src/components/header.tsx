import React from "react";
import { Link, GatsbyLinkProps } from "gatsby";


function NavLink({ children, to, ...rest }: Omit<GatsbyLinkProps<Record<string, unknown>>, "ref">): JSX.Element {
  const initialClasses: string = "text-red font-bold text-xl outline-none border-b-2 border-transparent hover:border-red focus:border-red transition-all duration-200 ease-in";
  const activeClassName: string = `${initialClasses} line-through cursor-default pointer-events-none`;

  // TODO: need to add tabIndex={-1} if the link is active
  return (
    <Link to={to} {...rest} activeClassName={activeClassName} className={initialClasses}>
      {children}
    </Link>
  );
};

export function Header(): JSX.Element {
  return (
    <div className="flex flex-col items-center md:items-auto md:flex-row px-5 pt-10 md:px-10 lg:px-16 xl:px-24">
      <Link to="/" className="outline-none border-b-2 border-transparent hover:border-navy focus:border-navy transition-all duration-200 ease-in">
        <h1 className="text-4xl font-bold">Cameron Yee</h1>
      </Link>
      <nav className="flex flex-col mt-5 md:mt-0 md:flex-row md:space-x-5 md:ml-auto">
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/what-i-use">
          What I use
        </NavLink>
      </nav>
    </div>
  );
};
