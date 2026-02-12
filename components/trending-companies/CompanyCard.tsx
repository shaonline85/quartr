import type { Company } from "@/lib/companies/types";
import Link from "next/link";
import Image from "next/image";

type CompanyCardProps = {
  company: Company;
};

export const CompanyCard = ({ company }: CompanyCardProps) => {
  const metaId = `company-${company.companyId}-meta`;

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <Image
          src={company.logoLightUrl}
          alt={`${company.displayName} logo`}
          width={40}
          height={40}
          className="h-10 w-10 rounded-md bg-white object-contain"
        />

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-900">
            <Link
              href={`/companies/${company.companyId}`}
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              aria-label={`View details for ${company.displayName}`}
              aria-describedby={metaId}
            >
              {company.displayName}
            </Link>
          </h3>
          <p id={metaId} className="text-xs text-slate-600">
            {company.companyTicker} • {company.companyCountry}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
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
          Investors
        </a>
      </div>
    </article>
  );
};


