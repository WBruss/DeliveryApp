import React, {useContext} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {UserContext} from "../../App";

const NavBar = ()=> {
    const { userContext, setUserContext } = useContext(UserContext);

    const HandleLogout = () => {
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
                                        (
                                            <>
                                                {userContext.role === 'ADMIN' ?
                                                    <Nav.Link href="/admin">Admin</Nav.Link>
                                                    :
                                                    <></>
                                                }
                                            </>
                                        )
                                    }
                                    <Nav.Link onClick={() => HandleLogout()}>Logout</Nav.Link>
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