import React from 'react';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;  // Optional placeholder
  className?: string;    // Additional custom classes
  required?: boolean;    // Optional required field
}

const Input: React.FC<InputProps> = ({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  placeholder, 
  className, 
  required 
}) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
      />
    </div>
  );
};

export default Input;
