import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Carosel from './Carosel';
import Plans from './Plans';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header title="LAND OF ACRHITECTURE"/>
    <Carosel/>
    <Plans text="Plans"/>
    <Footer place="VISIT US" contact="CONTACT US" social="VISIT OUR WEBSITE" />
    </>
  );
}

export default App;
