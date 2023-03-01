import React from 'react';
import { useWizard} from '../Wizard/Wizard';

const BackButton = () => {
    const { currentPageNumber, goToPreviousPage } = useWizard();

    
    return (currentPageNumber !==1 )? 
      (<button
        type='button'
        onClick={goToPreviousPage}
      >
        Back
      </button>): null;

    
  };
  
  export default BackButton;