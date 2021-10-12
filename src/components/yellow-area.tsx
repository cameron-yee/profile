import React, { HTMLProps } from "react";

export function YellowArea({ children, className, ...rest }: HTMLProps<HTMLDivElement>): JSX.Element {
  const classList: string = className
    ? `bg-yellow text-navy ${className}`
    : "bg-yellow text-navy";

  return (
    <div className={classList} {...rest}>
      {children}
    </div>
  );
};
