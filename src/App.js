import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import { Jumbotron, Container } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron fluid>
        <Container>
          <h2>City Wide Stores</h2>
          <p>
            This is a going to be one of the best stores in the world
          </p>
        </Container>
      </Jumbotron>
      <Footer />
    </div>
  );
}

export default App;
