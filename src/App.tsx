import './App.css';
import { LeftSection } from './components/LeftSection';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="app-container">
        <LeftSection />
        <Outlet />
      </div>
    </>
  );
}

export default App;
