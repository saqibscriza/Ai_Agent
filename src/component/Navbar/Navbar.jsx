import React, { useState, useEffect } from 'react'
import { Link, Links } from 'react-router-dom';
import DashboardSetPassword from '../pages/offcanvas/dashBoardSetPassWord/dashboardSetpassword';

import styled from 'styled-components';

const Container = styled.div`
.ul-align{
    /* transform: translate3d(-110px, 38px, 0px) !important; */
}

 @media (max-width: 575px) {
  .mt-margin-responsive {
  }
}
`

const Navbar = ({ ForResponsive, isMobile, setMobileView }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);

  const toggleMenu = () => {
    setMobileView(isMenuOpen2);
  };

  useEffect(() => {
    toggleMenu(isMenuOpen2)
  }, [isMenuOpen2])

  useEffect(() => {
    myFunction()
    // myMobileFunction()
  }, [isMenuOpen])


  // const myMobileFunction = () => {
  //   mobileFunction(mobileView);
  // };
  const myFunction = () => {
    ForResponsive(isMenuOpen);
  };



  return (
    <Container>
      <div className='container-fluid navbar-area'></div>
      <div className="row">
        {
          isMobile && (
            <div className="menu-icon mb-3 ms-3" style={{ border: "1px solid rgba(78, 85, 134, 1)", padding: '3px', borderRadius: '5px', width: 'auto' }} onClick={() => setIsMenuOpen2(!isMenuOpen2)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <path fill="none" stroke="rgba(78, 85, 134, 1)" strokeLinecap="round" strokeWidth="2" d="M20 7H4m16 5H4m16 5H4" />
              </svg>
            </div>
          )
        }
        <div className="col-lg-2 col-md-6 col-sm-12 ">
          {
            isMobile ? (
              <>
                <div></div>
              </>
            )
              :
              (
                <>
                  {
                    !isMenuOpen ? (
                      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
                          <path fill="none" stroke="#4E5586" strokeLinecap="round" strokeWidth="2" d="M20 7H4m16 5H4m16 5H4" />
                        </svg>
                      </div>
                    )
                      :
                      (
                        <div onClick={() => setIsMenuOpen(!isMenuOpen)} style={{cursor:'pointer'}}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="#4E5586" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                              <path stroke-dasharray="20" d="M21 3v18">
                                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" />
                              </path>
                              <path stroke-dasharray="16" stroke-dashoffset="16" d="M3 12h13.5">
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" to="0" />
                              </path>
                              <path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12l-7 7M17 12l-7 -7">
                                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" />
                              </path>
                            </g>
                          </svg>
                        </div>

                      )
                  }
                </>
              )
          }
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12"></div>
            <div className="col-lg-4 col-md-8 col-sm-12">
              <div className="searchContent">
                <div className="input-group mb-3 search-bar">
                  <input type="text" className="form-control my-form-control search-input" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-2 col-sm-1  " >
              <div className='ps-3 icon'>
                <svg width="20" height="40" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M14.359 13.8462V8.71793C14.359 5.56409 12.6821 2.93332 9.74361 2.23591V1.53846C9.74361 0.687163 9.05639 0 8.20514 0C7.35385 0 6.66668 0.687163 6.66668 1.53846V2.23591C3.72822 2.93332 2.0513 5.56409 2.0513 8.71793V13.8462L0 15.8975V16.9231H16.4102V15.8975L14.359 13.8462ZM8.20514 20C9.33846 20 10.2564 19.0821 10.2564 17.9487H6.15385C6.15385 19.0821 7.07178 20 8.20514 20Z" fill="#5041BC" />
                  <circle cx="12.5" cy="5.44092" r="3.5" fill="#FF9579" />
                </svg>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-11" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:'pointer'}}>
              <div className="profile d-flex">
                <div>
                  <img src="./Image/Profile icon.svg" alt="" />
                </div>
                <div className="icon ms-2 mt-2">
                  <p>Danielle Campbell </p>
                </div>
                <div className="dropdown my-dropdown " style={{ cursor: 'pointer', fontSize: '10px' }}>
                  <a className="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H8.00912L3.89844 4.11068L0 0Z" fill="#5041BC" />
                    </svg>
                  </a>
                  <ul className="dropdown-menu ul-align" style={{ cursor: 'pointer', fontSize: '14px' }}>
                    <li><Link className="dropdown-item" to="/dashboardprofile">Profile Details</Link></li>
                    <li><Link className="dropdown-item" to="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight123" aria-controls="offcanvasRight"> Change Password</Link></li>
                    <li><Link className="dropdown-item" to="#">Logout</Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* offcanvas  */}
      <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasRight123" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <div data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setSelect(!select)}>
            <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.04047 0.295798C8.1342 0.388761 8.20859 0.499362 8.25936 0.621222C8.31013 0.743081 8.33627 0.873786 8.33627 1.0058C8.33627 1.13781 8.31013 1.26852 8.25936 1.39038C8.20859 1.51223 8.1342 1.62284 8.04047 1.7158L3.44047 6.3158H26.9805C27.2457 6.3158 27.5 6.42115 27.6876 6.60869C27.8751 6.79623 27.9805 7.05058 27.9805 7.3158C27.9805 7.58102 27.8751 7.83537 27.6876 8.0229C27.5 8.21044 27.2457 8.3158 26.9805 8.3158H3.46047L8.04047 12.8858C8.22672 13.0732 8.33126 13.3266 8.33126 13.5908C8.33126 13.855 8.22672 14.1084 8.04047 14.2958C7.85311 14.482 7.59965 14.5866 7.33547 14.5866C7.07128 14.5866 6.81783 14.482 6.63047 14.2958L0.270468 7.9358C0.184866 7.85367 0.116755 7.75508 0.0702248 7.64596C0.023695 7.53683 -0.000289917 7.41943 -0.000289917 7.3008C-0.000289917 7.18217 0.023695 7.06476 0.0702248 6.95564C0.116755 6.84652 0.184866 6.74793 0.270468 6.6658L6.62047 0.295798C6.71343 0.20207 6.82403 0.127676 6.94589 0.0769072C7.06775 0.0261385 7.19846 0 7.33047 0C7.46248 0 7.59319 0.0261385 7.71504 0.0769072C7.8369 0.127676 7.94751 0.20207 8.04047 0.295798Z" fill="#008479" />
            </svg>
            <span className='ms-3'></span>
          </div>
          <p className='mb-0'>Change Password</p>

        </div>
        <hr className='mx-3' />
        <div className="offcanvas-body pt-0">
          <DashboardSetPassword />
        </div>
      </div>
      {/* offcanvas  */}
    </Container>
  )
}

export default Navbar
