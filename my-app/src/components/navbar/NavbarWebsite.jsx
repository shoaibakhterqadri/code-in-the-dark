import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarWebsite() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Navbar bg="dark" data-bs-theme="dark">
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    {/* Aligning content to the right */}
    <Nav className="justify-content-end">
      <Nav.Link href="#login">Login</Nav.Link>
      <Nav.Link href="#signup">Sign Up</Nav.Link>
    </Nav>
  </Container>
</Navbar>
     
    </>
  );
}

export default NavbarWebsite;