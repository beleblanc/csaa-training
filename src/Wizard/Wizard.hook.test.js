import React from "react";
import { act, renderHook } from "@testing-library/react";
import { useWizard, useWizardContext, WizardContext } from "./Wizard.hooks";

describe("useWizard", () => {
  it("should returned expected values", () => {
    const { result } = renderHook(() =>
      useWizard({ children: [1, 2, 3], submitHandler: () => {} })
    );
    expect(result.current).toEqual({
      currentPageNumber: 1,
      goToNextPage: expect.any(Function),
      goToPreviousPage: expect.any(Function),
      isLastPage: false,
      numberOfPages: 3,
      submitHandler: expect.any(Function),
    });
  });

  it("should change values based on function calls", () => {
    const submitHandler = jest.fn();
    const { result } = renderHook(() =>
      useWizard({ children: [1, 2, 3], submitHandler })
    );

    act(() => result.current.goToNextPage());
    expect(result.current.currentPageNumber).toEqual(2);
    act(() => result.current.goToPreviousPage());
    expect(result.current.currentPageNumber).toEqual(1);
    act(() => result.current.submitHandler());
    expect(submitHandler).toHaveBeenCalled();
  });

  it("should stay within the bounds of the provided pages", () => {
    const submitHandler = jest.fn();
    const { result } = renderHook(() =>
      useWizard({ children: [1, 2, 3], submitHandler })
    );

    act(() => result.current.goToNextPage());
    act(() => result.current.goToNextPage());
    act(() => result.current.goToNextPage());
    act(() => result.current.goToNextPage());
    expect(result.current.currentPageNumber).toEqual(3);
    act(() => result.current.goToPreviousPage());
    act(() => result.current.goToPreviousPage());
    act(() => result.current.goToPreviousPage());
    act(() => result.current.goToPreviousPage());
    act(() => result.current.goToPreviousPage());
    expect(result.current.currentPageNumber).toEqual(1);
  });
});

describe("useWizardContext", () => {
  it("should return a context", () => {
    const { result } = renderHook(() => useWizardContext(), {
      wrapper: ({ children }) => (
        <WizardContext.Provider value={{ isLastPage: false }}>
          {children}
        </WizardContext.Provider>
      ),
    });

    expect(result.current.isLastPage).toEqual(false);
  });
});
