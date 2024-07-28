"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

export default function HorizontalSwiper({ upcoming }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {upcoming.data.map((upcomingAnime) => {
          return (
            <SwiperSlide key={upcomingAnime.mal_id}>
              <section>
                <Link href={"#"}>
                  <main className="flex justify-between items-end relative  bg-[#141518]">
                    <div className="absolute w-full h-full xl:flex xl:items-end carousel-shadow-sm md:carousel-shadow-md xl:carousel-shadow-xl">
                      <img
                        className="hidden object-contain object-left w-auto m-4 rounded-md xl:block"
                        src={upcomingAnime.images.webp.image_url}
                        alt=""
                      />
                      <div className="flex flex-col items-start justify-end h-full px-3 pb-4">
                        <div className="w-full">
                          <span className="capitalize bg-[#ece48b] text-[#141518] text-[0.563rem] md:text-sm inline-block font-semibold px-2 rounded-sm">
                            Upcoming
                          </span>
                          <h1 className="w-3/4 overflow-hidden text-xl font-bold md:w-full text-neutral-100 xl:text-3xl whitespace-nowrap text-ellipsis">
                            {upcomingAnime.title}
                          </h1>
                          <h1 className="sm:text-xs text-sm text-[#ece48b] whitespace-nowrap overflow-hidden text-ellipsis">
                            {upcomingAnime.title_japanese}
                          </h1>
                        </div>
                        <div className="flex items-center gap-2 mt-1 mb-1">
                          {upcomingAnime.genres.map((genre) => {
                            return (
                              <span
                                key={genre.mal_id}
                                className="capitalize bg-[#444547] text-[0.563rem] text-neutral-100 md:text-sm inline-block font-semibold px-2 rounded-sm"
                              >
                                {genre.name}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <img
                        src={upcomingAnime.trailer.images.maximum_image_url}
                        className="w-full md:h-[31.25rem] sm:object-contain md:object-cover xl:object-contain object-right"
                      />
                    </div>
                  </main>
                </Link>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
