import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Picture from "./components/Picture";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
        </header>
      <main className="main-container">
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
        <Picture />
      </main>
      <Footer />
    </div>
  );
}

export default App;
