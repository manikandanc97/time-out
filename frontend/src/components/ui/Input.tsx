import React from 'react';

interface InputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const Input: React.FC<InputProps> = ({ type, label, value, onChange, id }) => {
  return (
    <label htmlFor={id} className='block relative w-full'>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder=' '
        className='peer bg-white px-3 pt-5 pb-2 border border-gray-300 focus:border-primary rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-full text-sm transition'
      />

      <span className='top-2 peer-focus:top-2 peer-placeholder-shown:top-3.5 left-3 absolute bg-white px-1 text-gray-500 peer-focus:text-primary peer-placeholder-shown:text-gray-400 text-sm peer-focus:text-sm peer-placeholder-shown:text-base transition-all'>
        {label}
      </span>
    </label>
  );
};

export default Input;
