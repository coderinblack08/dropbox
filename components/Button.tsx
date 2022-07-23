import React from "react";

interface ButtonProps {
  color?: "blue" | "gray";
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  color = "blue",
  children,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      className={`group flex items-center gap-2 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full hover:-translate-y-1 transition hover:shadow-lg ${
        color === "gray"
          ? "bg-gray-400 text-white"
          : "bg-[#18A0FB] hover:shadow-blue-200 text-white"
      } font-bold ${className}`}
    >
      {leftIcon && (
        <span className="group-hover:-translate-x-1 transition">
          {leftIcon}
        </span>
      )}
      {children}
      {rightIcon && (
        <span className="group-hover:translate-x-1 transition">
          {rightIcon}
        </span>
      )}
    </button>
  );
};
