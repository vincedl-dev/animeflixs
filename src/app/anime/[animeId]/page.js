import { Metadata } from "next";

export async function generateMetadata({ params }) {
  return {
    title: `Anime ${params.animeId}`,
  };
}
const AnimeDetails = ({ params }) => {
  return <h1>Anime Details {params.animeId}</h1>;
};

export default AnimeDetails;
