"use client";

import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import GameList from "../components/GameList";
import { fetchGames } from "../lib/api";

export default function Home() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortPlatform, setSortPlatform] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getGames() {
      const data = await fetchGames();
      setGames(data);
      setFilteredGames(data);
    }
    getGames();
  }, []);

  useEffect(() => {
    let filtered = games;

    // Filter games by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (game) =>
          game.title &&
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Generate autocomplete suggestions
      const newSuggestions = games
        .map((game) => game.title)
        .filter((title) => title?.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 10); // Limit to 10 suggestions
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }

    // Filter games by platform
    if (sortPlatform) {
      filtered = filtered.filter((game) => game.platform === sortPlatform);
    }

    setFilteredGames(filtered);
  }, [searchTerm, sortPlatform, games]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          suggestions={suggestions}
          onSelect={(title) => setSearchTerm(title)}
        />
        <SortDropdown
          platforms={[...new Set(games.map((game) => game.platform))]}
          onChange={setSortPlatform}
        />
      </div>
      <GameList games={filteredGames} />
    </div>
  );
}
