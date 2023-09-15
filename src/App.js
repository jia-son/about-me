import './App.css';
import { Route, Routes } from "react-router-dom";
import MainPage from './components/AboutMe.js';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
