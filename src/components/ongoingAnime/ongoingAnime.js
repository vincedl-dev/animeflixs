import { getRandomAnime } from "@/services/api/anime";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import FadeSwiper from "../Swiper/FadeSwiper";
import HorizontalSwiper from "../Swiper/HorizontalSwiper";
export default async function OngoingAnime() {
  const data = await fetch("https://api.jikan.moe/v4/seasons/now");
  const ongoing = await data.json();
  console.log(ongoing);

  return (
    <div className="container my-7">
      <div className=" border-l-indigo-500 border-l-4  mb-3">
        <h1 className="ml-2 text-[20px] mb-3">Ongoing Anime</h1>
      </div>
      {/* <img src={randomAnime?.data?.data?.images?.jpg.large_image_url} /> */}
      {/* <FadeSwiper upcoming={upcoming} /> */}
      <HorizontalSwiper upcoming={ongoing} />
    </div>
  );
}
