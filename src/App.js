import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';


function App() {
  return (
    <div style={{height:'150vh'}}>
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
