import { ThemeProvider } from "./state/ThemeContext";
import { NavProvider } from "./state/NavContext";
import About from "./components/About";
import NavBar from "./components/NavBar";
import HamburgerIcon from "./components/IconTest";
function App() {
  return (
    <>
      <ThemeProvider>
        {/* <Home /> */}
        <About />
      </ThemeProvider>
      <HamburgerIcon />
      <NavProvider>
        <NavBar />
      </NavProvider>
    </>
  );
}

export default App;

//navigation (routing)
//extra context met theme (light/dark)
