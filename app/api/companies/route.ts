import { NextResponse } from "next/server";

import { getTrendingCompanies } from "@/lib/companies/getTrendingCompanies";
import type { CompaniesApiResponse } from "@/lib/companies/types";

export const revalidate = 14400; // 4 hours

export const GET = async () => {
  const response: CompaniesApiResponse = {
    data: await getTrendingCompanies(),
  };

  return NextResponse.json(response);
};


