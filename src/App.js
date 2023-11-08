//Importing Route Controller
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Importing Bootstrap Component Elements
import { Container, Row, Col } from "react-bootstrap";

//Import Components
import MyNavbar from "./components/MyNavbar";

//Importing Pages
import Home from "./pages/Home";
import SingleCountry from "./pages/SingleCountry";
import SingleRegion from "./pages/SingleRegion";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const onHandleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <BrowserRouter>
      {/* Background Colour Div */}
      <div className="bg-body-tertiary">
        <MyNavbar onHandleSearch={onHandleSearch} searchTerm={searchTerm} />
        <Container>
          <Row>
            <Col>
              <Routes>
                <Route path="/" element={<Home searchTerm={searchTerm} />} />
                <Route path="/country/:name" element={<SingleCountry />} />
                <Route path="/regions/:name" element={<SingleRegion />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
