import { Link, useNavigate } from "react-router-dom";

//Bootstrap
import {
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const MyNavbar = (props) => {
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    navigate("/");
    props.onHandleSearch(e);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Countries API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Routes Section */}
          <Nav className="me-auto">
            {/* Link to Homepage */}
            <Nav.Link>
              <Link
                Link
                to={`/`}
                className="text-decoration-none text-secondary"
              >
                Home
              </Link>
            </Nav.Link>

            {/* Links to Regions Page */}
            <NavDropdown title="Regions" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link
                  Link
                  to="/regions/europe"
                  className="text-decoration-none text-secondary"
                >
                  Europe
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  Link
                  to="/regions/africa"
                  className="text-decoration-none text-secondary"
                >
                  Africa
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  Link
                  to="/regions/oceania"
                  className="text-decoration-none text-secondary"
                >
                  Oceania
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  Link
                  to="/regions/americas"
                  className="text-decoration-none text-secondary"
                >
                  Americas
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  Link
                  to="/regions/asia"
                  className="text-decoration-none text-secondary"
                >
                  Asia
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link
                  Link
                  to="/regions/antarctic"
                  className="text-decoration-none text-secondary"
                >
                  Antarctic
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleInputChange}
              value={props.searchTerm}
            />
            {/* Search Submit */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
