import "./App.css";
import { Footer } from "./components/Footer.tsx";
import { Header } from "./components/Header.tsx";
import { Navbar } from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <div className="App font-link">
        <Navbar />
        <Header />
        <Footer />
      </div>
    </>
  );
}

export default App;
