import React from 'react'
import { Link } from 'react-router-dom'

const agent = () => {
  return (
    <>
      <div className="container-fluid ps-1 pe-3 mt-3">
        <div className='breadcrumm p-1 px-3'>
          <div className="row pt-2">
            <nav
              style={{
                "--bs-breadcrumb-divider": "'>'"
              }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Agent</li>
              </ol>
            </nav>
          </div>
          <div className="row " style={{ marginTop: '-10px' }}>
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

                {/* <div><button type="button" class="btn  newAgent" ><Link to='./addagentindustry'>+ New Agent</Link></button></div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ color: '#7162DB', fontSize: '16px' }}>
            <p className='pt-3'>Agent Details</p>
            <div className="table-container px-3  table-responsive">
              <table className="table table-sm table-fixed">
                <thead className=''>
                  <tr className=' text-color-000' style={{ color: '#FF7F57' }}>
                    <th className='no-shrink ' style={{ width: '100%' }}>Name</th>
                    <th className='no-shrink ' style={{ width: '100%' }}>Created by</th>
                    <th className='no-shrink ' style={{ width: '100%' }}>Created at </th>
                    <th className='no-shrink ' style={{ width: '30%' }}>Action</th>
                  </tr>
                </thead>
                <tbody className='heading-14 align-middle greyTextColor greyText'>
                  <tr className='heading-14' style={{ color: "#797D8C" }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2  no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg></a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Conversation History</a></li>
                          <li><a class="dropdown-item" href="#"> Duplicate Agent</a></li>
                          <li><a class="dropdown-item" href="#">Unarchive Agent</a></li>
                          <li><a class="dropdown-item" href="#">Delete Agent</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='heading-14' style={{ color: "#797D8C" }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2  no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg></a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Conversation History</a></li>
                          <li><a class="dropdown-item" href="#"> Duplicate Agent</a></li>
                          <li><a class="dropdown-item" href="#">Unarchive Agent</a></li>
                          <li><a class="dropdown-item" href="#">Delete Agent</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='heading-14' style={{ color: "#797D8C" }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2  no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg></a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Conversation History</a></li>
                          <li><a class="dropdown-item" href="#"> Duplicate Agent</a></li>
                          <li><a class="dropdown-item" href="#">Unarchive Agent</a></li>
                          <li><a class="dropdown-item" href="#">Delete Agent</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr className='heading-14' style={{ color: "#797D8C" }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2  no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>My Data</td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      <div class="dropdown my-dropdown ">
                        <a class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                            <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                            <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                          </svg></a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Conversation History</a></li>
                          <li><a class="dropdown-item" href="#"> Duplicate Agent</a></li>
                          <li><a class="dropdown-item" href="#">Unarchive Agent</a></li>
                          <li><a class="dropdown-item" href="#">Delete Agent</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default agent
