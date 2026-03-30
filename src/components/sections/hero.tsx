"use client";

import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="px-20">
        <h1>Hello, i&apos;m Dipha Wiguna</h1>
        <p>This is the hero section of my portfolio website.</p>

        <Button onClick={() => router.push("/main")} color="green">
          explore
        </Button>
      </div>
    </section>
  );
}
