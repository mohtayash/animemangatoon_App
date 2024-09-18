import Headersection from './Components/Header';
import Mainsection from './Components/MainSection';
import Footersection from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <section>
      <div><Headersection/></div>
      <div><Mainsection/></div>
      <div><Footersection/></div>
    </section>
    </div>
  );
}

export default App;
