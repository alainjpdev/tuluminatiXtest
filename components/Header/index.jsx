import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
} from "mdbreact";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar className="py-2" expand="md">
      <MDBNavbarToggler onClick={handleToggle} />
      <MDBCollapse id="navbarCollapse" navbar isOpen={isOpen}>
        <MDBNavbarNav left>
          <MDBNavItem active={router.pathname === "/"}>
            <Link href="/">
              <a className="nav-link">
                {/* <MDBIcon icon="home" className="mr-1" /> */}
                Home
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="/properties" passHref>
              <a className="nav-link">
                {/* <MDBIcon icon="building" className="mr-1" /> */}
                Buy
              </a>
            </Link>
          </MDBNavItem>
          <MDBNavItem>
            <Link href="/properties" passHref>
              <a className="nav-link">
                {/* <MDBIcon icon="building" className="mr-1" /> */}
                Rent
              </a>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem active={router.pathname === "/contact"}>
            <Link href="/contact">
              <a className="nav-link">
                {/* <MDBIcon icon="address-book" className="mr-1" /> */}
                Contact
              </a>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Header;
