import React from "react";
import { useWizardContext } from "../Wizard.hooks";

const Panel = ({ children, pageNumber }) => {
  const { currentPageNumber } = useWizardContext();

  return currentPageNumber === pageNumber ? (
    <div className="wizard-panel">
      {children}
      <div className="notification-center">
        You are on page number: {currentPageNumber}
      </div>
    </div>
  ) : null;
};

export default Panel;
