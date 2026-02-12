import type { Company } from "@/lib/companies/types";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isCompany = (value: unknown): value is Company => {
  if (!isRecord(value)) return false;

  return (
    typeof value.companyId === "number" &&
    typeof value.companyName === "string" &&
    typeof value.companyCountry === "string" &&
    typeof value.companyTicker === "string" &&
    typeof value.displayName === "string" &&
    typeof value.infoUrl === "string" &&
    typeof value.liveUrl === "string" &&
    typeof value.logoLightUrl === "string" &&
    typeof value.logoDarkUrl === "string" &&
    (typeof value.iconUrl === "string" || value.iconUrl === null) &&
    typeof value.description === "string"
  );
};

export const parseCompaniesApiResponse = (value: unknown): Company[] | null => {
  if (!isRecord(value)) return null;
  const data = value.data;
  if (!Array.isArray(data)) return null;

  const companies = data.filter(isCompany);
  if (companies.length !== data.length) return null;
  return companies;
};


