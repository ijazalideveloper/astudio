import React, { useState, useEffect } from "react";
import { UsersFilters as UsersFiltersType } from "../../types/user";
import Input from "../ui/Input";

interface UsersFiltersProps {
  onFilterChange: (filters: UsersFiltersType) => void;
  currentFilters: UsersFiltersType;
}

const UsersFilters: React.FC<UsersFiltersProps> = ({
  onFilterChange,
  currentFilters,
}) => {
  const [firstName, setFirstName] = useState(currentFilters.firstName || "");
  const [lastName, setLastName] = useState(currentFilters.lastName || "");
  const [age, setAge] = useState(currentFilters.age || "");
  const [gender, setGender] = useState(currentFilters.gender || "");

  // Reset other fields when one is filled
  const handleFirstNameChange = (value: string) => {
    setFirstName(value);
    if (value) {
      setLastName("");
      setAge("");
      setGender("");
    }
    updateFilters({ firstName: value, lastName: "", age: "", gender: "" });
  };

  const handleLastNameChange = (value: string) => {
    setLastName(value);
    if (value) {
      setFirstName("");
      setAge("");
      setGender("");
    }
    updateFilters({ firstName: "", lastName: value, age: "", gender: "" });
  };

  const handleAgeChange = (value: string) => {
    setAge(value);
    if (value) {
      setFirstName("");
      setLastName("");
      setGender("");
    }
    updateFilters({ firstName: "", lastName: "", age: value, gender: "" });
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
    if (value) {
      setFirstName("");
      setLastName("");
      setAge("");
    }
    updateFilters({ firstName: "", lastName: "", age: "", gender: value });
  };

  const updateFilters = (filters: UsersFiltersType) => {
    onFilterChange(filters);
  };

  useEffect(() => {
    setFirstName(currentFilters.firstName || "");
    setLastName(currentFilters.lastName || "");
    setAge(currentFilters.age || "");
    setGender(currentFilters.gender || "");
  }, [currentFilters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[15px]">
      <Input
        id="firstName"
        label="First Name"
        value={firstName}
        onChange={(value) => handleFirstNameChange(value)}
        placeholder="Filter by First Name"
      />
      <Input
        id="lastName"
        label="Last Name"
        value={lastName}
        onChange={(value) => handleLastNameChange(value)}
        placeholder="Filter by Last Name"
      />
      <Input
        id="age"
        label="Last Name"
        value={lastName}
        onChange={(value) => handleAgeChange(value)}
        placeholder="Filter by age"
      />

      <div>
        <label htmlFor="gender" className="block text-sm font-bold mb-[15px]">
          Gender
        </label>
        <select
          id="gender"
          className="w-full border border-gray-300 p-2 rounded min-h-[42px]"
          value={gender}
          onChange={(e) => handleGenderChange(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
};

export default UsersFilters;
