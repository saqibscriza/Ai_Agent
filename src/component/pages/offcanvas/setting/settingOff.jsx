import React from 'react'
import styled from 'styled-components';
const Container = styled.div`

.my-form-check-input:checked {
    background-color: rgba(78, 85, 134, 1);
    border-color: rgba(78, 85, 134, 1);
}
.saveBtn{
        border: none;
    padding: 3px 12px;
    border-radius: 6px;
    font-size: 15px;
    background: linear-gradient(90deg, #454F93 0%, #5365DF 100%);;
    color: #fff;
;
}
.saveBtn2{
        border: none;
    padding: 3px 12px;
    border-radius: 6px;
    font-size: 15px;
    background-color: #fff;
    color: #000;
    border: 1px solid rgba(217, 217, 217, 1);
;
}
@media (max-width: 720px) {
 
}
`
// factorAuthentication
// defaultSharingPreferences
// manageSharing
// update
const settingOff = ({ data }) => {

    // console.log('data from another', data)

    return (
        <Container>
            <div>
                {
                    data === 'update' ? (
                        <div>
                            <div>
                                <p className='mb-0'>Update Email</p>
                            </div>
                            <hr />
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: 'rgba(173, 173, 189, 1)' }}>Email</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="rahul.sharma@gmail.com" />
                            </div>
                        </div>
                    ) : data === 'manageSharing' ? (
                        <div>
                            <div>
                                <p className='mb-0'>Manage Sharing</p>
                                <p className='mb-0' style={{ color: "rgba(153, 153, 153, 1)", fontSize: '14px' }}>Opt-in to allow your creations to be shared to the Explore library for other users to view and download.</p>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <p className='mb-0' style={{ color: "rgba(153, 153, 153, 1)", fontSize: '14px' }}>Feature</p>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <p className='mb-0' style={{ color: "rgba(153, 153, 153, 1)", fontSize: '14px' }}>Opt In</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-6">
                                    <p className='mb-0' style={{ fontSize: '14px' }}>Image & Video</p>
                                </div>
                                <div className="col-lg-6 ">
                                    <div class="form-check form-switch  d-flex justify-content-end">
                                        <input class="form-check-input my-form-check-input" style={{ height: '18px' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-lg-6">
                                    <p className='mb-0' style={{ fontSize: '14px' }}>Sound Effect</p>
                                </div>
                                <div className="col-lg-6 ">
                                    <div class="form-check form-switch  d-flex justify-content-end">
                                        <input class="form-check-input my-form-check-input" style={{ height: '18px' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-10">
                                    <button className='saveBtn'>Save Changes</button>
                                    <button className='saveBtn2 ms-2' data-bs-dismiss="offcanvas" aria-label="Close">{'<'} Back</button>
                                </div>
                            </div>
                        </div>
                    ) : data === 'defaultSharingPreferences' ? (
                        <div>
                            <div>
                                <p className='mb-0'>Default Sharing Preferences</p>
                            </div>
                            <hr />
                            <div>
                                <p className='mb-0' style={{ fontSize: '14px' }}>Choose which groups, service accounts, or users you want to share your resources with by default. When you create new resources, they will automatically be shared with these groups. The groups will have editor access to the resource.</p>
                                <p className='mb-0 mt-1' style={{ fontSize: '14px' }}>No options available for sharing. Please contact your workspace admin to set up groups.</p>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-10">
                                    <button className='saveBtn'>Save Changes</button>
                                    <button className='saveBtn2 ms-2' data-bs-dismiss="offcanvas" aria-label="Close">{'<'} Back</button>
                                </div>
                            </div>
                        </div>
                    ) : data === 'factorAuthentication' ? (
                        <div>
                            <div>
                                <p className='mb-0'>Add Two-Factor Authentication</p>
                                <p className='mb-0' style={{ color: "rgba(153, 153, 153, 1)", fontSize: '14px' }}>Scan the QR code with your authenticator app and enter the verification code below.</p>
                            </div>
                            <hr />
                            <div className='d-flex justify-content-center'>
                                <img src="./Image/image 26.svg" alt="qr" className='img-fluid' />
                            </div>
                            <div>
                                <div className='mt-4' style={{ padding: '15px', backgroundColor: 'rgba(228, 231, 235, 1)', borderRadius: '5px' }}>
                                    <p className='mb-0'>Note</p>
                                    <p className='mb-0' style={{ color: "rgba(153, 153, 153, 1)", fontSize: '14px' }}>If you can't scan the QR code, you can manually enter this code in your authenticator app:</p>
                                </div>
                            </div>
                            <div class="mb-3 mt-3">
                                <label for="exampleFormControlInput1" class="form-label" style={{ color: 'rgba(173, 173, 189, 1)' }}>Verification Code</label>
                                <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter code from your authenticator app" />
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-10">
                                    <button className='saveBtn'>Verify & Enable</button>
                                    <button className='saveBtn2 ms-2' data-bs-dismiss="offcanvas" aria-label="Close">{'<'} Back</button>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </Container>
    )
}

export default settingOff
