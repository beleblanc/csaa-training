import React from "react";
import { useWizardContext } from "../Wizard.hooks";

const BackButton = () => {
  const { currentPageNumber, goToPreviousPage } = useWizardContext();

  return currentPageNumber !== 1 ? (
    <button type="button" onClick={goToPreviousPage}>
      Back
    </button>
  ) : null;
};

export default BackButton;
