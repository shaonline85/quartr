import { render, screen } from "@testing-library/react";

import { CompanyCard } from "@/components/trending-companies/CompanyCard";
import type { Company } from "@/lib/companies/types";

jest.mock("next/link", () => {
  const MockedLink = ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );

  MockedLink.displayName = "MockedLink";
  return MockedLink;
});

describe("CompanyCard", () => {
  it("links to the internal company details page", () => {
    const company: Company = {
      companyId: 123,
      companyName: "Example Co",
      companyCountry: "SE",
      companyTicker: "EX",
      displayName: "Example Co",
      infoUrl: "https://example.com/info",
      liveUrl: "https://example.com/live",
      logoLightUrl: "https://example.com/light.png",
      logoDarkUrl: "https://example.com/dark.png",
      iconUrl: null,
      description: "Example description",
    };

    render(<CompanyCard company={company} />);

    const link = screen.getByRole("link", { name: /view details for example co/i });
    expect(link).toHaveAttribute("href", "/companies/123");
  });
});


