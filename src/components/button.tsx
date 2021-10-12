import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";


export function Button({ children, className, ...rest }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): JSX.Element {
  const initialClasses: string = "bg-green w-48 text-white px-8 py-3 outline-none ring-green ring-offset-2 focus:ring-2 hover:ring-2 rounded-2xl font-links text-xl tracking-narrow font-bold shadow transition-all duration-200 ease-in-out";

  const classList: string = className
    ? `${initialClasses} ${className}`
    : initialClasses;

  return (
    <button
      className={classList}
      {...rest}
    >
      {children}
    </button>
  );
};
