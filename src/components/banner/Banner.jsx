import { getRandomAnime } from "@/services/api/anime";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import FadeSwiper from "../Swiper/FadeSwiper";
export default async function Banner() {
  const sample = await fetch(
    "https://api.jikan.moe/v4/seasons/upcoming?limit=10"
  );
  const upcoming = await sample.json();

  return (
    <div>
      {/* <img src={randomAnime?.data?.data?.images?.jpg.large_image_url} /> */}
      <FadeSwiper upcoming={upcoming} />
    </div>
  );
}
