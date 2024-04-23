import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Audiosearch from './Audiosearch'
import './Navbar.css'
import { useContext, useEffect, useState, useSyncExternalStore } from 'react';
import { Mainsearch } from '../Context/Searchcontext';
import { useNavigate } from 'react-router-dom';
function Navbars() {
  const {searchans,setsearchans} = useContext(Mainsearch)
  const [first, setfirst] = useState(false)
  const [change, setchange] = useState('')
  const [textserach,settextserach]=useState('')
  useEffect(()=>{
  
  },[change])
  
  const navigate = useNavigate();

  return (
    <div>
    <Navbar expand="lg" style={{backgroundColor:'#352F44'}} className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img width={80} alt='loading' src='_Pngtree_audio_cassette_tape_isolated_vector_5244755-removebg-preview.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Player">playList</Nav.Link>
            <Nav.Link href="/upload">Upload</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">services</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/admin" >
              Admin
            </Nav.Link>
          </Nav>
         {first?  <div className='sample'><Audiosearch  setchange={setchange} /></div> : null}
        
            <input
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              Value={searchans}
              onChange={(e)=>{settextserach(e.target.value)}}
            />
            <Button onClick={()=>{navigate(`/player/${textserach ? textserach : searchans}`)}}   variant="outline-success">Search</Button>

            <Button className='ms-2' variant="outline-success" onClick={()=>{setfirst(!first)}}>audio</Button>
          
             
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbars;