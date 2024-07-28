"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import ReactStars from "react-rating-stars-component";

export default function ScrollbarSwiper({ reviews, title }) {
  console.log(reviews.data);
  return (
    <div>
      <div className="border-l-indigo-500 border-l-4  mb-3">
        <h1 className="ml-2 text-[20px] mb-3">{title}</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {reviews.data.map((review) => {
          return (
            <SwiperSlide key={review.mal_id}>
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(142, 142, 142, .1), rgba(251, 251, 251, 0))",
                }}
                className="rounded-[10px] p-4"
              >
                <div className="review-header flex items-center gap-2 mb-2">
                  <img
                    src={review.user.images.jpg.image_url}
                    className="w-10 h-10 rounded-full"
                  />
                  <span>{review.user.username}</span>
                </div>
                <div className="review-body min-h-[75px] overflow-hidden h-[75px] text-ellipsis line-clamp-3 w-[350px] mb-2">
                  <p>{review.review}</p>
                </div>
                <div className="review-anime">{review.entry.title}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
