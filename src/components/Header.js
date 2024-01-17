import React from 'react'
import { Container, Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
        <Navbar bg='warning' style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }} >
            <Container>
              <Navbar.Brand style={{
                color: 'white',
                fontSize:'2em',
                fontWeight:'bold',
                fontFamily:'cursive'
              }}>
              <img
                alt=""
                src="/img/sedan-car-rafiki.svg"
                width="45"
                height="45"
                className="d-inline-block align-top"
              />{' '}
                Cars Researcher
              </Navbar.Brand>
              <Link to="/add-car">
                <Button variant="primary">Ajouter</Button>
              </Link>
            </Container>
        </Navbar>
        <div style={{ height: '80px' }} />
    </>
  )
}

export default Header