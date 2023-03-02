import React from "react";
import { screen, render } from "@testing-library/react";
import Panel from "./Panel";

jest.mock("../Wizard.hooks", () => {
  return {
    useWizardContext: () => ({ currentPageNumber: 4 }),
  };
});

describe("Panel", () => {
  it("should render when it has the right page number", () => {
    const { container } = render(
      <Panel pageNumber={4}>
        <div>This is some text</div>
      </Panel>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("This is some text")).toBeInTheDocument();
  });

  it("should not render the panel when the is not in the current page", () => {
    render(
      <Panel pageNumber={3}>
        <div>This is some text</div>
      </Panel>
    );

    expect(screen.queryByText("This is some text")).not.toBeInTheDocument();
  });
});
