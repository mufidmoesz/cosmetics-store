export default function Footer() {
  return (
    <footer className="w-full bg-white py-6 border-t">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} ABCCosmetics. All rights reserved.
        </p>

      </div>
    </footer>
  );
}