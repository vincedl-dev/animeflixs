import ScrollbarSwiper from "../Swiper/ScrollbarSwiper";

export default async function Reviews() {
  const data = await fetch("https://api.jikan.moe/v4/reviews/anime?limit=15");
  const reviews = await data.json();
  console.log(reviews);
  return (
    <div className="container my-2">
      {/* <Reviews reviews={reviews} /> */}
      <ScrollbarSwiper reviews={reviews} title="Anime Reveiws" />
    </div>
  );
}
