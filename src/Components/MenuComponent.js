import { useEffect, useState } from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Container from 'react-bootstrap/Container'
import useWindowSize from '../Hooks/useWindowSize'

export default function MenuComponent () {
  const size = useWindowSize()

  const [toggle, setToggle] = useState(false)
  const [showTitle, setShowTitle] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setShowTitle(true)
    },6000)
  },[])

  if (size.width > 768) {
    return (
      <Navbar expand='lg' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto navbar-container'>
            <div className='col left-menu'>
              {showTitle && <h3 className='title custom-animation-gradient'>
                Alon Barenboim
              </h3>}
            </div>
            <div className='col right-menu'>
              <Nav.Link href='/' className='navbar-btn-txt'>
                Portfolio
              </Nav.Link>
              <Nav.Link href='/' className='navbar-btn-txt'>
                About
              </Nav.Link>
              <Nav.Link href='/' className='navbar-btn-txt'>
                Contact
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  } else
    return (
      <Navbar
        expanded={toggle}
        sticky='top'
        onToggle={() => setToggle(!toggle)}
        expand='lg'
        variant='dark'
      >
        <Container fluid>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <h3 className='title'>Alon Barenboim</h3>

          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <h3 className='title'>Alon Barenboim</h3>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='mr-auto justify-content-end flex-grow-1 pe-3 navbar-container'>
                <Nav.Link href='/' className='navbar-btn-txt'>
                  Portfolio
                </Nav.Link>
                <Nav.Link href='/' className='navbar-btn-txt'>
                  About
                </Nav.Link>
                <Nav.Link href='/' className='navbar-btn-txt'>
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )
}
//   return (
//     <Navbar
//       expanded={toggle}
//       sticky='top'
//       onToggle={() => setToggle(!toggle)}
//       expand='lg'
//       variant='dark'
//     >
//       <Container fluid>
//         <Navbar.Toggle aria-controls='offcanvasNavbar' />
//         <Navbar.Offcanvas
//           id='offcanvasNavbar'
//           aria-labelledby='offcanvasNavbarLabel'
//           placement='end'
//         >
//           <Offcanvas.Header closeButton>
//             <h3 className='title custom-animation-gradient'>Alon Barenboim</h3>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className='mr-auto justify-content-end flex-grow-1 pe-3 navbar-container'>
//               <div className='col left-menu'>
//                 <Nav.Link href='#' className='navbar-btn-txt'>
//                   Portfolio
//                 </Nav.Link>
//                 <Nav.Link
//                   className='navbar-btn-txt'
//                 >
//                   About
//                 </Nav.Link>
//               </div>
//               <div
//                 className='col right-menu'
//                 style={{ flexDirection: `column-reverse` }}
//               >
//                 <Nav.Link href='/' className='navbar-btn-txt'>
//                 Contact
//                 </Nav.Link>

//               </div>
//             </Nav>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   )
// }
