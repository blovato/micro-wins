import { Subscribe } from "@react-rxjs/core"
import Template from '../Template'
import './App.css';

function App() {
  return (
    <Subscribe>
      <div className="App">
        <Template />
      </div>
    </Subscribe>
  );
}

export default App;
