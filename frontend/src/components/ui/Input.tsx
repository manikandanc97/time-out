import React from "react";

interface InputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  containerClassName?: string;
  inputClassName?: string;
  rightElement?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  id,
  containerClassName = "",
  inputClassName = "",
  rightElement,
}) => {
  return (
    <div className={`relative w-full ${containerClassName}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={`${label}`}
        className={`peer block w-full rounded-md border border-gray-300 bg-transparent px-3 pt-2 pb-2 text-sm text-gray-900 outline-none transition-all duration-150 ease-out focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-0 ${inputClassName}`}
      />
      
      {rightElement ? (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {rightElement}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
