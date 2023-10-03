import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './styles/styles.css'

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
