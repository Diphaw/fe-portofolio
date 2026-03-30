// import Image from "next/image";

import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <main className="space-y-20">
        <Header/>
        <Hero />
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        /> */}
      </main>
    </div>
  );
}
