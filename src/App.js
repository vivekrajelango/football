import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoute from './Route';
import { DataProvider } from './data/DataProvider';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider>
          <Nav />
            <AppRoute/>
          <Footer />
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
