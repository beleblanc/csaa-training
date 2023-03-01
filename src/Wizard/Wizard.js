import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import ForwardBtn from '../ForwardButton/FowardBtn';
import BackButton from '../BackButton/BackButton';
import Panel from '../Panel/Panel';


const WizardContext = React.createContext();
const {Provider : AppProvider} = React.createContext();
export const useWizard = () => {
    const context = useContext(WizardContext)
    return context;

}


const wizardReducer = (state , action) => {
    const {currentPageNumber, totalPages} = state;


    switch(action.type) {
        case 'NEXT_PAGE' : 

        return {
            ...state, currentPageNumber: currentPageNumber + 1, 
            isLastPage: totalPages === currentPageNumber + 1,
        }
        case 'PREVIOUS_PAGE' : 
        return {
            ...state, currentPageNumber: currentPageNumber - 1,
            isLastPage: false
        }

        case 'SET_STEP_COUNT' : 
        return {...state, totalPages: action.payload}
        
        case 'SUBMIT' : 
        console.log('submit action')
        return {
            ...state, currentPageNumber: 1, isLastPage: false
        }

        default: 
        return state
    }
}

const initialState = {
    currentPageNumber: 1,
    steps: 0
}

const Wizard = ({children, submitHandler}) => {
    console.log('children', children);

    const [state, dispatch] = useReducer(wizardReducer, initialState)

    const goToNextPage = useCallback(() => {
        dispatch({type: 'NEXT_PAGE'});
    }, []);

    const goToPreviousPage = useCallback(() => {
        dispatch({type: 'PREVIOUS_PAGE'});
    }, []);

    const goToInitialPage = useCallback(() => {
        dispatch({type: 'SUBMIT'});
    }, [])

    useEffect(() => {
        console.log('children in use effect', children.length)
        dispatch({type: 'SET_STEP_COUNT', payload: children.length})
    } , [])
    
    const context = {
        ...state,
        goToNextPage, 
        goToPreviousPage,  
        submitHandler: () => {submitHandler() ;goToInitialPage();}
    };

    return <WizardContext.Provider value={context}>
        <div className="wizard">
            <div className="wizard-content-area">
                {children.map((child, index) => <Panel pageNumber={index + 1} key={`child-of-panel-${index}`}>{child}</Panel>)}
            </div>
            <div className="wizard-buttons">
                <ForwardBtn/> <BackButton/>
            </div>
        </div>
    </WizardContext.Provider>
  }


  export default Wizard;