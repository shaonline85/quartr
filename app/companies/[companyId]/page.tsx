import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";

import { getCompanyById } from "@/lib/companies/getCompanyById";
import { getTrendingCompanies } from "@/lib/companies/getTrendingCompanies";

type CompanyDetailsPageProps = {
  params: {
    companyId: string;
  };
};

export const generateStaticParams = async () => {
  const companies = await getTrendingCompanies();
  return companies.map((company) => ({
    companyId: String(company.companyId),
  }));
};

export const generateMetadata = async ({
  params,
}: CompanyDetailsPageProps): Promise<Metadata> => {
  const companyId = Number(params.companyId);
  if (!Number.isFinite(companyId)) {
    return { title: "Company", description: "Company details page." } satisfies Metadata;
  }

  const company = await getCompanyById(companyId);
  if (!company) {
    return { title: "Company", description: "Company details page." } satisfies Metadata;
  }

  return {
    title: company.displayName,
    description: company.description,
  } satisfies Metadata;
};

const CompanyDetailsPage = async ({ params }: CompanyDetailsPageProps) => {
  const companyId = Number(params.companyId);
  if (!Number.isFinite(companyId)) return notFound();

  const company = await getCompanyById(companyId);
  if (!company) return notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-medium text-slate-700 hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          aria-label="Back to home"
        >
          ← Back
        </Link>
      </div>

      <header className="flex items-start gap-4">
        <Image
          src={company.logoLightUrl}
          alt={`${company.displayName} logo`}
          width={56}
          height={56}
          className="h-14 w-14 rounded-xl bg-white object-contain"
        />

        <div className="min-w-0">
          <h1 className="truncate text-2xl font-semibold tracking-tight text-slate-900">
            {company.displayName}
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            {company.companyTicker} • {company.companyCountry}
          </p>
        </div>
      </header>

      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-slate-900">
          About
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          {company.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href={company.infoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label={`Open ${company.displayName} company info in a new tab`}
          >
            Company info
          </a>
          <a
            href={company.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label={`Open ${company.displayName} investor page in a new tab`}
          >
            Investor
          </a>
        </div>
      </section>
    </div>
  );
};

export default CompanyDetailsPage;


