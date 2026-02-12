export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Quartr (dummy footer)
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://www.quartr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-700 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Open Quartr website in a new tab"
          >
            quartr.com
          </a>
          <a
            href="https://github.com/shaonline85/quartr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-slate-700 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Open GitHub in a new tab"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};


