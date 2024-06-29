import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Packages from './components/packages/Packages';


function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Packages />
      <Footer />
    </>
  );
}

export default App;
