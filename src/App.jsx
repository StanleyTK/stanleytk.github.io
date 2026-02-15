import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Archive from "./pages/Archive";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/404";

import Navigation from "./components/Navigation.jsx";

export const AppContext = createContext();

function App() {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
