import React from "react";
import ForwardBtn from "./ForwardButton";
import BackButton from "./BackButton";
import Panel from "./Panel/Panel";
import { WizardContext, useWizard } from "./Wizard.hooks";

const Wizard = (props) => {
  const context = useWizard(props);

  return (
    <WizardContext.Provider value={context}>
      <div className="wizard">
        <div className="wizard-content-area">
          {props.children.map((child, index) => (
            <Panel pageNumber={index + 1} key={`child-of-panel-${index}`}>
              {child}
            </Panel>
          ))}
        </div>
        <div className="wizard-buttons">
          <ForwardBtn /> <BackButton />
        </div>
      </div>
    </WizardContext.Provider>
  );
};

export default Wizard;
