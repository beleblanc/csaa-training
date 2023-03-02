import React from "react";
import { useWizardContext } from "../Wizard.hooks";

function FowardBtn() {
  const { isLastPage, submitHandler, goToNextPage } = useWizardContext();

  return (
    <div className="fowardBtn_div">
      <button type="button" onClick={isLastPage ? submitHandler : goToNextPage}>
        {isLastPage ? "Submit" : "Next"}
      </button>
    </div>
  );
}

export default FowardBtn;
