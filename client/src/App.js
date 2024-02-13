import HomePage from './components/Home/HomePage';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Technology from './components/Technology/Technology';
import Application from './components/Application/Application';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Products />
      <Technology />
      <Application />
      <AboutUs />
      <ContactUs />
    </>
  );
}

export default App;
