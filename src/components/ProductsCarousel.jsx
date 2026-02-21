import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import product4 from "../assets/images/product-4.png";

import "swiper/css";
import "swiper/css/navigation";

export default function ProductsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = [
    { id: 1, name: "Velvet Matte Lipstick", price: "$12.99", img: product1 },
    { id: 2, name: "Radiant Glow Foundation", price: "$18.50", img: product2 },
    { id: 3, name: "Luxury Eyeshadow Palette", price: "$24.99", img: product3 },
    { id: 4, name: "Soft Touch Blush", price: "$14.25", img: product4 },
  ];

  return (
    <section id="products" className="relative h-screen w-full bg-white flex items-center">
      <div className="max-w-5xl mx-auto w-full px-6">
        
        {/* INTRO TEXT */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Best Selling Products
          </h2>

          <p className="mt-3 text-lg text-gray-600">
            Discover the beauty essentials loved by our customers.
          </p>

          <p className="mt-1 text-gray-500">
            Handpicked items curated just for you — glowing skin, bold looks, and effortless confidence.
          </p>
        </div>

        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-pink-500 text-white w-10 h-10 rounded-full shadow hover:bg-pink-600 transition"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-pink-500 text-white w-10 h-10 rounded-full shadow hover:bg-pink-600 transition"
          >
            ›
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="rounded-2xl bg-pink-50 shadow-lg py-10"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col items-center px-6">
                  
                  <img
                    src={product.img}
                    className="w-full max-w-md mt-4 h-64 object-cover rounded-xl shadow"
                  />

                  <h3 className="mt-6 text-2xl font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="text-pink-600 font-bold text-xl mt-1">
                    {product.price}
                  </p>

                  <button className="mt-6 mb-2 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition shadow">
                    Add to Cart
                  </button>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
}