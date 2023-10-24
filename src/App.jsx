import './App.css';
import { LoginPage } from './components/LoginPage';
import { TablePage } from './components/TablePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/table" element={<TablePage/>} />
        <Route path="/" element={<LoginPage/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
