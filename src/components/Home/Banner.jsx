import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div className="w-full h-[70vh] md:h-[90vh] mt-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        speed={900}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1502877338535-766e1452684a')",
            }}
          >
            <div className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] px-4">
              <h2 className="text-4xl md:text-6xl font-extrabold">
                Drive Your Dream
              </h2>
              <p className="mt-4 md:text-xl font-medium">
                Premium luxury cars for every ride.
              </p>
              <a
                href="/cars"
                className="inline-block mt-6 px-8 py-3 bg-[#e21266] rounded-lg font-semibold"
              >
                Browse Cars
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
            }}
          >
            <div className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] px-4">
              <h2 className="text-4xl md:text-6xl font-extrabold">
                Affordable Rentals
              </h2>
              <p className="mt-4 md:text-xl font-medium">
                Best rates & reliable service guaranteed.
              </p>
              <a
                href="/offers"
                className="inline-block mt-6 px-8 py-3 bg-[#e21266] rounded-lg font-semibold"
              >
                View Offers
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center text-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d')",
            }}
          >
            <div className="text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] px-4">
              <h2 className="text-4xl md:text-6xl font-extrabold">
                Book in Seconds
              </h2>
              <p className="mt-4 md:text-xl font-medium">
                Quick booking & instant confirmation!
              </p>
              <a
                href="/booking"
                className="inline-block mt-6 px-8 py-3 bg-[#e21266] rounded-lg font-semibold"
              >
                Rent Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
