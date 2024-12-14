export default function GameCard({ game }) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-500/50 ">
        <div className="p-4">
          <h2 className="text-xl font-bold text-purple-400 mb-2">{game.title}</h2>
          <p className="text-sm text-gray-400">
            <strong>Platform:</strong> {game.platform}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Genre:</strong> {game.genre}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Score:</strong> {game.score}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Editor's Choice:</strong>{" "}
            {game.editors_choice === "Y" ? "Yes" : "No"}
          </p>
        </div>
      </div>
    );
  }
  