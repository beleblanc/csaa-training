import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import React from "react";
import Wizard from "./Wizard";
const submitHandler = jest.fn();
describe("Wizard", () => {
  it("should render as expected", () => {
    const { container } = render(
      <Wizard submitHandler={submitHandler}>
        <div>Page1</div>
        <div>Page2</div>
        <div>Page3</div>
      </Wizard>
    );

    expect(container).toMatchSnapshot();
  });
  it("should navigate when the buttons are pressed", async () => {
    render(
      <Wizard submitHandler={submitHandler}>
        <div>Page1</div>
        <div>Page2</div>
        <div>Page3</div>
      </Wizard>
    );

    fireEvent.click(screen.getByText("Next"));
    await waitFor(async () =>
      expect(await screen.findByText("Page2")).toBeInTheDocument()
    );
    fireEvent.click(screen.getByText("Next"));
    await waitFor(async () =>
      expect(await screen.findByText("Page3")).toBeInTheDocument()
    );
    fireEvent.click(screen.getByText("Submit"));
    await waitFor(async () => expect(submitHandler).toHaveBeenCalled());
  });
});
