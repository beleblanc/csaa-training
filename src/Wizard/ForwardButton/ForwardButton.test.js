import React from "react";

import { screen, render } from "@testing-library/react";
import ForwardButton from "../ForwardButton";

const mockReturnedValued = {
  isLastPage: false,
  goToNextPage: jest.fn(),
  submitHandler: jest.fn(),
};
jest.mock("../Wizard.hooks", () => {
  return {
    useWizardContext: () => mockReturnedValued,
  };
});

describe("ForwardButton", () => {
  it("should render as expected", () => {
    const { rerender } = render(<ForwardButton />);
    expect(screen).toMatchSnapshot();
    expect(screen.getByText("Next")).toBeInTheDocument();
    mockReturnedValued.isLastPage = true;
    rerender(<ForwardButton />);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  /* describe('ForwardButton', () => {
    it('should render a button with the text "Forward"', () => {
      const { getByRole } = render(<ForwardButton />);
      const button = getByRole('button');
      expect(button).toHaveTextContent('Forward');
    });*/
});
