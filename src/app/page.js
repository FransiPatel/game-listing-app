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

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (game) =>
          game.title && // Ensure the game has a title
          game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by platform
    if (sortPlatform) {
      filtered = filtered.filter((game) => game.platform === sortPlatform);
    }

    setFilteredGames(filtered);
  }, [searchTerm, sortPlatform, games]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SortDropdown
          platforms={[...new Set(games.map((game) => game.platform))]}
          onChange={setSortPlatform}
        />
      </div>
      <GameList games={filteredGames} />
    </div>
  );
}
