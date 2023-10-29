import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import AppRoute from './Route';
import { DataProvider } from './data/DataProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          {/* <Home /> */}
          <AppRoute/>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
