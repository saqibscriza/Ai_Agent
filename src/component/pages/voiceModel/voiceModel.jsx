import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import VoiceModelOff from '../offcanvas/voiceModel/addVoiceModel';

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
@media (max-width: 991px) {
  .breadcrumm {
    margin-top: 10px !important;
  }
}
@media (max-width: 1330px) {
  .useVoice {
    width: 80%;
  }
}
@media (max-width: 1130px) {
  .useVoice {
    width: 100%;
  }
}
`
const voiceModel = () => {

  const [select, setSelect] = useState(false)
  return (
    <Container>
      <div className="container-fluid ps-1 pe-3 mt-3">
        <div className='breadcrumm p-1 px-3'>
          <div className="row  mt-margin-responsive pt-2">
            <nav
              style={{
                "--bs-breadcrumb-divider": "'>'"
              }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Voice Model</li>
              </ol>
            </nav>
          </div>
          <div className="row " style={{ marginTop: '-10px' }}>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className='' style={{ fontSize: "16px" }}>
                <p>Create and manage Voice Model</p>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <div className='div-flex breadcrmBtn ' style={{ marginTop: '-8px' }}>
                <div className="searchContent me-2">
                  <div className="input-group mb-3 search-bar">
                    <input type="text" className="form-control my-form-control search-input" style={{ borderRadius: "5px", padding: '6px 16px', backgroundColor: '#fff', border: '1px solid #E9E9E9' }} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                </div>
                <div className='me-2'>
                  <Link to="">
                    <button type="button" className="btn " style={{ border: '1px solid #E9E9E9', fontSize: '14px' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 1.74993C14 1.93558 13.9262 2.11362 13.7948 2.24489C13.6635 2.37616 13.4853 2.4499 13.2996 2.4499H6.9957C6.80993 2.4499 6.63177 2.37616 6.50042 2.24489C6.36906 2.11362 6.29527 1.93558 6.29527 1.74993C6.29527 1.56429 6.36906 1.38625 6.50042 1.25498C6.63177 1.12371 6.80993 1.04996 6.9957 1.04996H13.2996C13.4853 1.04996 13.6635 1.12371 13.7948 1.25498C13.9262 1.38625 14 1.56429 14 1.74993ZM13.2996 4.54982H8.39656C8.21079 4.54982 8.03263 4.62357 7.90128 4.75484C7.76992 4.88611 7.69613 5.06415 7.69613 5.24979C7.69613 5.43544 7.76992 5.61348 7.90128 5.74475C8.03263 5.87602 8.21079 5.94977 8.39656 5.94977H13.2996C13.4853 5.94977 13.6635 5.87602 13.7948 5.74475C13.9262 5.61348 14 5.43544 14 5.24979C14 5.06415 13.9262 4.88611 13.7948 4.75484C13.6635 4.62357 13.4853 4.54982 13.2996 4.54982ZM13.2996 8.04968H9.79742C9.61165 8.04968 9.4335 8.12343 9.30214 8.2547C9.17078 8.38597 9.09699 8.56401 9.09699 8.74966C9.09699 8.9353 9.17078 9.11334 9.30214 9.24461C9.4335 9.37588 9.61165 9.44963 9.79742 9.44963H13.2996C13.4853 9.44963 13.6635 9.37588 13.7948 9.24461C13.9262 9.11334 14 8.9353 14 8.74966C14 8.56401 13.9262 8.38597 13.7948 8.2547C13.6635 8.12343 13.4853 8.04968 13.2996 8.04968ZM13.2996 11.5495H11.1983C11.0125 11.5495 10.8344 11.6233 10.703 11.7546C10.5716 11.8858 10.4978 12.0639 10.4978 12.2495C10.4978 12.4352 10.5716 12.6132 10.703 12.7445C10.8344 12.8757 11.0125 12.9495 11.1983 12.9495H13.2996C13.4853 12.9495 13.6635 12.8757 13.7948 12.7445C13.9262 12.6132 14 12.4352 14 12.2495C14 12.0639 13.9262 11.8858 13.7948 11.7546C13.6635 11.6233 13.4853 11.5495 13.2996 11.5495ZM2.79311 0C2.60735 0 2.42919 0.0737469 2.29784 0.205017C2.16648 0.336287 2.09268 0.514328 2.09268 0.699972V11.6097L1.18703 10.7047C1.05492 10.5772 0.877995 10.5066 0.694344 10.5082C0.510693 10.5098 0.335017 10.5834 0.205151 10.7132C0.0752859 10.843 0.00162235 11.0185 2.64781e-05 11.2021C-0.0015694 11.3856 0.06903 11.5624 0.196619 11.6944L2.29791 13.7944C2.36297 13.8595 2.44027 13.9113 2.52536 13.9465C2.61046 13.9818 2.70168 14 2.79381 14C2.88595 14 2.97717 13.9818 3.06227 13.9465C3.14736 13.9113 3.22466 13.8595 3.28972 13.7944L5.39101 11.6944C5.5186 11.5624 5.5892 11.3856 5.5876 11.2021C5.58601 11.0185 5.51234 10.843 5.38248 10.7132C5.25261 10.5834 5.07694 10.5098 4.89329 10.5082C4.70964 10.5066 4.53271 10.5772 4.4006 10.7047L3.49355 11.6097V0.699972C3.49355 0.514328 3.41975 0.336287 3.28839 0.205017C3.15704 0.0737469 2.97888 0 2.79311 0Z" fill="#4E5586" />
                      </svg>
                      &nbsp;
                      Trending
                    </button>
                  </Link>
                </div>
                <div className='me-2 responsive-mb-2'>
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
                </div>
                <div>
                  <Link data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <button type="button" className="btn newAgent">
                      + Create or Clone a Voice
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ color: '#7162DB', fontSize: '16px' }}>
            <p className='pt-3'><b>Voice Details</b></p>
            <div className="table-responsive px-3" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table className="table table-strip table-sm align-middle">
                <tbody className='heading-14 align-middle greyTextColor greyText'>
                  <tr className='heading-14' style={{ color: "#797D8C", fontSize: '14px' }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div>
                        <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src="./Image/Mask group (2).png" alt="" />
                      </div>
                    </td>
                    <td className=' greyText pe-0 py-2  no-shrink '>
                      <p className='mb-0'><b>Jarnathan - warm, confident, versatile</b></p>
                      &nbsp;
                      <p style={{ marginTop: '-16px' }}>Lorem Ipsum is simply dummy text of the printing...</p>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      {/* <p className='mb-0'></p> */}
                      <div>
                        <img style={{ width: '30px', height: '30px', borderRadius: '4px' }} src="./Image/images of gandhi jayanti.jpeg" alt="" />
                        <span className='ps-2'>English</span>
                      </div>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>Conversational</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>2 Year</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>40.1K</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <p className='useVoice mb-0'>Use Voice</p>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg>
                        </a>
                        <ul class="dropdown-menu" style={{ fontSize: '14px' }}>
                          <li><a class="dropdown-item" href="#">Copy Voice Link</a></li>
                          <li><a class="dropdown-item" href="#"> Copy Voice ID</a></li>
                          <li><a class="dropdown-item" href="#">View Similar</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='heading-14' style={{ color: "#797D8C", fontSize: '14px' }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div>
                        <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src="./Image/Mask group (2).png" alt="" />
                      </div>
                    </td>
                    <td className=' greyText pe-0 py-2  no-shrink '>
                      <p className='mb-0'><b>Jarnathan - warm, confident, versatile</b></p>
                      &nbsp;
                      <p style={{ marginTop: '-16px' }}>Lorem Ipsum is simply dummy text of the printing...</p>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      {/* <p className='mb-0'></p> */}
                      <div>
                        <img style={{ width: '30px', height: '30px', borderRadius: '4px' }} src="./Image/images of gandhi jayanti.jpeg" alt="" />
                        <span className='ps-2'>English</span>
                      </div>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>Conversational</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>2 Year</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>40.1K</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <p className='useVoice mb-0'>Use Voice</p>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg>
                        </a>
                        <ul class="dropdown-menu" style={{ fontSize: '14px' }}>
                          <li><a class="dropdown-item" href="#">Copy Voice Link</a></li>
                          <li><a class="dropdown-item" href="#"> Copy Voice ID</a></li>
                          <li><a class="dropdown-item" href="#">View Similar</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='heading-14' style={{ color: "#797D8C", fontSize: '14px' }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div>
                        <img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src="./Image/Mask group (2).png" alt="" />
                      </div>
                    </td>
                    <td className=' greyText pe-0 py-2  no-shrink '>
                      <p className='mb-0'><b>Jarnathan - warm, confident, versatile</b></p>
                      &nbsp;
                      <p style={{ marginTop: '-16px' }}>Lorem Ipsum is simply dummy text of the printing...</p>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      {/* <p className='mb-0'></p> */}
                      <div>
                        <img style={{ width: '30px', height: '30px', borderRadius: '4px' }} src="./Image/images of gandhi jayanti.jpeg" alt="" />
                        <span className='ps-2'>English</span>
                      </div>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>Conversational</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>2 Year</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>40.1K</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <p className='useVoice mb-0'>Use Voice</p>
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg>
                        </a>
                        <ul class="dropdown-menu" style={{ fontSize: '14px' }}>
                          <li><a class="dropdown-item" href="#">Copy Voice Link</a></li>
                          <li><a class="dropdown-item" href="#"> Copy Voice ID</a></li>
                          <li><a class="dropdown-item" href="#">View Similar</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* offcanvas  */}
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <div data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setSelect(!select)}>
              <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.04047 0.295798C8.1342 0.388761 8.20859 0.499362 8.25936 0.621222C8.31013 0.743081 8.33627 0.873786 8.33627 1.0058C8.33627 1.13781 8.31013 1.26852 8.25936 1.39038C8.20859 1.51223 8.1342 1.62284 8.04047 1.7158L3.44047 6.3158H26.9805C27.2457 6.3158 27.5 6.42115 27.6876 6.60869C27.8751 6.79623 27.9805 7.05058 27.9805 7.3158C27.9805 7.58102 27.8751 7.83537 27.6876 8.0229C27.5 8.21044 27.2457 8.3158 26.9805 8.3158H3.46047L8.04047 12.8858C8.22672 13.0732 8.33126 13.3266 8.33126 13.5908C8.33126 13.855 8.22672 14.1084 8.04047 14.2958C7.85311 14.482 7.59965 14.5866 7.33547 14.5866C7.07128 14.5866 6.81783 14.482 6.63047 14.2958L0.270468 7.9358C0.184866 7.85367 0.116755 7.75508 0.0702248 7.64596C0.023695 7.53683 -0.000289917 7.41943 -0.000289917 7.3008C-0.000289917 7.18217 0.023695 7.06476 0.0702248 6.95564C0.116755 6.84652 0.184866 6.74793 0.270468 6.6658L6.62047 0.295798C6.71343 0.20207 6.82403 0.127676 6.94589 0.0769072C7.06775 0.0261385 7.19846 0 7.33047 0C7.46248 0 7.59319 0.0261385 7.71504 0.0769072C7.8369 0.127676 7.94751 0.20207 8.04047 0.295798Z" fill="#008479" />
              </svg>
              <span className='ms-3'></span>
            </div>
            <p className='mb-0'>Add New Voice</p>

          </div>
          <hr className='mx-3' />
          <div class="offcanvas-body">
            <VoiceModelOff data={select} />
          </div>
        </div>
        {/* offcanvas  */}
      </div>

    </Container>
  )
}

export default voiceModel
