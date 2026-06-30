import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex items-center gap-4 mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-sm font-mono tracking-[3px] text-zinc-500">PRODUCTION</span>
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl font-semibold leading-none tracking-tighter text-black dark:text-zinc-50">
            Deployed to<br />Production
          </h1>
          <p className="max-w-md text-xl leading-8 text-zinc-600 dark:text-zinc-400">
            This Next.js application is production-ready and optimized for Vercel.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              ✓ Static optimization
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              ✓ Edge-ready
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400">
              ✓ TypeScript
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-8 w-full sm:w-auto">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-8 text-white transition-all hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-200 md:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy to Vercel
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-auto"
            href="https://nextjs.org/docs/app/building-your-application/deploying"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
      
      <footer className="text-center py-6 text-xs text-zinc-400">
        Ready for production • Built with Next.js 16 • Deployed on Vercel
      </footer>
    </div>
  );
}
