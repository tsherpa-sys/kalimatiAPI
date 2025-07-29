import logo from './logo.svg';
import './App.css';
import ZillowMapListingUI from './components/ZillowMapListingUI'
import { ListingsProvider } from './context/listingsContext';

function App() {
  return (
    <div className="App">
      <ListingsProvider>
        <ZillowMapListingUI/>
      </ListingsProvider>
   
    </div>
  );
}

export default App;
