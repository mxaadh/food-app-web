import React from "react";

const shapes = {
  round: "rounded",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs text-blue_gray-800",
    gray_50_02: "bg-gray-50_02 shadow-xs text-blue_gray-800",
    gray_100: "bg-gray-100 shadow-xs text-blue_gray-800",
    gray_200: "bg-gray-200 shadow-xs text-blue_gray-800",
    blue_gray_100: "bg-blue_gray-100 shadow-xs text-blue_gray-800",
    blue_gray_300: "bg-blue_gray-300 shadow-xs text-blue_gray-800",
    gray_600: "bg-gray-600 shadow-xs text-blue_gray-800",
    blue_gray_700: "bg-blue_gray-700 shadow-xs text-blue_gray-800",
    blue_gray_800: "bg-blue_gray-800 shadow-xs text-blue_gray-800",
    blue_gray_900: "bg-blue_gray-900 shadow-xs text-blue_gray-800",
    gray_900: "bg-gray-900 shadow-xs text-blue_gray-800",
    red_50_01: "bg-red-50_01 shadow-xs text-blue_gray-800",
    deep_orange_50: "bg-deep_orange-50 shadow-xs text-blue_gray-800",
    red_100: "bg-red-100 shadow-xs text-blue_gray-800",
    red_200: "bg-red-200 shadow-xs text-blue_gray-800",
    red_300: "bg-red-300 shadow-xs text-blue_gray-800",
    red_500: "bg-red-500 shadow-xs text-blue_gray-800",
    red_700: "bg-red-700 shadow-xs text-blue_gray-800",
    red_900_01: "bg-red-900_01 shadow-xs text-blue_gray-800",
    red_900: "bg-red-900 shadow-xs text-blue_gray-800",
    pink_900_01: "bg-pink-900_01 shadow-xs text-blue_gray-800",
    yellow_50: "bg-yellow-50 shadow-xs text-blue_gray-800",
    yellow_100: "bg-yellow-100 shadow-xs text-blue_gray-800",
    yellow_A100: "bg-yellow-A100 shadow-xs text-blue_gray-800",
    amber_A200: "bg-amber-A200 shadow-xs text-blue_gray-800",
    amber_500: "bg-amber-500 shadow-xs text-blue_gray-800",
    amber_600: "bg-amber-600 shadow-xs text-blue_gray-800",
    orange_700: "bg-orange-700 shadow-xs text-blue_gray-800",
    lime_900_02: "bg-lime-900_02 shadow-xs text-blue_gray-800",
    lime_900_01: "bg-lime-900_01 shadow-xs text-blue_gray-800",
    lime_900: "bg-lime-900 shadow-xs text-blue_gray-800",
    gray_100_01: "bg-gray-100_01 shadow-xs text-blue_gray-800",
    green_50: "bg-green-50 shadow-xs text-blue_gray-800",
    green_A100: "bg-green-A100 shadow-xs text-blue_gray-800",
    green_A200: "bg-green-A200 shadow-xs text-blue_gray-800",
    green_400: "bg-green-400 shadow-xs text-blue_gray-800",
    green_A700: "bg-green-A700 shadow-xs text-blue_gray-800",
    green_700: "bg-green-700 shadow-xs text-blue_gray-800",
    green_800: "bg-green-800 shadow-xs text-blue_gray-800",
    green_900_01: "bg-green-900_01 shadow-xs text-blue_gray-800",
    green_900: "bg-green-900 shadow-xs text-blue_gray-800",
    gray_100_02: "bg-gray-100_02 shadow-xs text-blue_gray-800",
    blue_50: "bg-blue-50 shadow-xs text-blue_gray-800",
    blue_100_01: "bg-blue-100_01 shadow-xs text-blue_gray-800",
    blue_200_01: "bg-blue-200_01 shadow-xs text-blue_gray-800",
    blue_300: "bg-blue-300 shadow-xs text-blue_gray-800",
    blue_A200: "bg-blue-A200 shadow-xs text-blue_gray-800",
    blue_A700: "bg-blue-A700 shadow-xs text-blue_gray-800",
    blue_800: "bg-blue-800 shadow-xs text-blue_gray-800",
    blue_900: "bg-blue-900 shadow-xs text-blue_gray-800",
    indigo_800_01: "bg-indigo-800_01 shadow-xs text-blue_gray-800",
    blue_50_02: "bg-blue-50_02 shadow-xs text-blue_gray-800",
    blue_50_01: "bg-blue-50_01 shadow-xs text-blue_gray-800",
    blue_100: "bg-blue-100 shadow-xs text-blue_gray-800",
    blue_200: "bg-blue-200 shadow-xs text-blue_gray-800",
    indigo_A100: "bg-indigo-A100 shadow-xs text-blue_gray-800",
    indigo_A200: "bg-indigo-A200 shadow-xs text-blue_gray-800",
    indigo_A400: "bg-indigo-A400 shadow-xs text-blue_gray-800",
    indigo_500: "bg-indigo-500 shadow-xs text-blue_gray-800",
    deep_purple_800: "bg-deep_purple-800 shadow-xs text-blue_gray-800",
    indigo_800: "bg-indigo-800 shadow-xs text-blue_gray-800",
    gray_50_01: "bg-purple-100 shadow-xs text-blue_gray-800",
    purple_50: "bg-purple-50 shadow-xs text-blue_gray-800",
    deep_purple_50: "bg-deep_purple-50 shadow-xs text-blue_gray-800",
    purple_100: "bg-purple-100 shadow-xs text-blue_gray-800",
    deep_purple_A100: "bg-deep_purple-A100 shadow-xs text-blue_gray-800",
    deep_purple_A200_01: "bg-deep_purple-A200_01 shadow-xs text-blue_gray-800",
    deep_purple_A200: "bg-deep_purple-A200 shadow-xs text-blue_gray-800",
    purple_600: "bg-purple-600 shadow-xs text-blue_gray-800",
    purple_800: "bg-purple-800 shadow-xs text-blue_gray-800",
    purple_900: "bg-purple-900 shadow-xs text-blue_gray-800",
    gray_50: "bg-gray-50 shadow-xs text-blue_gray-800",
    red_50: "bg-red-50 shadow-xs text-blue_gray-800",
    pink_50: "bg-pink-50 shadow-xs text-blue_gray-800",
    pink_100: "bg-pink-100 shadow-xs text-blue_gray-800",
    pink_A100: "bg-pink-A100 shadow-xs text-blue_gray-800",
    pink_300: "bg-pink-300 shadow-xs text-blue_gray-800",
    pink_500: "bg-pink-500 shadow-xs text-blue_gray-800",
    pink_700: "bg-pink-700 shadow-xs text-blue_gray-800",
    pink_800: "bg-pink-800 shadow-xs text-blue_gray-800",
    pink_900: "bg-pink-900 shadow-xs text-blue_gray-800",
  },
} as const;
const sizes = {
  xs: "h-[50px] w-[50px] pl-4 pr-px text-xs",
} as const;

type CheckboxProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    label: string;
    id: string;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    onClick: () => void;
  }>;
const CheckBox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,
      shape = "round",
      variant = "fill",
      size = "xs",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div className={className + " flex items-center justify-center gap-[5px] cursor-pointer"}>
          <input
            className={` ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

export { CheckBox };
