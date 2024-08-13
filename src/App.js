// import './App.css';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { BrowserRouter, NavLink } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// // import Events from "./pages/Events/Events";
// import Gallery from "./pages/Gallery/Gallery";
// import Team from "./pages/Team/Team";
// import Contact from "./pages/Contact/Contact";
// import Navbar from "./common/Navbar";
// import Footer from "./common/Footer";

// function App() {
//   return (
//     <div className=' bg-slate-100' >
//     <BrowserRouter>
//     <div className="mainNavBar">
//     <Navbar/>
//     </div>
//     <div className="content-wrapper">
//       <Routes>
//         <Route path="/" element={<Home/> } />
//         <Route path="/About/*" element={<About/> } />
//         {/* <Route path="/Events" element={<Events/> } /> */}
//         <Route path="/Gallery/*" element={<Gallery/> } />
//         <Route path="/Team" element={<Team/> } />
//         <Route path="/Contact" element={<Contact/> } />
        
//       </Routes>
//       </div>

//     <div className="footer">
//       <Footer/>
//     </div>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import EventGallery from './pages/Gallery/components/EventGallery';

function App() {
  return (
    <Router>
      <div className='bg-white-100'>
        <div className="mainNavBar">
          <Navbar />
        </div>
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About/*" element={<About />} />
            <Route path="/Gallery/*" element={<Gallery />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/EventGallery" element={<EventGallery />} /> 
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;