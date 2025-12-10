import React from 'react'
import { Link } from 'react-router-dom'

const addVendor = () => {
    return (
        <>
            <div className="container-fluid ps-1 pe-3 mt-3">
                <div className='breadcrumm  p-1 px-3'>
                    <div className="row mt-margin-responsive pt-2">
                        <nav
                            style={{ "--bs-breadcrumb-divider": "'>'" }}
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                                <li className="breadcrumb-item my-anchor"><a href="#">Vendor Management</a></li>
                                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Add Vendor</li>
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
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div style={{ color: '#7162DB', fontSize: '16px', borderRadius: '2px' }}>
                            <p className='pt-3'><b>Add Vendor</b></p>
                        </div>
                        <div style={{ backgroundColor: '#F5F3FF', padding: '' }}>
                            <p className='p-2 ps-4'>Vendor Details</p>
                        </div>
                    </div>
                    <div className="row mx-1">
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Vendor ID</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="VEND-7682-01" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Vendor Name</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Vendor Name" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                            </div>
                        </div>

                    </div>
                    <div className="row mx-1">
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Create Date</label>
                                <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="11 October 2025" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Subscription Plan</label>
                                <select class="form-select form-select-sm   " aria-label="Default select example">
                                    <option selected>Select Plan</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Renewal Date</label>
                                <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Status</label>
                                <select class="form-select form-select-sm   " aria-label="Default select example">
                                    <option selected>Select Status</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                {/* <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Vendor Name" /> */}
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <div style={{ backgroundColor: '#F5F3FF', padding: '', borderRadius: '2px' }}>
                            <p className='p-2 ps-4'>Vendor Address Details</p>
                        </div>
                    </div>
                    <div className="row mx-1">
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Address Line 1</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Address Line 1" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Address Line 2</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Address Line 2" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Landmark</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Landmark" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">City</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter City Name" />
                            </div>
                        </div>

                    </div>
                    <div className="row mx-1">
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">District</label>
                                <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter District" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">State</label>
                                <select class="form-select form-select-sm   " aria-label="Default select example">
                                    <option selected>Select State</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Pin Code</label>
                                <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Pin Code" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 " >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Country</label>
                                <select class="form-select form-select-sm   " aria-label="Default select example">
                                    <option selected>Select Country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="row d-flex">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className=" ">
                                <Link to="" >
                                    <button
                                        type="button"
                                        className="btn btn-md playground me-1 mt-3"
                                        style={{
                                            borderRadius: "25px",
                                            padding: "7px 20px",
                                            background: "linear-gradient(90deg, #454F93 0%, #5365DF 100%)",
                                            color: "#fff",
                                            border: "none",
                                        }}
                                    >
                                        Create Vendor
                                    </button>

                                    {/* <button style={{ borderRadius: '25px', padding: '5px 20px', backgroundColor: 'background: linear-gradient(90deg, #454F93 0%, #5365DF 100%);' }} type="button" class="btn btn-md  playground  me-1 mt-3" >Create Vendor</button> */}
                                </Link>
                            </div>
                            <div className="">
                                <Link to="/vendormanagement" >
                                    <button style={{ borderRadius: '25px', padding: '6px 24px', backgroundColor: '#f8f7f7' }} type="button" class="btn btn-md  playground  me-1 mt-3" > {'<'} &nbsp; Back</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default addVendor
