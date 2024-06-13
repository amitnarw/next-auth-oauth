import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 items-center justify-between font-mono text-sm flex flex-col gap-10">
        <p className="text-lg fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Home page
        </p>
        <Link
          href="/sign-in"
          className="bg-white/10 p-2 px-5 rounded-xl hover:bg-white hover:text-black"
        >
          Click to go to sign in page
        </Link>
      </div>
    </main>
  );
}
