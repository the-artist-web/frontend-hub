{/* router */}
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

{/* components */}
import Header from './components/Header/Header';
import NavbarMobile from './components/NavbarMobile/NavbarMobile';
import Aside from './components/Aside/Aside';
import LangBox from './components/LangBox/LangBox';
import Footer from './components/Footer/Footer';

{/* pages */}
import Home from './pages/Home/Home';
import Docs from './pages/Docs/Docs';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <NavbarMobile />
            <main className="main">
              <Aside />
              <div className="article">
                <Header title="الصفحة الرئيسية" />
                <Home />
                <Footer />
              </div>
              <LangBox />
            </main>
          </>
        } />
        <Route path='/docs' element={
          <>
            <NavbarMobile />
            <main className="main">
              <Aside />
              <div className="article">
                <Header title="مستندات" />
                <Docs />
                <Footer />
              </div>
              <LangBox />
            </main>
          </>
        } />
        <Route path='/about' element={
          <>
            <NavbarMobile />
            <main className="main">
              <Aside />
              <div className="article">
                <About />
                <Footer />
              </div>
              <LangBox />
            </main>
          </>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App
