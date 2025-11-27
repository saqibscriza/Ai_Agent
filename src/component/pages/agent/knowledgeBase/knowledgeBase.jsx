import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import KnowledgeBaseOffcanvas from '../../offcanvas/agent/knowLedgeBase/knowledgeBase';

const Container = styled.div`
.my-form-control::placeholder {
  font-size: 12px;  
}
.my-dropdown-menu {
  transform: translate3d(-50px, 45px, 0) !important;
  --bs-dropdown-link-active-bg: #4E5586;
  --bs-dropdown-link-hover-color: #fff;
  --bs-dropdown-link-hover-bg: #4E5586;
}
.my-dropdown-menu .dropdown-item:hover svg path {
  fill: #fff; /* change this color on hover */
}
/* .activeBg a{
  background-color:#4E5586 !important;
  color:'#fff' !important;
} */

@media (max-width: 768px) {
  .searchContent {
    background-position: right 8px center;
    padding-right: 15px;
  }
}
`
const knowledgeBase = () => {

  const fileInputRef = useRef(null);

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const [select, setSelect] = useState('Additional voice')
  const [selectModal, setSelectModal] = useState('Add URL')

  return (
    <Container>
      <div>
        <div className="row mt-4">
          <div className="col-lg-6">
            <p style={{ fontSize: '18px' }}><b>Agent Knowledge Base</b></p>
          </div>
          <div className="col-lg-6">
            <div className="row">

              <div className="col-lg-5 col-md-8 col-sm-12">
                <div className="searchContent">
                  <div className="input-group mb-3 search-bar">
                    <input type="text" className="form-control my-form-control search-input" placeholder="Search Knowledge Base" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-8 col-sm-12 d-flex justify-content-end">
                <div>
                  <Link to=''>
                    <div>
                      <button type="button" class="btn btn-md  playground me-1" style={{ backgroundColor: '#fff', color: '#0B0B0B' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >Configure RAG</button>
                    </div>
                  </Link>
                </div>
                <div style={{ borderRadius: '5px', height: '35px', alignItems: "center" }}>
                  <div class="dropdown my-dropdown ">
                    <a style={{ backgroundColor: '#4E5586', color: '#fff', fontSize: '14px' }} class="btn btn-secondary  dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      + Add Document
                    </a>
                    <ul class="dropdown-menu my-dropdown-menu py-0">
                      <li data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectModal('Add URL')}>
                        <a class="dropdown-item" href="#">
                          <svg width="15" height="15" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_79_1040)">
                              <path d="M5.8125 0C2.60213 0 0 2.60213 0 5.8125C0 9.02287 2.60213 11.625 5.8125 11.625C9.02287 11.625 11.625 9.02287 11.625 5.8125C11.625 2.60213 9.02287 0 5.8125 0ZM10.8656 5.625H8.61712C8.5965 4.79437 8.44875 4.00087 8.18662 3.2745C8.69287 3.06338 9.16087 2.7825 9.58762 2.45062C10.3462 3.30225 10.8206 4.40812 10.8656 5.625ZM5.60512 10.8645C4.98187 10.3455 4.45913 9.67163 4.07662 8.889C4.5675 8.73563 5.08763 8.65162 5.625 8.63437V10.8653C5.61825 10.8653 5.61188 10.8649 5.60512 10.8645ZM6.01912 0.7605C6.72638 1.34925 7.3035 2.13788 7.69388 3.05775C7.15912 3.24038 6.591 3.3465 5.99962 3.36525V0.759375C6.00675 0.75975 6.01275 0.760125 6.01912 0.7605ZM6.64387 0.82425C7.67887 0.996375 8.60738 1.47975 9.33038 2.1795C8.93775 2.48062 8.50875 2.73563 8.04487 2.92875C7.70362 2.11987 7.22475 1.40475 6.64387 0.82425ZM5.625 0.759375V3.36525C5.03363 3.34612 4.46513 3.24038 3.93075 3.05775C4.32113 2.13788 4.89825 1.34925 5.6055 0.7605C5.61225 0.760125 5.61825 0.75975 5.625 0.759375ZM3.57975 2.92912C3.11662 2.736 2.68725 2.481 2.29463 2.17988C3.01725 1.48013 3.94613 0.99675 4.98112 0.824625C4.39988 1.40475 3.92137 2.11987 3.57975 2.92912ZM3.78937 3.4035C4.36762 3.60413 4.98375 3.72113 5.625 3.74063V5.625H3.38287C3.40313 4.83975 3.54225 4.08938 3.78937 3.4035ZM5.625 6V8.25937C5.03363 8.27738 4.46175 8.37413 3.92288 8.54775C3.59813 7.7745 3.4065 6.91313 3.38287 6H5.625ZM4.98112 10.8007C4.05375 10.6466 3.2115 10.2428 2.52675 9.65625C2.89613 9.40012 3.2955 9.18337 3.72225 9.01875C4.04925 9.69675 4.47713 10.2986 4.98112 10.8007ZM6 10.8656V8.63475C6.537 8.652 7.0575 8.736 7.54838 8.88937C7.1655 9.672 6.64312 10.3459 6.01987 10.8649C6.0135 10.8649 6.00675 10.8653 6 10.8656ZM7.90275 9.01875C8.32912 9.18337 8.72812 9.4005 9.09825 9.65625C8.4135 10.2424 7.57125 10.6466 6.64387 10.8007C7.14787 10.2986 7.57537 9.69675 7.90275 9.01875ZM7.70212 8.54775C7.16287 8.37413 6.591 8.27738 6 8.25937V6H8.24212C8.2185 6.91313 8.0265 7.7745 7.70212 8.54775ZM6 5.625V3.74063C6.64087 3.72113 7.257 3.6045 7.83563 3.40387C8.08238 4.08975 8.2215 4.84013 8.24212 5.62538H6V5.625ZM2.03775 2.45062C2.4645 2.7825 2.9325 3.06338 3.43837 3.2745C3.17625 4.00087 3.0285 4.79437 3.00787 5.625H0.759375C0.804375 4.40812 1.27875 3.30225 2.03775 2.45062ZM0.759375 6H3.00787C3.03113 6.95813 3.23137 7.863 3.5715 8.67637C3.09637 8.86162 2.6535 9.10838 2.24475 9.4005C1.36425 8.52413 0.8085 7.326 0.759375 6ZM9.38025 9.40012C8.9715 9.10837 8.52863 8.86125 8.05313 8.676C8.39363 7.86263 8.5935 6.95775 8.61712 5.99962H10.8656C10.8165 7.326 10.2604 8.52413 9.38025 9.40012Z" fill="#333332" />
                            </g>
                            <defs>
                              <clipPath id="clip0_79_1040">
                                <rect width="12" height="12" fill="white" />
                              </clipPath>
                            </defs>
                          </svg> &nbsp; <span style={{ fontSize: '14px' }}>Add URL</span>
                        </a>
                      </li>
                      <li data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectModal('Add Files')}>
                        <a class="dropdown-item" href="#">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.875 17.625H4.125C3.29663 17.625 2.625 16.9534 2.625 16.125V1.875C2.625 1.04662 3.29663 0.375 4.125 0.375H11.2399C11.2406 0.375 11.2418 0.375 11.2425 0.375H11.25C11.37 0.375 11.4724 0.435375 11.541 0.523125L15.2269 4.209C15.315 4.27763 15.375 4.38 15.375 4.5V4.50787C15.375 4.50863 15.375 4.509 15.375 4.50975V16.125C15.375 16.9534 14.7034 17.625 13.875 17.625ZM11.625 1.64287V4.125H14.1071L11.625 1.64287ZM14.625 4.875H11.25C11.0426 4.875 10.875 4.707 10.875 4.5V1.125H4.125C3.711 1.125 3.375 1.461 3.375 1.875V16.125C3.375 16.539 3.711 16.875 4.125 16.875H13.875C14.289 16.875 14.625 16.539 14.625 16.125V4.875ZM12.375 14.625H5.625C5.41763 14.625 5.25 14.4574 5.25 14.25C5.25 14.043 5.41763 13.875 5.625 13.875H12.375C12.5824 13.875 12.75 14.043 12.75 14.25C12.75 14.4574 12.5824 14.625 12.375 14.625ZM12.375 11.625H5.625C5.41763 11.625 5.25 11.4574 5.25 11.25C5.25 11.043 5.41763 10.875 5.625 10.875H12.375C12.5824 10.875 12.75 11.043 12.75 11.25C12.75 11.4574 12.5824 11.625 12.375 11.625ZM12.375 8.625H5.625C5.41763 8.625 5.25 8.45737 5.25 8.25C5.25 8.043 5.41763 7.875 5.625 7.875H12.375C12.5824 7.875 12.75 8.043 12.75 8.25C12.75 8.45737 12.5824 8.625 12.375 8.625Z" fill="#797D8C" />
                          </svg>
                          &nbsp; <span style={{ fontSize: '14px' }}>Add Files</span>
                        </a>
                      </li>
                      <li data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectModal('Create Text')}>
                        <a class="dropdown-item" href="#">
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.875 14.4998H10.125" stroke="#797D8C" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.5 3.125V0.5H14.5V3.125" stroke="#797D8C" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.5 0.5V14.5" stroke="#797D8C" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          &nbsp; <span style={{ fontSize: '14px' }}>Create Text</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
        <div className="row">
          <div>
            <div style={{ color: '#7162DB', fontSize: '16px' }}>
              <div className="table-container px-1 pe-0  table-responsive">
                <table className="table table-sm table-fixed">
                  <thead className=''>
                    <tr className=' text-color-000' style={{ color: '#FF7F57' }}>
                      <th className='no-shrink ' style={{ width: '100%' }}>Name</th>
                      <th className='no-shrink ' style={{ width: '100%' }}>Created by</th>
                      <th className='no-shrink ' style={{ width: '100%' }}>Last Updated</th>
                      <th className='no-shrink ' style={{ width: '30%' }}>Action</th>
                    </tr>
                  </thead>
                  <tbody className='heading-14 align-middle greyTextColor greyText'>
                    <tr className='heading-14' style={{ color: "#797D8C" }}>
                      <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                      <td className=' greyText pe-0 py-2  no-shrink '>My Data</td>
                      <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                      <td className=' greyText pe-0 py-2 no-shrink '>
                        <div style={{ cursor: 'pointer' }}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 8.46436V13.6072" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.75 8.46436V13.6072" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.75 4.17871H18.75" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.75 4.17871H9.75H15.75V15.6277C15.75 17.3522 14.4069 18.7501 12.75 18.7501H6.75C5.09315 18.7501 3.75 17.3522 3.75 15.6277V4.17871Z" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.75 2.46429C5.75 1.51751 6.94391 0.75 8.41667 0.75H11.0833C12.5561 0.75 13.75 1.51751 13.75 2.46429V4.17857H5.75V2.46429Z" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        {/* offcanvas  */}
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <div data-bs-dismiss="offcanvas" aria-label="Close" >
              <svg style={{ cursor: 'pointer' }} width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.04047 0.295798C8.1342 0.388761 8.20859 0.499362 8.25936 0.621222C8.31013 0.743081 8.33627 0.873786 8.33627 1.0058C8.33627 1.13781 8.31013 1.26852 8.25936 1.39038C8.20859 1.51223 8.1342 1.62284 8.04047 1.7158L3.44047 6.3158H26.9805C27.2457 6.3158 27.5 6.42115 27.6876 6.60869C27.8751 6.79623 27.9805 7.05058 27.9805 7.3158C27.9805 7.58102 27.8751 7.83537 27.6876 8.0229C27.5 8.21044 27.2457 8.3158 26.9805 8.3158H3.46047L8.04047 12.8858C8.22672 13.0732 8.33126 13.3266 8.33126 13.5908C8.33126 13.855 8.22672 14.1084 8.04047 14.2958C7.85311 14.482 7.59965 14.5866 7.33547 14.5866C7.07128 14.5866 6.81783 14.482 6.63047 14.2958L0.270468 7.9358C0.184866 7.85367 0.116755 7.75508 0.0702248 7.64596C0.023695 7.53683 -0.000289917 7.41943 -0.000289917 7.3008C-0.000289917 7.18217 0.023695 7.06476 0.0702248 6.95564C0.116755 6.84652 0.184866 6.74793 0.270468 6.6658L6.62047 0.295798C6.71343 0.20207 6.82403 0.127676 6.94589 0.0769072C7.06775 0.0261385 7.19846 0 7.33047 0C7.46248 0 7.59319 0.0261385 7.71504 0.0769072C7.8369 0.127676 7.94751 0.20207 8.04047 0.295798Z" fill="#008479" />
              </svg>
              <span className="ms-3">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.75 5H14.75C14.34 5 14 4.66 14 4.25C14 3.84 14.34 3.5 14.75 3.5H20.75C21.16 3.5 21.5 3.84 21.5 4.25C21.5 4.66 21.16 5 20.75 5Z" fill="#292D32" />
                  <path d="M4.75 5H0.75C0.34 5 0 4.66 0 4.25C0 3.84 0.34 3.5 0.75 3.5H4.75C5.16 3.5 5.5 3.84 5.5 4.25C5.5 4.66 5.16 5 4.75 5Z" fill="#292D32" />
                  <path d="M8.75 8.5C6.41 8.5 4.5 6.59 4.5 4.25C4.5 1.91 6.41 0 8.75 0C11.09 0 13 1.91 13 4.25C13 6.59 11.09 8.5 8.75 8.5ZM8.75 1.5C7.23 1.5 6 2.73 6 4.25C6 5.77 7.23 7 8.75 7C10.27 7 11.5 5.77 11.5 4.25C11.5 2.73 10.27 1.5 8.75 1.5Z" fill="#292D32" />
                  <path d="M20.75 16H16.75C16.34 16 16 15.66 16 15.25C16 14.84 16.34 14.5 16.75 14.5H20.75C21.16 14.5 21.5 14.84 21.5 15.25C21.5 15.66 21.16 16 20.75 16Z" fill="#292D32" />
                  <path d="M6.75 16H0.75C0.34 16 0 15.66 0 15.25C0 14.84 0.34 14.5 0.75 14.5H6.75C7.16 14.5 7.5 14.84 7.5 15.25C7.5 15.66 7.16 16 6.75 16Z" fill="#292D32" />
                  <path d="M12.75 19.5C10.41 19.5 8.5 17.59 8.5 15.25C8.5 12.91 10.41 11 12.75 11C15.09 11 17 12.91 17 15.25C17 17.59 15.09 19.5 12.75 19.5ZM12.75 12.5C11.23 12.5 10 13.73 10 15.25C10 16.77 11.23 18 12.75 18C14.27 18 15.5 16.77 15.5 15.25C15.5 13.73 14.27 12.5 12.75 12.5Z" fill="#292D32" />
                </svg>
              </span>
              <span className='ms-3'></span> <span className=''>RAG configuration</span>
            </div>

          </div>
          <div class="offcanvas-body">

            <KnowledgeBaseOffcanvas />

          </div>
        </div>
        {/* offcanvas  */}

        {/* Modal  */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              {
                selectModal === 'Add URL' && (
                  <>
                    <div class="modal-header">
                      <div>
                        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_79_1040)">
                            <path d="M5.8125 0C2.60213 0 0 2.60213 0 5.8125C0 9.02287 2.60213 11.625 5.8125 11.625C9.02287 11.625 11.625 9.02287 11.625 5.8125C11.625 2.60213 9.02287 0 5.8125 0ZM10.8656 5.625H8.61712C8.5965 4.79437 8.44875 4.00087 8.18662 3.2745C8.69287 3.06338 9.16087 2.7825 9.58762 2.45062C10.3462 3.30225 10.8206 4.40812 10.8656 5.625ZM5.60512 10.8645C4.98187 10.3455 4.45913 9.67163 4.07662 8.889C4.5675 8.73563 5.08763 8.65162 5.625 8.63437V10.8653C5.61825 10.8653 5.61188 10.8649 5.60512 10.8645ZM6.01912 0.7605C6.72638 1.34925 7.3035 2.13788 7.69388 3.05775C7.15912 3.24038 6.591 3.3465 5.99962 3.36525V0.759375C6.00675 0.75975 6.01275 0.760125 6.01912 0.7605ZM6.64387 0.82425C7.67887 0.996375 8.60738 1.47975 9.33038 2.1795C8.93775 2.48062 8.50875 2.73563 8.04487 2.92875C7.70362 2.11987 7.22475 1.40475 6.64387 0.82425ZM5.625 0.759375V3.36525C5.03363 3.34612 4.46513 3.24038 3.93075 3.05775C4.32113 2.13788 4.89825 1.34925 5.6055 0.7605C5.61225 0.760125 5.61825 0.75975 5.625 0.759375ZM3.57975 2.92912C3.11662 2.736 2.68725 2.481 2.29463 2.17988C3.01725 1.48013 3.94613 0.99675 4.98112 0.824625C4.39988 1.40475 3.92137 2.11987 3.57975 2.92912ZM3.78937 3.4035C4.36762 3.60413 4.98375 3.72113 5.625 3.74063V5.625H3.38287C3.40313 4.83975 3.54225 4.08938 3.78937 3.4035ZM5.625 6V8.25937C5.03363 8.27738 4.46175 8.37413 3.92288 8.54775C3.59813 7.7745 3.4065 6.91313 3.38287 6H5.625ZM4.98112 10.8007C4.05375 10.6466 3.2115 10.2428 2.52675 9.65625C2.89613 9.40012 3.2955 9.18337 3.72225 9.01875C4.04925 9.69675 4.47713 10.2986 4.98112 10.8007ZM6 10.8656V8.63475C6.537 8.652 7.0575 8.736 7.54838 8.88937C7.1655 9.672 6.64312 10.3459 6.01987 10.8649C6.0135 10.8649 6.00675 10.8653 6 10.8656ZM7.90275 9.01875C8.32912 9.18337 8.72812 9.4005 9.09825 9.65625C8.4135 10.2424 7.57125 10.6466 6.64387 10.8007C7.14787 10.2986 7.57537 9.69675 7.90275 9.01875ZM7.70212 8.54775C7.16287 8.37413 6.591 8.27738 6 8.25937V6H8.24212C8.2185 6.91313 8.0265 7.7745 7.70212 8.54775ZM6 5.625V3.74063C6.64087 3.72113 7.257 3.6045 7.83563 3.40387C8.08238 4.08975 8.2215 4.84013 8.24212 5.62538H6V5.625ZM2.03775 2.45062C2.4645 2.7825 2.9325 3.06338 3.43837 3.2745C3.17625 4.00087 3.0285 4.79437 3.00787 5.625H0.759375C0.804375 4.40812 1.27875 3.30225 2.03775 2.45062ZM0.759375 6H3.00787C3.03113 6.95813 3.23137 7.863 3.5715 8.67637C3.09637 8.86162 2.6535 9.10838 2.24475 9.4005C1.36425 8.52413 0.8085 7.326 0.759375 6ZM9.38025 9.40012C8.9715 9.10837 8.52863 8.86125 8.05313 8.676C8.39363 7.86263 8.5935 6.95775 8.61712 5.99962H10.8656C10.8165 7.326 10.2604 8.52413 9.38025 9.40012Z" fill="#333332" />
                          </g>
                          <defs>
                            <clipPath id="clip0_79_1040">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg> &nbsp; <span>Add URL</span>

                      </div>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body" style={{ height: '200px' }}>
                      <div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">URL</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="0lNAOThDgDJeUht8CjxNY/Pay-Out?node-id=25-2245&t=0XfiIlThfq1VXMJM-0" />
                        </div>
                        <div className='mt-2 mb-3' style={{ textAlign: 'center' }}>
                          <button type="button" class="btn " style={{ backgroundColor: '#4E5586', color: '#fff' }}>Add URL</button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
              {
                selectModal === 'Add Files' && (
                  <>
                    <div class="modal-header">
                      <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.875 17.625H4.125C3.29663 17.625 2.625 16.9534 2.625 16.125V1.875C2.625 1.04662 3.29663 0.375 4.125 0.375H11.2399C11.2406 0.375 11.2418 0.375 11.2425 0.375H11.25C11.37 0.375 11.4724 0.435375 11.541 0.523125L15.2269 4.209C15.315 4.27763 15.375 4.38 15.375 4.5V4.50787C15.375 4.50863 15.375 4.509 15.375 4.50975V16.125C15.375 16.9534 14.7034 17.625 13.875 17.625ZM11.625 1.64287V4.125H14.1071L11.625 1.64287ZM14.625 4.875H11.25C11.0426 4.875 10.875 4.707 10.875 4.5V1.125H4.125C3.711 1.125 3.375 1.461 3.375 1.875V16.125C3.375 16.539 3.711 16.875 4.125 16.875H13.875C14.289 16.875 14.625 16.539 14.625 16.125V4.875ZM12.375 14.625H5.625C5.41763 14.625 5.25 14.4574 5.25 14.25C5.25 14.043 5.41763 13.875 5.625 13.875H12.375C12.5824 13.875 12.75 14.043 12.75 14.25C12.75 14.4574 12.5824 14.625 12.375 14.625ZM12.375 11.625H5.625C5.41763 11.625 5.25 11.4574 5.25 11.25C5.25 11.043 5.41763 10.875 5.625 10.875H12.375C12.5824 10.875 12.75 11.043 12.75 11.25C12.75 11.4574 12.5824 11.625 12.375 11.625ZM12.375 8.625H5.625C5.41763 8.625 5.25 8.45737 5.25 8.25C5.25 8.043 5.41763 7.875 5.625 7.875H12.375C12.5824 7.875 12.75 8.043 12.75 8.25C12.75 8.45737 12.5824 8.625 12.375 8.625Z" fill="#797D8C" />
                        </svg>
                        &nbsp; <span>Add Files</span>

                      </div>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style={{ height: '230px' }}>
                      <div>
                        <div className="mb-3 py-3"
                          style={{ textAlign: "center", backgroundColor: "#E4E7EB", cursor: "pointer" }}
                          onClick={openFilePicker}
                        >
                          <div>
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M34.834 29.3333V34.8333M34.834 34.8333V40.3333M34.834 34.8333H40.334M34.834 34.8333H29.334"
                                stroke="#303B88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M36.6673 16.5V16.1855C36.6673 15.213 36.281 14.2804 35.5934 13.5927L28.5746 6.57395C27.8869 5.8863 26.9543 5.5 25.9819 5.5H25.6673M36.6673 16.5H29.334C27.3089 16.5 25.6673 14.8584 25.6673 12.8333V5.5M36.6673 16.5V22M25.6673 5.5H11.0007C8.97561 5.5 7.33398 7.14162 7.33398 9.16667V34.8333C7.33398 36.8584 8.97561 38.5 11.0007 38.5H22.0007"
                                stroke="#303B88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="mb-0 pt-2" style={{ fontSize: "16px" }}>
                              Click or drag files to upload
                            </p>
                            <p style={{ color: "#6B6D72", fontSize: "14px" }}>
                              Up to 21 MB each.
                            </p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={(e) => console.log("Selected file:", e.target.files[0])}
                          />
                        </div>

                        <div className='mt-2 mb-3' style={{ textAlign: 'center' }}>
                          <button type="button" class="btn " style={{ backgroundColor: '#4E5586', color: '#fff' }}>Add URL</button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
              {
                selectModal === 'Create Text' && (
                  <>
                    <div class="modal-header">
                      <div>
                        <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_79_1040)">
                            <path d="M5.8125 0C2.60213 0 0 2.60213 0 5.8125C0 9.02287 2.60213 11.625 5.8125 11.625C9.02287 11.625 11.625 9.02287 11.625 5.8125C11.625 2.60213 9.02287 0 5.8125 0ZM10.8656 5.625H8.61712C8.5965 4.79437 8.44875 4.00087 8.18662 3.2745C8.69287 3.06338 9.16087 2.7825 9.58762 2.45062C10.3462 3.30225 10.8206 4.40812 10.8656 5.625ZM5.60512 10.8645C4.98187 10.3455 4.45913 9.67163 4.07662 8.889C4.5675 8.73563 5.08763 8.65162 5.625 8.63437V10.8653C5.61825 10.8653 5.61188 10.8649 5.60512 10.8645ZM6.01912 0.7605C6.72638 1.34925 7.3035 2.13788 7.69388 3.05775C7.15912 3.24038 6.591 3.3465 5.99962 3.36525V0.759375C6.00675 0.75975 6.01275 0.760125 6.01912 0.7605ZM6.64387 0.82425C7.67887 0.996375 8.60738 1.47975 9.33038 2.1795C8.93775 2.48062 8.50875 2.73563 8.04487 2.92875C7.70362 2.11987 7.22475 1.40475 6.64387 0.82425ZM5.625 0.759375V3.36525C5.03363 3.34612 4.46513 3.24038 3.93075 3.05775C4.32113 2.13788 4.89825 1.34925 5.6055 0.7605C5.61225 0.760125 5.61825 0.75975 5.625 0.759375ZM3.57975 2.92912C3.11662 2.736 2.68725 2.481 2.29463 2.17988C3.01725 1.48013 3.94613 0.99675 4.98112 0.824625C4.39988 1.40475 3.92137 2.11987 3.57975 2.92912ZM3.78937 3.4035C4.36762 3.60413 4.98375 3.72113 5.625 3.74063V5.625H3.38287C3.40313 4.83975 3.54225 4.08938 3.78937 3.4035ZM5.625 6V8.25937C5.03363 8.27738 4.46175 8.37413 3.92288 8.54775C3.59813 7.7745 3.4065 6.91313 3.38287 6H5.625ZM4.98112 10.8007C4.05375 10.6466 3.2115 10.2428 2.52675 9.65625C2.89613 9.40012 3.2955 9.18337 3.72225 9.01875C4.04925 9.69675 4.47713 10.2986 4.98112 10.8007ZM6 10.8656V8.63475C6.537 8.652 7.0575 8.736 7.54838 8.88937C7.1655 9.672 6.64312 10.3459 6.01987 10.8649C6.0135 10.8649 6.00675 10.8653 6 10.8656ZM7.90275 9.01875C8.32912 9.18337 8.72812 9.4005 9.09825 9.65625C8.4135 10.2424 7.57125 10.6466 6.64387 10.8007C7.14787 10.2986 7.57537 9.69675 7.90275 9.01875ZM7.70212 8.54775C7.16287 8.37413 6.591 8.27738 6 8.25937V6H8.24212C8.2185 6.91313 8.0265 7.7745 7.70212 8.54775ZM6 5.625V3.74063C6.64087 3.72113 7.257 3.6045 7.83563 3.40387C8.08238 4.08975 8.2215 4.84013 8.24212 5.62538H6V5.625ZM2.03775 2.45062C2.4645 2.7825 2.9325 3.06338 3.43837 3.2745C3.17625 4.00087 3.0285 4.79437 3.00787 5.625H0.759375C0.804375 4.40812 1.27875 3.30225 2.03775 2.45062ZM0.759375 6H3.00787C3.03113 6.95813 3.23137 7.863 3.5715 8.67637C3.09637 8.86162 2.6535 9.10838 2.24475 9.4005C1.36425 8.52413 0.8085 7.326 0.759375 6ZM9.38025 9.40012C8.9715 9.10837 8.52863 8.86125 8.05313 8.676C8.39363 7.86263 8.5935 6.95775 8.61712 5.99962H10.8656C10.8165 7.326 10.2604 8.52413 9.38025 9.40012Z" fill="#333332" />
                          </g>
                          <defs>
                            <clipPath id="clip0_79_1040">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg> &nbsp; <span>Create Text</span>

                      </div>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div class="modal-body" style={{ height: '100%' }}>
                      <div>
                        <div class="mb-3">
                          <label for="exampleFormControlInput1" class="form-label">Text Name</label>
                          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter name " />
                        </div>
                        <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label">Text Name</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your text content here'></textarea>
                        </div>
                        <div className='mt-2 mb-3' style={{ textAlign: 'center' }}>
                          <button type="button" class="btn " style={{ backgroundColor: '#4E5586', color: '#fff' }}>Create Text</button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </div>
        {/* Modal  */}
      </div>
    </Container>

  )
}

export default knowledgeBase
