import Navigation from './layout/Navigation';
import Header from './layout/Header';
import Masters from './layout/Masters';
import Schedule from './layout/Schedule';
import Footer from './layout/Footer';
import Advantages from './layout/Advantages';
import Gallery from './layout/Galley';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Advantages />
      {/* <Masters /> */}
      <Schedule />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
