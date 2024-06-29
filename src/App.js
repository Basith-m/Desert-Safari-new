import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import LandingPage from './components/landingPage/LandingPage';
import Packages from './components/packages/Packages';
import Review from './components/review/Review';


function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Packages />
      <Review />
      <Footer />
    </>
  );
}

export default App;
