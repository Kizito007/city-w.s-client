import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./components/pages/Home"

function App() {
  return (
    <div style={{ background: "#626465", color: "#e2eef9" }}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
