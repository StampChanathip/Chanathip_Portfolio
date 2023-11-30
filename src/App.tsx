import { Outlet, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ExperiencePage from "./Pages/ExperiencePage";
import NavBar from "./Components/NavBar";

function App() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Page />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="experience" element={<ExperiencePage />} />
      </Route>
    </Routes>
  );
}

const Page = () => {
  return (
    <div className="font-Montserrat flex flex-col md:flex-row text-light bg-dark min-h-screen min-w-screen ">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
