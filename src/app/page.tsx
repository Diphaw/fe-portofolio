// import Image from "next/image";

import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black ">
        <Hero />
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
    </div>
  );
}
