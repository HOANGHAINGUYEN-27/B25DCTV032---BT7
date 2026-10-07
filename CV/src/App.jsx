import { useState } from "react";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Greeting from "./components/Greeting.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { pages, skills, projects, contacts } from "./data/data.js";

function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);

  return (
    <div id="app" className={dark ? "dark-mode" : ""}>
      <Header name="Nguyen Hoang Hai - B25DCTV032" />
      <main>
        <Navigation items={pages} current={page} onChange={setPage} />
        <Greeting />
        {page === "home" && <Home skills={skills} projects={projects} />}
        {page === "about" && <About />}
        {page === "contact" && <Contact contacts={contacts} />}
        <button onClick={() => setDark(!dark)}>Đổi chế độ</button>
      </main>
      <Footer owner="Nguyen Hoang Hai" />
    </div>
  );
}

export default App;
