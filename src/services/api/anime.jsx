export const getRandomAnime = async () => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/random/anime`); // Fetch data asynchronously
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json(); // Parse response as JSON

    return data; // Return the fetched data
  } catch (error) {
    // console.error("Error fetching data:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
