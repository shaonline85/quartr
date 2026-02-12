import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-slate-900 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          aria-label="Go to home page"
        >
          Quartr
        </Link>

        <nav aria-label="Main" className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Home
          </Link>
          <a
            href="#trending-companies"
            className="rounded-md px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Jump to trending companies section"
          >
            Trending
          </a>
        </nav>
      </div>
    </header>
  );
};


