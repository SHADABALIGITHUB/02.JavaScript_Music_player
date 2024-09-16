import React from  'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dispatch,SetStateAction } from 'react';
import { SidebarData } from '../../Data/Create';

interface Maintype {
  setitem:Dispatch<SetStateAction<number>>,
  page:number,
  
}

const NavbarComponent:React.FC<Maintype> = ({setitem,page}) => {
  const handle=(index:number)=>{

    setitem(index);
    
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
    <Container fluid>
      <Navbar.Brand href="/dashboard" className='font-myfamily font-bold'>Shaddy</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          {
            Object.keys(SidebarData).map((heading)=>{
                const headingNum=Number(heading);
                if(headingNum===page)
                 return  <React.Fragment key={heading}>
                    {
                        Object.keys(SidebarData[Number(heading)]).map((subheading)=>{
                             const values=SidebarData[Number(heading)][Number(subheading)];
                            
                              return <Nav.Link
                                    as="li"
                                    key={subheading}
                                    className={`d-flex justify-content-between ${values.mark?"bg-success":""} align-items-start`}
                                    onClick={()=>{handle(Number(subheading))}}
                                  >
                                    <div className="ms-2 me-auto  font-myfamily text-blue-500 cursor-pointer">
                                      <div className="fw-bold  text-black">{values.heading}</div>
                                      <span className="text-sm underline">
                                        {values.description}
                                      </span>
                                    </div>
                                  </Nav.Link>
                            
                        })
                    }
                </React.Fragment>
                 })
        }
    

         
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarComponent
