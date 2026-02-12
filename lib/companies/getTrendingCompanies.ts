import { companiesData } from "@/lib/companies/companiesData";
import type { Company } from "@/lib/companies/types";
import { parseCompaniesApiResponse } from "@/lib/companies/parseCompaniesApiResponse";

const isHttpUrl = (value: string) => value.startsWith("http://") || value.startsWith("https://");

export const getTrendingCompanies = async (): Promise<Company[]> => {
  const url = process.env.COMPANIES_API_URL;
  if (!url) return companiesData;
  if (!isHttpUrl(url)) return companiesData;

  try {
    const response = await fetch(url, {
      next: { revalidate: 14400, tags: ["companies"] },
    });

    if (!response.ok) return companiesData;

    const json = (await response.json()) as unknown;
    return parseCompaniesApiResponse(json) ?? companiesData;
  } catch {
    return companiesData;
  }
};


