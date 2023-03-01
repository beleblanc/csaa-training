import React from 'react';
import { useWizardContext} from '../Wizard/Wizard';

const BackButton = () => {
    const { currentPageNumber, goToPreviousPage } = useWizardContext();

    
    return (currentPageNumber !==1 )? 
      (<button
        type='button'
        onClick={goToPreviousPage}
      >
        Back
      </button>): null;

    
  };
  
  export default BackButton;