import { useState } from "react";
import { useWizardContext} from '../Wizard/Wizard';

function FowardBtn() {

    const {isLastPage, submitHandler, goToNextPage  } = useWizardContext();

    return (
      <div className="fowardBtn_div">
       <button type='button' onClick={isLastPage ? submitHandler : goToNextPage}>{isLastPage?'Submit' : 'Next'}</button>
      </div>
    );
  }

export default FowardBtn;
