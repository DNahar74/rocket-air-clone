import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/services" className="bg-white px-4 py-2 rounded-2xl text-black hover:shadow-4xl hover:shadow-emerald-400">
        Services
      </Link>
    </div>
  );
}
