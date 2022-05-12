import { Navbar, Nav, Form } from 'react-bootstrap/';
import { PersonCircle, CollectionPlayFill} from 'react-bootstrap-icons';

function NavigationBar(props){
    return(
      <Navbar bg="success" variant="dark" fixed="top">
      { /* <Navbar.Toggle aria-controls="left-sidebar" onClick={this.showSidebar}/> */}
      <Navbar.Toggle aria-controls="left-sidebar" />
      <Navbar.Brand href="/">
        <CollectionPlayFill className="mr-1" size="30" /> Film Labrary     
      </Navbar.Brand>
      <Form inline className="my-0 mx-auto" action="#" role="search" aria-label="Quick search">
        <Form.Control className="mr-2" type="search" placeholder="Search" aria-label="Search query" />
      </Form>
      <Nav className="ml-auto">
        <Nav.Item>
          <Nav.Link href="#">            
            <PersonCircle size="30" />
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
    );
}

export default NavigationBar;