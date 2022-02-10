import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <h1>
        Hello React !
      </h1>
      
      <Greeting name='Larry'/>
      <Greeting name='Curly'/>
      <Greeting name='Moe'/>
    </>
  );
}

export default App;
