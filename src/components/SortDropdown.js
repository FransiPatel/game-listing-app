export default function SortDropdown({ platforms, onChange }) {
    return (
      <select
        onChange={(e) => onChange(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">All Platforms</option>
        {platforms.map((platform, index) => (
          <option key={`${platform}-${index}`} value={platform}>
            {platform}
          </option>
        ))}
      </select>
    );
  }
  