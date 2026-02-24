import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingOff from '../offcanvas/setting/settingOff';
import styled from 'styled-components';


const Container = styled.div`
.chooseBtn{
 border: none;
    padding: 4px 17px;
    border-radius: 8px;
    font-size: 14px;
    background-color: rgba(78, 85, 134, 1);
    color: #fff;
}
.mainPage p{
  font-size: 15px;
}
.padding-left{
  padding-left: 0px !important;
}
@media (max-width: 720px) {
  .div-flex {
    flex-direction: column;
    justify-content: start;
  }
  .responsive-mb-2{
    margin-bottom: 8px;
    margin-top: 8px;
  }
}
`
const setting = () => {
  const [select, setSelect] = useState('update')

  return (
    <Container>
      <div className='container-fluid ps-1 pe-3 mt-3'>
        <div className='breadcrumm  px-3' >
          <div className="row mt-margin-responsive" >
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <nav
                className='pt-3'
                style={{
                  "--bs-breadcrumb-divider": "'>'"
                }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Settings</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <p className='mb-0' style={{ color: "rgba(113, 98, 219, 1)", fontSize: '18px' }}>Setting Details</p>
        </div>

        {/* set start  */}
        <div className='mainPage'>
          <div className='mt-3 '>
            <div>
              <p className='mb-0 ' style={{ color: 'rgba(255, 127, 87, 1)' }}>Email Details</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0 ' style={{ color: 'rgba(121, 125, 140, 1) ' }}>rahul.sharma@scriza.in</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('update')}>Update Email</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Name</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Rahul Sharma</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn' >Update Name</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Current Plan</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Free Plan</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn'>Manage Subscription</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Share to Explore</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Opt-in to allow certain creations to be shared publicly.</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('manageSharing')}>Manage Sharing</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Default Sharing Preferences</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>No default groups selected</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('defaultSharingPreferences')}>Manage Default Sharing</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Two-Factor Authentication</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Disabled</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('factorAuthentication')}>Two-Factor Authentication</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Application language</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>English</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn'>Change Language</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Sign out of all devices</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Sign out of all devices and sessions. You will need to sign in again on all devices.</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn'>Sign Out</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Change Password</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1"> 
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Please change your password immediately to keep your account safe and secure.</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn'>Change Password</button>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1 mt-2' />
          <div className='mt-3 '>
            <div>
              <p className='mb-0' style={{ color: 'rgba(255, 127, 87, 1)' }}>Delete Password</p>
            </div>
            <hr className='my-1' />
            <div className="row mt-2 mx-1">
              <div className="col-lg-6 col-md-12 col-sm-12 padding-left">
                <p className='mb-0' style={{ color: 'rgba(121, 125, 140, 1) ' }}>Deleting your account is permanent. You will no longer be able to create an account with this email.</p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-end">
                <div>
                  <button className='chooseBtn' style={{ backgroundColor: 'rgba(241, 97, 69, 1)' }}>Delete Password</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* offcanvas  */}
        <div class="offcanvas offcanvas-end my-offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <div data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setSelect(!select)}>
              {/* <div data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setSelect(!select)}> */}
              <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.04047 0.295798C8.1342 0.388761 8.20859 0.499362 8.25936 0.621222C8.31013 0.743081 8.33627 0.873786 8.33627 1.0058C8.33627 1.13781 8.31013 1.26852 8.25936 1.39038C8.20859 1.51223 8.1342 1.62284 8.04047 1.7158L3.44047 6.3158H26.9805C27.2457 6.3158 27.5 6.42115 27.6876 6.60869C27.8751 6.79623 27.9805 7.05058 27.9805 7.3158C27.9805 7.58102 27.8751 7.83537 27.6876 8.0229C27.5 8.21044 27.2457 8.3158 26.9805 8.3158H3.46047L8.04047 12.8858C8.22672 13.0732 8.33126 13.3266 8.33126 13.5908C8.33126 13.855 8.22672 14.1084 8.04047 14.2958C7.85311 14.482 7.59965 14.5866 7.33547 14.5866C7.07128 14.5866 6.81783 14.482 6.63047 14.2958L0.270468 7.9358C0.184866 7.85367 0.116755 7.75508 0.0702248 7.64596C0.023695 7.53683 -0.000289917 7.41943 -0.000289917 7.3008C-0.000289917 7.18217 0.023695 7.06476 0.0702248 6.95564C0.116755 6.84652 0.184866 6.74793 0.270468 6.6658L6.62047 0.295798C6.71343 0.20207 6.82403 0.127676 6.94589 0.0769072C7.06775 0.0261385 7.19846 0 7.33047 0C7.46248 0 7.59319 0.0261385 7.71504 0.0769072C7.8369 0.127676 7.94751 0.20207 8.04047 0.295798Z" fill="#008479" />
              </svg>
              <span className='ms-3'></span>
            </div>
            <p className='mb-0'>Setting</p>
          </div>

          <hr className='mx-3 my-0' />
          <div class="offcanvas-body">
            <SettingOff data={select} />
          </div>
        </div>
        {/* offcanvas  */}

      </div>
    </Container>
  )
}

export default setting
