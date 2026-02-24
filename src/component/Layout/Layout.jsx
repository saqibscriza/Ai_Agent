import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import SideBar from '../Sidebar/SideBar.jsx'
import { Outlet } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`

.fixed-navbar {
  background-color: #fff;
  border-radius: 10px 0px 0px 0px;
}
.fixed-navbar-responsive {
  position: fixed;
  width: 90%;
  top: 0;
  z-index: 1000;
}
`
const Layout = () => {

  const [isSidebarSmall, setIsSidebarSmall] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [mobileView, setMobileView] = useState(false);
  console.log('value comes from navbarrrrr--------', mobileView)

  const ForResponsive = (value) => {
    setIsSidebarSmall(value);
  }

  // const mobileFunction = (valuee) => {
  //   setForMobileDeviceCheck(valuee)
  // }

  const updateSidebarState = (width) => {
    if (width <= 575) {
      setIsMobile(true);
      setIsSidebarSmall(true);
    } else {
      setIsMobile(false);
      setIsSidebarSmall(width < 1150);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      updateSidebarState(window.innerWidth);
    };
    updateSidebarState(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <Container>
      <div className="layout " style={{ backgroundColor: '#4E5586', overflowX: 'hidden' }}>
        <div className="container-ms">
          <div className="row" >
            <div
              className={`sidebar 
                  ${isMobile && mobileView ? "show-sidebar" : ""}
                  ${isMobile && !mobileView ? "hide-sidebar" : ""} `}>
              <div
                style={{ position: 'fixed' }}
                className={`${isSidebarSmall ? "my-col-1 p-0" : "col-2 p-0"}`}>
                <SideBar isSidebarSmall={isSidebarSmall} mobileView={mobileView} />
              </div>
            </div>

            {/* {
              !isMobile && (
                <div
                  style={{ position: 'fixed' }}
                  className={`${isSidebarSmall ? "my-col-1 p-0" : "col-2 p-0"}`}>
                  <SideBar isSidebarSmall={isSidebarSmall} mobileView={mobileView} />
                </div>
              )
            } */}
            <div
              className={
                isMobile
                  ? "col-12 navbarPage-area-mobile"
                  : isSidebarSmall
                    ? "my-col-11 navbarPage-area2 "
                    : "col-10 navbarPage-area"
              }
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px 0px 0px 0px"
              }}
            >
              <div className={`fixed-navbar fixed-navbar-responsive ${isScrolled ? "scrolled" : ""}`} style={{ position: "fixed", width: "90%" }}>
                {/* <Navbar ForResponsive={ForResponsive} /> */}
                <Navbar
                  ForResponsive={ForResponsive}
                  isMobile={isMobile}
                  setMobileView={setMobileView}
                />
              </div>
              <div className="main-content" style={{ marginTop: "100px" }}>
                <div className="page-content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Layout








