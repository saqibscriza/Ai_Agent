import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar.jsx'
import SideBar from '../Sidebar/SideBar.jsx'
import { Outlet } from "react-router-dom";

const Layout = () => {

  const [isSidebarSmall, setIsSidebarSmall] = useState(false);

  const ForResponsive = (value) => {
    setIsSidebarSmall(value);
  }
  const updateSidebarState = (width) => {
    setIsSidebarSmall(width < 1150);
  };
  useEffect(() => {
    const handleResize = () => {
      updateSidebarState(window.innerWidth);
    };
    updateSidebarState(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="layout " style={{ backgroundColor: '#4E5586', overflowX: 'hidden' }}>
        <div className="container-ms">
          <div className="row" >
            <div style={{position:''}} className={isSidebarSmall ? "my-col-1 p-0" : "col-2 p-0"}>
              <SideBar isSidebarSmall={isSidebarSmall} />
            </div>
            <div
              className={isSidebarSmall ? "my-col-11 navbarPage-area" : "col-10 navbarPage-area"} 
              style={{ backgroundColor: '#fff', borderRadius: '20px', }}>
               <div style={{position:''}}>
                <Navbar ForResponsive={ForResponsive} />
              </div>
              <div className="main-content">
                <div className="page-content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout








{/* <div className="col-2 p-0">
            <SideBar />
          </div>
          <div className="col-10 navbarPage-area" style={{backgroundColor:'#fff', borderRadius:'20px'}}>
            <Navbar ForResponsive={ForResponsive} />
            <div className="main-content " >
              <div className="page-content">{children}</div>
            </div>
          </div> */}