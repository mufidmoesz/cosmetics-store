export default function About() {
  return (
    <section
      id="about"
      className="relative h-screen w-full bg-pink-200 flex items-center"
    >
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          About ABCCosmetics
        </h2>

        <p className="text-gray-800 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          At <span className="font-semibold text-pink-600">ABCCosmetics</span>, 
          we are dedicated to providing high-quality beauty and skincare products.
          Our mission is to empower everyone to feel confident, glamorous, and
          effortlessly beautiful — every day.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800">

          <div>
            <h3 class="text-xl font-semibold text-pink-700 mb-2">📍 Our Address</h3>
            <p>ABCCosmetics Store</p>
            <p>123 Beauty Street</p>
            <p>Glamour City, 56789</p>
            <p>Indonesia</p>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-pink-700 mb-2">📞 Contact Us</h3>
            <p>Email: support@abccosmetics.com</p>
            <p>Phone: +62 812-3456-7890</p>
            <p>Instagram: @abccosmetics</p>
            <p>Open Hours: 09.00 – 21.00</p>
          </div>

        </div>

      </div>
    </section>
  );
}