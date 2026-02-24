import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getVendorAllData, deleteVendorById } from '../../../Utils/Apis.jsx';
// import { Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import LoaderIVR from '../../../Loader/LoaderIVR.jsx';
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
.text-success{
  color: #28a745 !important;
}
.text-danger{
  color: #dc3545 !important;
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

  const tableRows = [
    {
      id: 1,
      name: "My Data",
      vendorId: "My Data",
      vendorName: "My Data",
      email: "My Data",
      mobile: "My Data",
      createdAt: "My Data",
      plan: "My Data",
      renewalDate: "My Data",
      status: "My Data"
    },
    {
      id: 2,
      name: "My Data",
      vendorId: "My Data",
      vendorName: "My Data",
      email: "My Data",
      mobile: "My Data",
      createdAt: "My Data",
      plan: "My Data",
      renewalDate: "My Data",
      status: "My Data"
    },
    {
      id: 3,
      name: "My Data",
      vendorId: "My Data",
      vendorName: "My Data",
      email: "My Data",
      mobile: "My Data",
      createdAt: "My Data",
      plan: "My Data",
      renewalDate: "My Data",
      status: "My Data"
    },
    {
      id: 4,
      name: "My Data",
      vendorId: "My Data",
      vendorName: "My Data",
      email: "My Data",
      mobile: "My Data",
      createdAt: "My Data",
      plan: "My Data",
      renewalDate: "My Data",
      status: "My Data"
    },
  ];

  const [loaderCheck, setLoaderCheck] = useState(false);
  const [vendorAllData, setVendorAllData] = useState([]);

  useEffect(() => {
    VendorGetAllApi();
  }, []);

  const VendorGetAllApi = async () => {
    setLoaderCheck(false)
    try {
      const response = await getVendorAllData();
      // console.log('vendor all data',response)
      if (response?.data?.status === "success") {
        setVendorAllData(response?.data?.vendors);
        setLoaderCheck(false)
      } else {
        toast.error(response?.data?.message);
        //   setShow(true)
        setLoaderCheck(false)

      }
    } catch (error) {
      console.log(error)
      // setLoader(false)
    }
  }
  const [deletId, setDeleteId] = useState('')

  // delete vendor Api
  const deleteVendorApi = async (id) => {
    setLoaderCheck(true)
    try {
      const response = await deleteVendorById(id);
      console.log('delete resonse', response)
      if (response?.data?.status === "success") {
        toast.success(response?.data?.message);
        setLoaderCheck(false)
        VendorGetAllApi()
      } else {
        toast.error(response?.data?.message);
        setLoaderCheck(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div>
        {
          loaderCheck && (
            <LoaderIVR />
          )
        }
      </div>
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
                    <th className='no-shrink ' style={{ width: '' }}>#</th>
                    <th className='no-shrink ' style={{ width: '' }}>Vendor ID</th>
                    <th className='no-shrink ' style={{ width: '' }}>Vendor Name</th>
                    <th className='no-shrink ' style={{ width: '' }}>Email</th>
                    <th className='no-shrink ' style={{ width: '' }}>Mobile Number</th>
                    <th className='no-shrink ' style={{ width: '' }}>Created at</th>
                    <th className='no-shrink ' style={{ width: '' }}>Plan</th>
                    <th className='no-shrink ' style={{ width: '' }}>Renewal Date</th>
                    <th className='no-shrink ' style={{ width: '' }}>Status</th>
                    <th className='no-shrink ' style={{ width: '' }}>Action</th>
                  </tr>
                </thead>
                <tbody className='heading-14 align-middle greyTextColor greyText'>
                  {
                    vendorAllData?.map((row, index) => (
                      <tr key={row.id} className='' style={{ color: "#797D8C", fontSize: '14px', border: 'none', backgroundColor: index % 2 === 0 ? "rgba(249, 249, 249, 1)" : "transparent" }}>
                        <td className=' greyText pe-0 py-2 no-shrink '>{index + 1}</td>
                        <td className=' greyText pe-0 py-2  no-shrink '>{row.vendorId}</td>
                        <td className=' greyText pe-0 py-2 no-shrink '>{row.vendorName}</td>
                        <td className=' greyText pe-0 py-2 no-shrink '>{row.emailAddress}</td>
                        <td className=' greyText pe-0 py-2 no-shrink '>{row.mobileNumber}</td>
                        <td className="greyText pe-0 py-2 no-shrink">
                          {new Date(row.createdDate).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className=' greyText pe-0 py-2 no-shrink '>{row.plan ? row.plan : "N/A"}</td>
                        <td className=' greyText pe-0 py-2 no-shrink '> {new Date(row.renewalDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}</td>
                        <td className={`greyText pe-0 py-2 no-shrink ${row.status ? 'text-success' : 'text-danger'}`}>{row.status ? 'Active' : 'Inactive'}</td>
                        <td className=' greyText pe-0 py-2 no-shrink '>
                          <div class=" d-flex  ">
                            <Link to={`/updatevendor/${row.id}`}>
                              <div className=''>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M18 9.18943V18H0V0.37885H9V2.14097H1.80001V16.2379H16.2V9.18943H18ZM6.30001 9.46255L13.5198 2.38061L14.9184 4.17886L7.61311 11.8326H6.30001V9.46255ZM4.5 13.5947H8.3844L17.3007 4.18061L13.5684 0L4.5 8.71894V13.5947Z" fill="#4E5586" />
                                </svg>
                              </div>
                            </Link>
                            <div className='ms-4' onClick={(e) => deleteVendorApi(row.id)}>
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.75 8.46436V13.6072" stroke="#F16145" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.75 8.46436V13.6072" stroke="#F16145" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M0.75 4.17871H18.75" stroke="#F16145" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.75 4.17871H9.75H15.75V15.6277C15.75 17.3522 14.4069 18.7501 12.75 18.7501H6.75C5.09315 18.7501 3.75 17.3522 3.75 15.6277V4.17871Z" stroke="#F16145" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.75 2.46429C5.75 1.51751 6.94391 0.75 8.41667 0.75H11.0833C12.5561 0.75 13.75 1.51751 13.75 2.46429V4.17857H5.75V2.46429Z" stroke="#F16145" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* modal  */}
        <div class="modal " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content orderModal p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                      <svg width="24" height="24" viewBox="0 0 21 20" fill="none">
                        <path d="M0 16L0.5 14H6L5.5 16H0ZM2 12L2.5 10H9L8.5 12H2ZM5 20C4.45 20 3.97 19.80 3.58 19.41C3.19 19.02 3 18.55 3 18H17.57L19.05 6.02H4.5C4.56 5.45 4.78 4.97 5.15 4.58C5.51 4.19 5.96 4 6.5 4H19C19.6 4.01 20.1 4.25 20.5 4.7C20.9 5.15 21.05 5.67 20.97 6.27L19.47 18.27C19.40 18.77 19.18 19.18 18.81 19.51C18.43 19.83 18 20 17.5 20H5Z" fill="#008479" />
                      </svg>
                      <h4 className="mb-0 fw-bold">Order Summary</h4>
                    </div>
              {/* BUTTONS */}
              <div className="text-center mt-4">
                <button type='submit' className="btn paymentBtn" >Click</button>
                <button type='button' className="btn cancelBtn ms-3" data-bs-dismiss="modal" >Cancel</button>
              </div>

            </div>
          </div>
        </div>

        {/* modal  */}
      </div>
    </Container>
  )
}

export default vendormanagement
