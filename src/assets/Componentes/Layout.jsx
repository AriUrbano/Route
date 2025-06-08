import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

export default function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}