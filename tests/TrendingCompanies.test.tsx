import { render, screen } from "@testing-library/react";

import { TrendingCompanies } from "@/components/trending-companies/TrendingCompanies";
import type { Company } from "@/lib/companies/types";

describe("TrendingCompanies", () => {
  it("renders companies passed as props", () => {
    const companies: Company[] = [
      {
        companyId: 1,
        companyName: "OKEA",
        companyCountry: "NO",
        companyTicker: "OKEA",
        displayName: "OKEA",
        infoUrl: "https://example.com",
        liveUrl: "https://example.com/live",
        logoLightUrl: "https://example.com/logo.png",
        logoDarkUrl: "https://example.com/logo-dark.png",
        iconUrl: null,
        description: "desc",
      },
    ];

    render(<TrendingCompanies companies={companies} />);

    expect(screen.getByText("OKEA")).toBeInTheDocument();
    expect(screen.getByText(/1 total/i)).toBeInTheDocument();
  });

  it("shows an empty state when there are no companies", () => {
    render(<TrendingCompanies companies={[]} />);
    expect(screen.getByText(/no companies found/i)).toBeInTheDocument();
  });
});


