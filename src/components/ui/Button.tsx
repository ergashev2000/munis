import React, { FC } from "react";

// interface ButtonProps {
//   children: React.ReactNode;
//   outline?: boolean;
//   className?: string;
//   onClick?: () => void;
// }

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ outline, children, className, onClick }) => {
  return (
    <button
      className={`rounded-lg max-w-md w-full py-2.5 border font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 border-red-500 ${
        outline ? "bg-red-500" : "bg-transparent"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
