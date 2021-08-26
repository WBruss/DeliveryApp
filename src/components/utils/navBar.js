import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {AppContext, UserContext} from "../../App";


const NavBar = ()=> {

    const history = useHistory();

    const { userContext, setUserContext } = useContext(UserContext);

    const handleLogout = () => {
        console.log("logout")
        localStorage.clear();
        setUserContext({});
    }

    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Delivery App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {userContext.name ?
                                (<>
                                    <Nav.Link href="/">Home</Nav.Link>

                                    {userContext.role === "SECRETARY" ?
                                        <Nav.Link href="/officedeliveries">Office Deliveries</Nav.Link>
                                        :
                                        <></>
                                    }
                                    <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
                                </>)
                                : <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">SignUp</Nav.Link>
                                </>
                            }

                        </Nav>
                        <Nav>
                            <Nav.Link>{ userContext.name }</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;