import GameCard from "./GameCard";

export default function GameList({ games }) {
  if (games.length === 0) {
    return <p className="text-center text-gray-400">No games found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {games.map((game, index) => (
        <GameCard key={`${game.title}-${index}`} game={game} />
      ))}
    </div>
  );
}
