import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-white">
      
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-wide text-[#DEFD35]">
          Welcome to Rocket Air
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          Pushing boundaries with cutting-edge solutions. Explore our services to see how we can help you.
        </p>
      </div>

      {/* Services Button */}
      <Link 
        href="/services" 
        className="bg-white px-6 py-3 rounded-2xl text-black text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#DEFD35] hover:text-black hover:shadow-[0_4px_15px_rgba(222,253,53,0.4)] active:scale-95"
      >
        Services
      </Link>

      {/* Footer */}
      <p className="text-sm text-gray-500">© {new Date().getFullYear()} Rocket Air. All rights reserved.</p>
    </div>
  );
}
