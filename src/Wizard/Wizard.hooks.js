import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const WizardContext = createContext();
export const useWizardContext = () => {
  const context = useContext(WizardContext);
  return context;
};

export const useWizard = ({ children, submitHandler }) => {
  const [numberOfPages, setNumberOfPages] = useState();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  useEffect(() => {
    console.log(children.length);
    setNumberOfPages(children.length);
    setCurrentPageNumber(1);
  }, [children.length]);

  const goToNextPage = useCallback(() => {
    console.log(currentPageNumber < numberOfPages);
    if (currentPageNumber < numberOfPages) {
      console.log(currentPageNumber);
      setCurrentPageNumber(currentPageNumber + 1);
    }
  }, [numberOfPages, currentPageNumber]);

  const goToPreviousPage = useCallback(() => {
    if (currentPageNumber > 1) setCurrentPageNumber(currentPageNumber - 1);
  }, [currentPageNumber]);

  const goToInitialPage = useCallback(() => {
    setCurrentPageNumber(1);
  }, []);

  const context = {
    currentPageNumber,
    numberOfPages,
    isLastPage: currentPageNumber === numberOfPages,
    goToNextPage,
    goToPreviousPage,
    submitHandler: () => {
      submitHandler();
      goToInitialPage();
    },
  };

  return context;
};
