import React from "react";

const sizes = {
  "5xl": "text-5xl font-normal leading-[150%]",
  xs: "text-xs font-medium leading-[150%]",
  lg: "text-lg font-normal leading-[150%]",
  "6xl": "text-[64px] font-normal leading-[150%]",
  s: "text-sm font-medium leading-[150%]",
  "2xl": "text-2xl font-normal leading-[150%]",
  "3xl": "text-3xl font-normal leading-[150%]",
  "4xl": "text-4xl font-normal leading-[150%]",
  xl: "text-xl font-medium leading-[150%]",
  md: "text-base font-normal leading-[150%]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-800 font-helveticaneue ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
