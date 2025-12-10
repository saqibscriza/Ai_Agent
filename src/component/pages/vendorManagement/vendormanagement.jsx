import React from 'react'
import { Link } from 'react-router-dom'


import styled from 'styled-components';

const Container = styled.div`
   .table-responsive {
  overflow-x: auto !important;
}

.no-shrink {
  white-space: nowrap !important;
}
 .breadcrumm{
  font-size: 14px;
  background: #F9F9F9;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
 @media (max-width: 991px) {
  .mt-margin-responsive {
    margin-top: 80px !important;
  }
}
 @media (max-width: 575px) {
  .mt-margin-responsive {
    margin-top: 120px !important;
  }
}
`
const vendormanagement = () => {

  return (
    <Container>
      <div className="container-fluid ps-1 pe-3 mt-3">
        <div className='breadcrumm p-1 px-3'>
          <div className="row mt-margin-responsive pt-2">
            <nav
              style={{
                "--bs-breadcrumb-divider": "'>'"
              }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Vendor Management</li>
              </ol>
            </nav>
          </div>
          <div className="row " style={{ marginTop: '-10px' }}>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className='' style={{ fontSize: "16px" }}>
                <p>Create and manage your Vendor Management</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className='d-flex breadcrmBtn ' style={{ marginTop: '-8px' }}>

                <div>
                  <Link to="/addvendor">
                    <button type="button" className="btn newAgent">
                      + New Vendor
                    </button>
                  </Link>
                </div>

                {/* <div><button type="button" class="btn  newAgent" ><Link to='./addagentindustry'>+ New Agent</Link></button></div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ color: '#7162DB', fontSize: '16px' }}>
            <p className='pt-3'><b>Vendor Management Details</b></p>
            <div className="table-responsive px-3" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table className="table table-sm align-middle">
                <thead className=''>
                  <tr className=' text-color-000' style={{ color: '#FF7F57', fontSize: '14px' }}>
                    <th className='no-shrink ' style={{ width: '' }}>Name</th>
                    <th className='no-shrink ' style={{ width: '' }}>Vendor ID</th>
                    <th className='no-shrink ' style={{ width: '' }}>Vendor Name</th>
                    <th className='no-shrink ' style={{ width: '' }}>Email</th>
                    <th className='no-shrink ' style={{ width: '' }}>Mobile Number</th>
                    <th className='no-shrink ' style={{ width: '' }}>Created at</th>
                    <th className='no-shrink ' style={{ width: '' }}>Plan</th>
                    <th className='no-shrink ' style={{ width: '' }}>Renewal Date</th>
                    <th className='no-shrink ' style={{ width: '' }}>Action</th>
                    <th className='no-shrink ' style={{ width: '' }}>Status</th>
                  </tr>
                </thead>
                <tbody className='heading-14 align-middle greyTextColor greyText'>
                  <tr className='heading-14' style={{ color: "#797D8C", fontSize: '14px' }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2  no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class=" d-flex  ">

                        <Link to="/updatevendor">
                          <div className=''>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M18 9.18943V18H0V0.37885H9V2.14097H1.80001V16.2379H16.2V9.18943H18ZM6.30001 9.46255L13.5198 2.38061L14.9184 4.17886L7.61311 11.8326H6.30001V9.46255ZM4.5 13.5947H8.3844L17.3007 4.18061L13.5684 0L4.5 8.71894V13.5947Z" fill="#4E5586" />
                            </svg>
                          </div>
                        </Link>
                        <div className='ms-4'>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.75 8.46436V13.6072" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.75 8.46436V13.6072" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.75 4.17871H18.75" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M3.75 4.17871H9.75H15.75V15.6277C15.75 17.3522 14.4069 18.7501 12.75 18.7501H6.75C5.09315 18.7501 3.75 17.3522 3.75 15.6277V4.17871Z" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5.75 2.46429C5.75 1.51751 6.94391 0.75 8.41667 0.75H11.0833C12.5561 0.75 13.75 1.51751 13.75 2.46429V4.17857H5.75V2.46429Z" stroke="#F16145" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default vendormanagement
