import { useState } from "react";

export default function SearchBar({ value, onChange, suggestions = [], onSelect }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
    setDropdownVisible(true);
  };

  const handleSelect = (title) => {
    onSelect(title);
    setDropdownVisible(false);
  };

  return (
    <div className="relative w-full md:w-2/3 mx-auto">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Search games..."
        className="w-full px-6 py-4 text-lg bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        onBlur={() => setTimeout(() => setDropdownVisible(false), 200)}
      />
      {isDropdownVisible && suggestions?.length > 0 && (
        <div className="absolute z-10 bg-gray-900 border border-gray-700 rounded-lg mt-2 w-full max-h-60 overflow-auto shadow-lg">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSelect(suggestion)}
              className="px-4 py-3 text-gray-300 hover:bg-purple-500 hover:text-white cursor-pointer"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
