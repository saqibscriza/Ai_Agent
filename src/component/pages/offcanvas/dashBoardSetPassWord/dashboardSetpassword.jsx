import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
.progress-container {
  display: flex;
  align-items: center;
  width: 100%;
}
.btn-bg-purple{
background: linear-gradient(90deg, #454F93 0%, #5365DF 100%);;
    border: 1px solid rgba(78, 85, 134, 1);
}

.btn-bg-white{
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(236, 235, 243, 1);
    padding: 6px 20px;
}
`   

const dashboardSetpassword = () => {
    return (
        <Container>
            <div className="input " >
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Old Password</label>
                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Old Password" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">New Password</label>
                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter New Password" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Confirm Password" />
                </div>
                <div className='d-flex mt-4 ' style={{ fontSize: '14px' }}>
                    <button type="button" class="btn btn-primary btn-bg-purple">Change Password</button>
                    <Link >
                        <button type="button" class="btn btn-primary ms-2 btn-bg-white" data-bs-dismiss="offcanvas" aria-label="Close">{' < '} &nbsp; Back</button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default dashboardSetpassword
