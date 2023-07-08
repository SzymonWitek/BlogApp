import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

function Input({ className, ...restProps }: InputProps) {
  return (
    <input
      className={`bg-gray-500 px-5 py-2 rounded-3xl  border-2 border-gray-600 ${className}`}
      {...restProps}
    />
  );
}

export default Input;
