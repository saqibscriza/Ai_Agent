import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
.fontSize{
    font-size: 16px;
}
.btn-bg-purple{
    background-color: rgba(78, 85, 134, 1);
    border: 1px solid rgba(78, 85, 134, 1);
}
.btn-bg-white{
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(236, 235, 243, 1);
}
.profile{
    /* border: 2px solid red; */
    height: 100%;
    background-color: rgba(245, 243, 255, 1);
    border-radius: 4px 4px 0px 0px;
}
.image-wrapper {
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.camera-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #888fc1;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

 @media (max-width: 575px) {
  .mt-margin-responsive {
  }
}
`
const dashboardProfile = () => {
    return (
        <Container>
            <div className='profile-responsive'>
                <div className="row ">
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div className='profile '>
    
                            <div className="text-center pt-4">
                                <div className="image-wrapper ">
                                    <img
                                        src="public/Image/Profile icon.svg"
                                        alt="Profile"
                                        className="profile-img"
                                    />
                                    <label htmlFor="profileUpload" className="camera-icon">
                                        📷
                                    </label>
                                    <input
                                        id="profileUpload"
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={(e) => console.log(e.target.files[0])}
                                    />
                                </div>

                                <div className="mt-3">
                                    <p className="mb-0" style={{ fontSize: "25px", color: "rgba(78, 85, 134, 1)" }}>
                                        Danielle Campbell
                                    </p>
                                    <p style={{ fontSize: "20px" }}>Admin</p>
                                </div>

                                <hr className="mx-4 mt-4" style={{ color: "#aaa" }} />
                            </div>

                            <div className="fontSize16">
                                <div className="row mt-4">
                                    <div className="col-lg-5 col-md-6 col-sm-12 text-start" style={{ paddingLeft: '30px' }}>
                                        <p style={{ color: 'rgba(143, 143, 143, 1)' }}>Email</p>
                                    </div>
                                    <div className="col-lg-1 col-md-6 col-sm-12">:</div>
                                    <div className="col-lg-5 col-md-6 col-sm-12  pe-0">danielle@gmail.com</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                                        <p style={{ color: 'rgba(143, 143, 143, 1)' }}>Phone Number</p>
                                    </div>
                                    <div className="col-lg-1 col-md-6 col-sm-12">:</div>
                                    <div className="col-lg-5 col-md-6 col-sm-12  pe-0">9999998326</div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-12 text-center">
                                        <p style={{ color: 'rgba(143, 143, 143, 1)' }}>Address Details</p>
                                    </div>
                                    <div className="col-lg-1 col-md-6 col-sm-12">:</div>
                                    <div className="col-lg-5 col-md-6 col-sm-12  pe-0">Logix Park, Sector - 16
                                        Noida, UP - 201002</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 ">
                        <div>
                            <p style={{ fontSize: '20px' }}>Basic Information</p>
                        </div>
                        <div className=' me-3'>
                            <div className="row fontSize">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                                        <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="12/01/12" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                                        <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Campbell" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                        <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="9999999999" />
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">Gender</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct Gender--</option>
                                            <option value="1">Female</option>
                                            <option value="2">Male</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Employee ID</label>
                                        <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="34299" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Date of Birth</label>
                                        <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="21/11/25" />
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">Status</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct Status--</option>
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">Marital Status</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct Role--</option>
                                            <option value="1">Admin</option>
                                            <option value="2">Staff</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">Role</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct Status--</option>
                                            <option value="1">Married</option>
                                            <option value="2">UnMarried</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>


                            </div>
                            <div className="row fontSize mt-3">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Blood Group</label>
                                        <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="O+" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Address Line 1</label>
                                        <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Address Line 2</label>
                                        <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row fontSize ">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">State / Province</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct State--</option>
                                            <option value="1">Active</option>
                                            <option value="2">Inactive</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">City</label>
                                        <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Noida" />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Pin Code</label>
                                        <input type="number" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="121002" />
                                    </div>
                                </div>
                            </div>
                            <div className="row fontSize ">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">Nationality</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct Nationality--</option>
                                            <option value="1">Indian</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div>
                                        <label htmlFor="">Religion</label>
                                        <select class="form-select form-select-sm mt-2" aria-label="Default select example">
                                            <option selected>--Selelct Religion--</option>
                                            <option value="1">Hindu</option>
                                            <option value="3">Muslim</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className='d-flex justify-content-center mt-4 '>
                                    <button type="button" class="btn btn-primary btn-bg-purple">Update Profile</button>
                                    <Link to="/">
                                        <button type="button" class="btn btn-primary ms-2 btn-bg-white">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default dashboardProfile
