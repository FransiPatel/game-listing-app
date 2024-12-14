export async function fetchGames() {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch games data");
    }
    const data = await response.json();
    
    // Filter out non-game objects (like the API rate limit object)
    return data.filter((item) => item.title);
  }
  