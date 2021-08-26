import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {AppContext} from "../../App";


const NavBar = ()=> {

    const history = useHistory();

    const { appContext, setAppContext } = useContext(AppContext);

    const handleLogout = () => {
        console.log("logout")
        localStorage.clear();
        setAppContext({});
    }

    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Delivery App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {appContext.user.name ?
                                (<>
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/logout" onClick={() => handleLogout()}>Logout</Nav.Link>
                                </>)
                                : <>
                                    <Nav.Link href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">SignUp</Nav.Link>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;