import promoBg from "../assets/images/promo-bg2.png";

export default function Promo() {
  return (
    <section
      id="promos"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${promoBg})` }}
    >
      {/* Soft white overlay for readability */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 flex items-center h-full">
        
        {/* LEFT CONTENT (text) */}
        <div className="pl-10 md:pl-20 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Exclusive <span className="text-pink-600">Beauty Deals</span>
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Enjoy our special voucher and get discounts on your favorite
            beauty products. Because you deserve to glow every day.
          </p>

          {/* Voucher Box */}
          <div className="mt-6 bg-pink-100 border border-pink-300 rounded-xl px-6 py-4 inline-block shadow">
            <p className="text-sm text-gray-700">Your Beauty Voucher</p>
            <p className="text-2xl font-bold text-pink-600 tracking-wider">
              ABC-BEAUTY20
            </p>
          </div>

          {/* Email Subscribe */}
          <p className="mt-8 text-gray-700 text-md">
            Want more exclusive vouchers? Enter your email:
          </p>

          <div className="mt-3 flex items-center space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <button className="px-5 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition shadow">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}