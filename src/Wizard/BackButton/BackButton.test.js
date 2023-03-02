import React from "react";
import { screen, render } from "@testing-library/react";
import BackButton from "./BackButton";

const mockReturnedValued = { currentPageNumber: 4 };
jest.mock("../Wizard.hooks", () => {
  return {
    useWizardContext: () => mockReturnedValued,
  };
});

describe("BackButton", () => {
  it("should render the back button", () => {
    const { container } = render(<BackButton>Back</BackButton>);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("should not render the back button when is in the first page", () => {
    mockReturnedValued.currentPageNumber = 1;
    render(<BackButton>Back</BackButton>);

    expect(screen.queryByText("Back")).not.toBeInTheDocument();
  });
});
