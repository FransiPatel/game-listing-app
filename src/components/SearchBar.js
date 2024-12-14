export default function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search games..."
        className="w-full md:w-1/3 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    );
  }
  