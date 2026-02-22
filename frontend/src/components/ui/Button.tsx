import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { type = 'button', children, disabled = false } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      className='bg-primary hover:bg-primary-dark disabled:opacity-50 py-2 rounded-lg w-full text-white transition-colors duration-300 cursor-pointer'
    >
      {children}
    </button>
  );
};

export default Button;
