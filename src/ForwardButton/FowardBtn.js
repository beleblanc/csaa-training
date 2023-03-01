import { useState } from "react";
import { useWizard} from '../Wizard/Wizard';

function FowardBtn() {

    const {isLastPage, submitHandler, goToNextPage  } = useWizard();

    return (
      <div className="fowardBtn_div">
       <button type='button' onClick={isLastPage ? submitHandler : goToNextPage}>{isLastPage?'Submit' : 'Next'}</button>
      </div>
    );
  }

export default FowardBtn;
