import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      {/* Animated Warning Icon */}
      <div className="mb-4 text-5xl animate-bounce">🚧</div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-[#DEFD35]">
        Page Under Construction
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-400 mt-3 max-w-lg">
        This page is currently being built. Check back soon for updates.
      </p>

      {/* Return Home Button */}
      <Link 
        href="/" 
        className="mt-6 px-6 py-3 bg-[#DEFD35] text-black text-lg font-semibold rounded-full relative overflow-hidden group transition-all"
      >
        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
          Return Home
        </span>
        <span className="absolute left-0 right-0 top-1/2 h-0 bg-black group-hover:h-full group-hover:top-0 transition-all duration-300 ease-out z-0"></span>
      </Link>
    </div>
  );
};

export default NotFound;
