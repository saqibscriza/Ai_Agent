import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
   .div-flex{
  display: flex;
}
.useVoice{
  background: #FF7F57;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 5px 8px;
    width: 71%;

}
.sucessTable{
    background-color: #37C07E;
    color: #fff;
    padding: 4px 9px;
    border-radius: 22px;
    font-size: 14px;
}
.my-offcanvas{
  width: 50%
}
.chooseBtn{
  border: none;
    border-radius: 12px;
    padding: 3px 11px;
    background: rgba(78, 85, 134, 1);
    color: #fff;
}
@media (max-width: 720px) {
  .div-flex {
    flex-direction: column;
    justify-content: start;
  }
  .responsive-mb-2{
    margin-bottom: 8px ;
    margin-top: 8px ;
  }
}
`
const billingSubscription = () => {
  return (
    <Container>
      <div className='container-fluid ps-1 pe-3 mt-3'>
        <div className='breadcrumm  px-3' >
          <div className="row " >
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <nav
                className='pt-4 pb-2'
                style={{
                  "--bs-breadcrumb-divider": "'>'"
                }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Billing & Subscription</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <div className='div-flex breadcrmBtn ' >

                {/* <div className="searchContent me-2">
                  <div className="input-group mb-3 search-bar pt-3">
                    <input type="text" className="form-control my-form-control search-input " style={{ borderRadius: "5px", padding: '6px 16px', backgroundColor: '#fff', border: '1px solid #E9E9E9' }} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                </div> */}

                {/* <div className='me-2 responsive-mb-2 pt-3'>
                  <Link to="">
                    <button type="button" className="btn " style={{ border: '1px solid #E9E9E9', fontSize: '14px' }}>
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.42857H11.4285V0H0V1.42857Z" fill="#4E5586" />
                        <path d="M1.42859 4.2855H9.99998V2.85693H1.42859V4.2855Z" fill="#4E5586" />
                        <path d="M2.85718 7.14292H8.57144V5.71436H2.85718V7.14292Z" fill="#4E5586" />
                        <path d="M7.1429 9.99985H4.28577V8.57129H7.1429V9.99985Z" fill="#4E5586" />
                      </svg>
                      &nbsp;
                      Filter
                    </button>
                  </Link>
                </div> */}

              </div>
            </div>
          </div>
        </div>

        <div className='mt-3'>
          <p className='mb-0' style={{ fontSize: "18px", color: '#7162DB', fontWeight: '500' }}>Billing & Subscription</p>
          <p className='mb-0' style={{ color: '#ADADBD' }}>There are <span style={{ color: '#000' }}>9,448 credits</span> remaining on your <span style={{ color: '#000' }}>Free plan</span></p>
        </div>

        <div>
          <div className='mt-3' style={{ border: '1px solid #aaa', borderRadius: '10px', backgroundColor: '#e8e6f3' }}>
            <div className="row">
              <div className="col-lg-4 col-md-8 col-sm-12">
                <div style={{ marginTop: '15px' }}>
                  <p className='mb-0'><span style={{ fontSize: '22px' }}><b>$19</b></span ><span style={{ fontSize: '15px', color: ' rgba(132, 129, 153, 1)' }}>/ month</span></p>
                  <p className='mb-1' style={{ fontSize: '18px' }}><b>Basic Starter</b></p>
                  <div className='me-3' style={{ textAlign: "" }}>
                    <p className='mb-0' style={{ fontSize: '15px', color: 'rgba(132, 129, 153, 1)' }}>Sample Text, Sample Text Sample</p>
                    <div className='mt-2' >
                      <button className='chooseBtn'>Choose plan</button>
                    </div>
                    <div className='mt-3'>
                      <p style={{ color: "rgba(80, 65, 188, 1)", fontSize: '16px' }}>Credits</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-4 col-md-8 col-sm-12"></div>
              <div className="col-lg-4 col-md-8 col-sm-12"></div>
            </div>

            <div>
              <h2 style={{ color: 'red' }}>THIS PAGE IS PENDING BECAUSE OR DISCUSSION WHEN KV SIR APPROVE IT THEN I WILL COMPLETE THIS PAGE </h2>
            </div>

          </div>
        </div>
      </div>
    </Container>
  )
}

export default billingSubscription
