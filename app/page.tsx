import { TrendingCompanies } from "@/components/trending-companies/TrendingCompanies";
import { getTrendingCompanies } from "@/lib/companies/getTrendingCompanies";
import type { Metadata } from "next";

export const metadata = {
  title: "Home",
  description: "Trending companies on Quartr.",
} satisfies Metadata;

export default async function Home() {
  const companies = await getTrendingCompanies();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">Quartr</h1>
        <p className="mt-1 text-sm text-slate-600">
          A small list of trending companies.
        </p>
      </header>

      <TrendingCompanies companies={companies} />
    </div>
  );
}
