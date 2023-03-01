import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react'
import ForwardBtn from '../ForwardButton/FowardBtn';
import BackButton from '../BackButton/BackButton';
import Panel from '../Panel/Panel';


const WizardContext = React.createContext();
const {Provider : AppProvider} = React.createContext();
export const useWizardContext = () => {
    const context = useContext(WizardContext)
    return context;

}

const useWizard = ({children, submitHandler}) => {
    const [numberOfPages, setNumberOfPages] = useState();
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

        useEffect(() => {
            console.log(children.length)
            setNumberOfPages(children.length);
            setCurrentPageNumber(1);
        }, [])

    
    const goToNextPage = useCallback(() => {
        console.log(currentPageNumber < numberOfPages);
        if(currentPageNumber < numberOfPages) {console.log(currentPageNumber);setCurrentPageNumber(currentPageNumber + 1)};
    }, [numberOfPages, currentPageNumber]);

    const goToPreviousPage = useCallback(() => {
        if(currentPageNumber > 1) setCurrentPageNumber(currentPageNumber -1);
    }, [numberOfPages, currentPageNumber]);

    const goToInitialPage = useCallback(() => {
        setCurrentPageNumber(1);
    }, [numberOfPages, currentPageNumber])
    
    const context = {
        currentPageNumber,
        numberOfPages,
        isLastPage: currentPageNumber === numberOfPages,
        goToNextPage, 
        goToPreviousPage,  
        submitHandler: () => { submitHandler(); goToInitialPage();}
    };

    return context;
}

const Wizard = (props) => {
    const context = useWizard(props);

    return <WizardContext.Provider value={context}>
        <div className="wizard">
            <div className="wizard-content-area">
                {props.children.map((child, index) => <Panel pageNumber={index + 1} key={`child-of-panel-${index}`}>{child}</Panel>)}
            </div>
            <div className="wizard-buttons">
                <ForwardBtn/> <BackButton/>
            </div>
        </div>
    </WizardContext.Provider>
  }


  export default Wizard;