import React from 'react';
import { useWizard } from '../Wizard/Wizard';

const Panel = ({children, pageNumber}) => {
    const {currentPageNumber, isLastPage} = useWizard();

        return (currentPageNumber === pageNumber) ? (<div className="wizard-panel">
            {children}
            <div className="notification-center">
                You are on page number: {currentPageNumber}
            </div>
        </div>) : null;
}

export default Panel;

 