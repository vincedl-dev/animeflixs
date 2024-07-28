import Banner from "@/components/banner/banner";
import OngoingAnime from "@/components/ongoingAnime/ongoingAnime";
import Reviews from "@/components/review/Reviews";
import Link from "next/link";

export default async function Home() {
  // console.log(upcoming);

  return (
    <div>
      <Banner />
      <OngoingAnime />
      <Reviews />
      <p>sample texr</p>
    </div>
  );
}
