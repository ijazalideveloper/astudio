import React from "react";

interface DropdownProps {
  id: string;
  label: string;
  options: (number | string)[];
  value: number | string;
  onChange: (value: number | string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      {label && (
        <label htmlFor="pageSize" className="text-sm font-medium">
          {label}
        </label>
      )}
      <select
        id={id}
        className="input"
        value={value}
        onChange={(e) =>
          onChange(
            isNaN(Number(e.target.value))
              ? e.target.value
              : Number(e.target.value)
          )
        }
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
