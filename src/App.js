import logo from './logo.svg';
import './App.css';
import Wizard from './Wizard/Wizard';

const Page1 = () => <div>Page1</div>
const Page2 = () => <div>Page2</div>
const Page3 = () => <div>Page3</div>

function App() {
  return (
    <div className="App">
      <h3>HI</h3>
      <Wizard submitHandler={() => console.log('SUBMITTED')}>
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard>
    </div>
  );
}

export default App;
