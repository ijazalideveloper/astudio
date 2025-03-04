import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-bold mb-[15px]">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className="w-full border border-gray-300 p-2 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
