import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CompanyCard } from "@/components/trending-companies/CompanyCard";
import type { Company } from "@/lib/companies/types";

jest.mock("next/link", () => {
  const React = require("react");

  const MockedLink = ({ href, children, ...rest }: any) => {
    const handleClick = (event: any) => {
      event.preventDefault();
      window.history.pushState({}, "", href);
    };

    return React.createElement(
      "a",
      { href, onClick: handleClick, ...rest },
      children
    );
  };

  MockedLink.displayName = "MockedLink";
  return MockedLink;
});

describe("navigation", () => {
  it("navigates to the company details page when clicking a company link", async () => {
    window.history.pushState({}, "", "/");

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

    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: /view details for example co/i });
    await user.click(link);

    expect(window.location.pathname).toBe("/companies/123");
  });
});


