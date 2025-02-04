import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa Router e Route da React Router
import { Navbar } from '../components/Navbar';
import { Homepage } from '../pages/Homepage';
import { ComponentsPage } from '../pages/ComponentsPage';
import { Provider } from '../components/ui/provider';
import { ButtonPage } from '../pages/ButtonPage';
import { GridPage } from '../pages/GridPage';
import { FooterPage } from '../pages/FooterPage';
import { SearchBar } from '@dimiceli-ui/searchBar';
import { SearchbarPage } from '../pages/SearchbarPage';
import { HeaderPage } from '../pages/HeaderPage';
import { FormPage } from '../pages/FormPage';
import { VerticalNavbarComponents } from '../components/VerticalNavbarComponents';

function App() {
  return (
    <>
      <Provider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/button" element={<ButtonPage/>} />
            <Route path="/grid" element={<GridPage/>} />
            <Route path="/footer" element={<FooterPage/>} />
            <Route path="/searchbar" element={<SearchbarPage/>} />
            <Route path="/header" element={<HeaderPage/>} />
            <Route path="/form" element={<FormPage/>} />
          </Routes>
        </Router>
      </Provider>
    </>

  );
}

export default App;
