import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Reviews() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Alicia Gomez",
      text: "ABCCosmetics completely upgraded my beauty routine. High-quality products and fast delivery!",
    },
    {
      id: 2,
      name: "Mei Ling",
      text: "The best cosmetic store I've tried. The packaging is beautiful and everything feels premium!",
    },
    {
      id: 3,
      name: "Sofia Hernandez",
      text: "Amazing promotions and great customer service! I got the voucher and saved instantly.",
    },
  ];

  return (
    <section
      id="reviews"
      className="relative h-screen w-full bg-pink-100 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-2 text-gray-700 text-lg">
            Real experiences from our beautiful community.
          </p>
        </div>

        <div className="relative">

          {/* LEFT ARROW */}
          <button
            ref={prevRef}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            ref={nextRef}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-pink-500 text-white w-10 h-10 rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            ›
          </button>

          {/* Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="rounded-2xl bg-white shadow-lg py-10 px-6"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="flex flex-col items-center text-center px-4">

                  <p className="text-gray-700 text-lg italic leading-relaxed max-w-2xl mt-2">
                    “{review.text}”
                  </p>

                  <h3 className="mt-4 text-xl font-semibold text-pink-600 mb-2">
                    — {review.name}
                  </h3>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

          <div className="bg-white shadow-md rounded-xl p-6 border">
            <p className="text-4xl font-bold text-pink-600">4.9</p>
            <p className="text-gray-700">Average Rating</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border">
            <p className="text-4xl font-bold text-pink-600">12k+</p>
            <p className="text-gray-700">Happy Customers</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 border">
            <p className="text-4xl font-bold text-pink-600">1.5k+</p>
            <p className="text-gray-700">5-Star Reviews</p>
          </div>

        </div>
      </div>
    </section>
  );
}