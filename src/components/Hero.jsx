import heroImg from '../assets/images/hero-bg.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-300/30 backdrop-blur-[2px]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight drop-shadow-sm">
          Discover Your True Beauty with  
          <span className="text-pink-600"> ABCCosmetics</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-800 drop-shadow-sm">
          Explore premium makeup, skincare, and beauty essentials crafted to 
          bring out your natural glow. Elevate your style — effortlessly.
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-6 py-2.5 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition shadow-md">
            Shop Now
          </button>
          <button className="px-6 py-2.5 bg-white text-pink-600 border border-pink-500 rounded-md hover:bg-pink-50 transition shadow">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}