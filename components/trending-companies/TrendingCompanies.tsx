import { CompanyCard } from "@/components/trending-companies/CompanyCard";
import type { Company } from "@/lib/companies/types";

type TrendingCompaniesProps = {
  title?: string;
  companies: Company[];
};

export const TrendingCompanies = ({
  title = "Trending companies",
  companies,
}: TrendingCompaniesProps) => {
  const headingId = "trending-companies-title";
  const isEmpty = companies.length === 0;

  return (
    <section
      id="trending-companies"
      aria-labelledby={headingId}
      className="mt-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 id={headingId} className="text-base font-semibold text-slate-900">
          {title}
        </h2>
        <p className="text-xs text-slate-500" aria-label="Company count">
          {companies.length} total
        </p>
      </div>

      {isEmpty ? (
        <p className="mt-3 text-sm text-slate-600" role="status">
          No companies found.
        </p>
      ) : null}

      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {companies.map((company) => (
          <li key={company.companyId}>
            <CompanyCard company={company} />
          </li>
        ))}
      </ul>
    </section>
  );
};


