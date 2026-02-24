import React, { useEffect, useState } from 'react'
import { Link, Links } from 'react-router-dom'
import { GetAllAgentDataApi } from '../../../Utils/Apis.jsx';
import LoaderIVR from '../../../Loader/LoaderIVR.jsx';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  .breadcrumm{
  font-size: 14px;
  background: #F9F9F9;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.my-dropdown a:hover {
  background-color: #aaa !important;
}
.table-row {
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.my-dropdown .dropdown-item:hover {
  background-color: #aaa !important;
  color: #fff !important; /* optional for better contrast */
}

.table-row:hover {
  background-color: #eef2ff !important;
  cursor: pointer;
}

.my-dropdown a,
.my-dropdown a:hover,
.my-dropdown a:focus,
.my-dropdown a:active,
.my-dropdown a:visited {
  text-decoration: none !important;
  color: #797D8C !important;
  background: transparent !important;
  outline: none !important;
  box-shadow: none !important;
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

const allData = [
  {
    "id": 1,
    "name": "Aman Sharma",
    "role": "Support Agent",
    "department": "Customer Care"
  },
  {
    "id": 2,
    "name": "Rohit Verma",
    "role": "Sales Agent",
    "department": "Sales"
  },
  {
    "id": 3,
    "name": "Neha Gupta",
    "role": "HR Executive",
    "department": "Human Resources"
  },
  {
    "id": 4,
    "name": "Priya Singh",
    "role": "Marketing Agent",
    "department": "Marketing"
  },
  {
    "id": 5,
    "name": "Arjun Mehta",
    "role": "Technical Agent",
    "department": "IT Support"
  }
]


const agent = () => {

  const [getAllData, setGetAllData] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [loaderCheck, setLoaderCheck] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    AgentGetAllDataApi()
  }, [])

  const AgentGetAllDataApi = async () => {
    setLoaderCheck(false)
    try {
      const response = await GetAllAgentDataApi();
      console.log('agent get all data', response)
      if (response?.data?.status === "success") {
        setGetAllData(response?.data?.agents);
        setLoaderCheck(false)
      } else {
        toast.error(response?.data?.message);
        // setShow(true)
        setLoaderCheck(false)
      }
    } catch (error) {
      console.log(error)
      // setLoader(false)
    }
  }

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
        {/* <div className='breadcrumm p-1 px-3'>
          <div className="row mt-margin-responsive pt-2">
            <nav
              style={{
                "--bs-breadcrumb-divider": "'>'"
              }}
              aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item my-anchor" style={{ cursor: 'none' }}><a href="#">Home</a></li>
                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Agent</li>
              </ol>
            </nav>
          </div>
          <div className="row" style={{ marginTop: '-10px' }}>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className='' style={{ fontSize: "16px" }}>
                <p>Create and manage your AI agents</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className='d-flex breadcrmBtn ' style={{ marginTop: '-8px' }}>
                <div>
                  <button type="button" class="btn btn-md  playground me-1" >Playground</button>
                </div>
                <div>
                  <Link to="/addagentindustry">
                    <button type="button" className="btn newAgent">
                      + New Agent
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className='d-flex breadcrmBtn me-3 mt-2' style={{ marginTop: '' }}>
          <div>
            <button type="button" className="btn btn-md  playground me-1" >Playground</button>
          </div>
          <div>
            <Link to="/addagentindustry">
              <button type="button" className="btn newAgent">
                + New Agent
              </button>
            </Link>
          </div>
        </div>

        <div className=''>
          <div className='mt-4' style={{ color: '#7162DB', fontSize: '16px' }}>
            <p className='pt-3'>Agent Details</p>
            <div className="table-container px-3   table-responsive">
              <table className="table table-sm table-fixed striped">
                <thead className=''>
                  <tr className=' text-color-000 ' style={{ color: '#FF7F57', fontSize: '14px' }}>
                    <th className='no-shrink ' style={{ width: '100%' }}>Name</th>
                    <th className='no-shrink ' style={{ width: '100%' }}>Created by</th>
                    <th className='no-shrink ' style={{ width: '100%' }}>Created at </th>
                    <th className='no-shrink ' style={{ width: '100%' }}>Status </th>
                    <th className='no-shrink ' style={{ width: '30%' }}>Action</th>
                  </tr>
                </thead>
                <tbody className='heading-14 align-middle greyTextColor greyText' >
                  {/* {getAllData?.map((data, index) => {
                    const isPublished = data?.status === "Published";

                    return (
                      <tr
                        key={data.id}
                        className="heading-14 table-row"
                        style={{
                          color: "#797D8C",
                          fontSize: "14px",
                          border: "none",
                          backgroundColor:
                            index % 2 === 0
                              ? "rgba(249, 249, 249, 1)"
                              : "transparent",
                          cursor: isPublished ? "not-allowed" : "pointer",
                          opacity: isPublished ? 0.7 : 1
                        }}
                        onClick={() => {
                          if (!isPublished) {
                            navigate("/childagent");
                          }
                        }}
                      >
                        <td className="greyText pe-0  no-shrink">
                          {data?.name}
                        </td>

                        <td className="greyText pe-0  no-shrink">
                          {data?.vendorId}
                        </td>

                        <td className="greyText pe-0  no-shrink">
                          {data?.createdDate?.split("T")[0]}
                        </td>

                        <td className="greyText pe-0  no-shrink">
                          {data.status}
                        </td>
                        <td
                          className="greyText pe-0 no-shrink"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="dropdown">
                            <button
                              className="btn p-0 border-0 bg-transparent"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="21"
                                height="6"
                                viewBox="0 0 21 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ cursor: "pointer" }}
                              >
                                <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                                <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                                <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                              </svg>
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end">
                              {isPublished && (
                                <li>
                                  <button className="dropdown-item" type="button">
                                    UnPublish
                                  </button>
                                </li>
                              )}
                              <li>
                                <button className="dropdown-item text-danger" type="button">
                                  Delete Agent
                                </button>
                              </li>
                            </ul>
                          </div>
                        </td>
                       
                      </tr>
                    );
                  })} */}

                  {getAllData?.map((data, index) =>

                    <tr key={data.id} className='heading-14' style={{ color: "#797D8C", fontSize: '14px', border: 'none', backgroundColor: index % 2 === 0 ? "rgba(249, 249, 249, 1)" : "transparent" }} >
    
                      <td
                        className="greyText pe-0 py-2 no-shrink"
                        style={{
                          color: "#797D8C",
                          cursor: data.status !== "Published" ? "pointer" : "not-allowed",
                        }}
                      >
                        {data.status !== "Published" ? (
                          <Link
                            to="/childagent"
                            style={{ textDecoration: "none", color: "#797D8C" }}
                          >
                            <p style={{ color: '#7162DB', fontSize: '14px' }}><b>{data?.name}</b></p>
                          </Link>
                        ) : (
                          <span><p style={{ color: '#7162DB', fontSize: '14px' }}><b>{data?.name}</b></p></span>
                        )}
                      </td>
                      <td className=' greyText pe-0 py-2  no-shrink '>{data?.vendorId}</td>
                      <td className=' greyText pe-0 py-2 no-shrink '> {data?.createdDate?.split("T")[0]}</td>
                      <td className=' greyText pe-0 py-2  no-shrink '>{data.status}</td>
                      <td className=' greyText pe-0 py-2 no-shrink '>
                        <div class="dropdown my-dropdown ">
                          <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                              <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                              <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                            </svg>
                          </a>
                          <ul class="dropdown-menu">
                            {
                              data?.status === 'Published' && (
                                <li><a class="dropdown-item" href="#">{data.status === 'Published' ? "UnPublish" : ''}</a></li>
                              )
                            }
                            <li><a class="dropdown-item" href="#">Delete Agent </a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default agent
