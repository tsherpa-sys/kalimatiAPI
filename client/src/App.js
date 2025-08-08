import './App.css';
import MainContainer from './components/MainContainer.jsx';
import { ListingsProvider } from './context/listingsContext';

function App() {
  return (
    <div className="App">
      <ListingsProvider>
        <MainContainer/>
      </ListingsProvider>
   
    </div>
  );
}

export default App;
