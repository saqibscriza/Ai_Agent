import React, { useState, useEffect } from 'react'

const Navbar = ({ ForResponsive }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    myFunction()
  }, [isMenuOpen])

  const myFunction = () => {
    ForResponsive(isMenuOpen);
  };
  return (
    <>
      <div className='container-fluid navbar-area'></div>
      <div className="row">
        <div className="col-lg-2 col-md-6 col-sm-12 ">
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24">
              <path fill="none" stroke="#4E5586" stroke-linecap="round" stroke-width="2" d="M20 7H4m16 5H4m16 5H4" />
            </svg>
          </div>
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
            <div className="col-lg-1 col-md-2 col-sm-1  ">
              <div className='ps-3 icon'>
                <svg width="20" height="40" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.359 13.8462V8.71793C14.359 5.56409 12.6821 2.93332 9.74361 2.23591V1.53846C9.74361 0.687163 9.05639 0 8.20514 0C7.35385 0 6.66668 0.687163 6.66668 1.53846V2.23591C3.72822 2.93332 2.0513 5.56409 2.0513 8.71793V13.8462L0 15.8975V16.9231H16.4102V15.8975L14.359 13.8462ZM8.20514 20C9.33846 20 10.2564 19.0821 10.2564 17.9487H6.15385C6.15385 19.0821 7.07178 20 8.20514 20Z" fill="#5041BC" />
                  <circle cx="12.5" cy="5.44092" r="3.5" fill="#FF9579" />
                </svg>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-11"> 
              <div className="profile d-flex">
                <div>
                  <img src="./Image/Profile icon.svg" alt="" />
                </div>
                <div className="icon ms-2 mt-2">
                  <p>Danielle Campbell </p>
                </div>
                <div className="icon ms-4 mt-2">
                  <svg width="13" height="10" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H8.00912L3.89844 4.11068L0 0Z" fill="#5041BC" />
                  </svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
