import React from 'react'
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#" className="logo"><b>J e n k i n s</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#" className='cd'>cd</Nav.Link>
                    <NavDropdown className='mn mt-1' id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#">What is CDF?</NavDropdown.Item>
                    <NavDropdown.Item href="#">Jenkins X</NavDropdown.Item>
                    <NavDropdown.Item href="#">Tekton</NavDropdown.Item>
                    <NavDropdown.Item href="#">Spinnaker</NavDropdown.Item>
                </NavDropdown>
                    <Nav.Link href="#action1" className='ml-1 mt-2'>Blog</Nav.Link>
                    <NavDropdown className='mt-2' title="Documentation" id="navbarScrollingDropdown">
                        <NavDropdown.Item><b>User Guide</b></NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Installing Jenkins</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Jenkins Pipeline</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Managing Jenkins</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Securing Jenkins</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- System Administration</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Terms and Definitions</NavDropdown.Item>
                        <NavDropdown.Item><b>Solution Pages Tutorials</b></NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Guided Tour</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- More Tutorials</NavDropdown.Item>
                        <NavDropdown.Item><b>Developer Guide</b></NavDropdown.Item>
                        <NavDropdown.Item><b>Contributer Guide</b></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" className='mt-2'>Plugins</Nav.Link>
                    <NavDropdown className='mt-2' title="Community" id="navbarScrollingDropdown">
                        <NavDropdown.Item>Overview</NavDropdown.Item>
                        <NavDropdown.Item>Chat</NavDropdown.Item>
                        <NavDropdown.Item>Meet</NavDropdown.Item>
                        <NavDropdown.Item>Events</NavDropdown.Item>
                        <NavDropdown.Item>Issue Tracker</NavDropdown.Item>
                        <NavDropdown.Item>Mailing List</NavDropdown.Item>
                        <NavDropdown.Item>Roadmap</NavDropdown.Item>
                        <NavDropdown.Item>Account Managemnet</NavDropdown.Item>
                        <NavDropdown.Item><b>Special Interest Groups</b></NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Advocacy and Outreach</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Chinese Localization</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Cloud Native</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Documentation</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Google Summer of Code</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Hardware and EDA</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Pipeline Authoring</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- Platform</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">- User Experience</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mt-2' title="Subprojects" id="navbarScrollingDropdown">
                        <NavDropdown.Item>Overview</NavDropdown.Item>
                        <NavDropdown.Item>Evergreen</NavDropdown.Item>
                        <NavDropdown.Item>Google Sumer of Code in Jenkins</NavDropdown.Item>
                        <NavDropdown.Item>Infrastructure</NavDropdown.Item>
                        <NavDropdown.Item>CI/CD and Jenkins Area Meetups</NavDropdown.Item>
                        <NavDropdown.Item>Jenkins Configuration as Code</NavDropdown.Item>
                        <NavDropdown.Item>Jenkins Operator</NavDropdown.Item>
                        <NavDropdown.Item>Jenkins Remoting</NavDropdown.Item>
                        <NavDropdown.Item>Document Jenkins on Kubernetes</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mt-2' title="About" id="navbarScrollingDropdown">
                        <NavDropdown.Item>Roadmap</NavDropdown.Item>
                        <NavDropdown.Item>Security</NavDropdown.Item>
                        <NavDropdown.Item>Press</NavDropdown.Item>
                        <NavDropdown.Item>Awards</NavDropdown.Item>
                        <NavDropdown.Item>Conduct</NavDropdown.Item>
                        <NavDropdown.Item>Artwork</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown className='mt-2 mr-3' title="English" id="navbarScrollingDropdown">
                        <NavDropdown.Item>Chinese</NavDropdown.Item>
                    </NavDropdown>
                    <Button variant="outline-light" className='mr-1 mt-2 mb-2'>Download</Button>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="ml-1 mr-1 mt-2"
                            aria-label="Search"
                        />

                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;




