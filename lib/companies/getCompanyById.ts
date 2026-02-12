import type { Company } from "@/lib/companies/types";
import { getTrendingCompanies } from "@/lib/companies/getTrendingCompanies";

export const getCompanyById = async (companyId: number): Promise<Company | null> => {
  const companies = await getTrendingCompanies();
  const company = companies.find((item) => item.companyId === companyId);
  return company ?? null;
};


