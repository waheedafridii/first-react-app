import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App(props) {
  return (
      <div>
        Hello From App js File updated {props.name} Age = {props.age -10}
        <br/>
        <Hello firstName={props.name}/>
      </div>
  );
}

export default App;
