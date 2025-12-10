import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import CallMonitoring from '../offcanvas/callMonitoring/callMonitoringOff';

const Container = styled.div`
   .div-flex{
  display: flex;
}
.useVoice{
  background: #FF7F57;
    color: #FFFFFF;
    border-radius: 10px;
    padding: 5px 8px;
    width: 71%;

}
.sucessTable{
    background-color: #37C07E;
    color: #fff;
    padding: 4px 9px;
    border-radius: 22px;
    font-size: 14px;
}
.my-offcanvas{
  width: 50%
}
@media (max-width: 720px) {
  .div-flex {
    flex-direction: column;
    justify-content: start;
  }
  .responsive-mb-2{
    margin-bottom: 8px ;
    margin-top: 8px ;
  }
}


`

const callMonitoring = () => {

  const [select, setSelect] = useState(false)
  return (
    <Container>
      <div className="container-fluid ps-1 pe-3 mt-3">
        <div className='breadcrumm  px-3' style={{}}>
          <div className="row mt-margin-responsive " >
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <nav
                className='pt-4'
                style={{
                  "--bs-breadcrumb-divider": "'>'"
                }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Call Monitoring</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <div className='div-flex breadcrmBtn ' >
                <div className="searchContent me-2">
                  <div className="input-group mb-3 search-bar pt-3">
                    <input type="text" className="form-control my-form-control search-input " style={{ borderRadius: "5px", padding: '6px 16px', backgroundColor: '#fff', border: '1px solid #E9E9E9' }} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                </div>

                <div className='me-2 responsive-mb-2 pt-3'>
                  <Link to="">
                    <button type="button" className="btn " style={{ border: '1px solid #E9E9E9', fontSize: '14px' }}>
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.42857H11.4285V0H0V1.42857Z" fill="#4E5586" />
                        <path d="M1.42859 4.2855H9.99998V2.85693H1.42859V4.2855Z" fill="#4E5586" />
                        <path d="M2.85718 7.14292H8.57144V5.71436H2.85718V7.14292Z" fill="#4E5586" />
                        <path d="M7.1429 9.99985H4.28577V8.57129H7.1429V9.99985Z" fill="#4E5586" />
                      </svg>
                      &nbsp;
                      Filter
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={{ color: '#7162DB', fontSize: '16px' }}>
            <p className='pt-3'><b>Conversation History</b></p>
            <div className="table-responsive px-3" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table className="table table-strip table-sm align-middle">
                <thead className=''>
                  <tr className=' text-color-000' style={{ color: '#FF7F57', fontSize: '14px' }}>
                    <th className='no-shrink ' style={{ width: '23%' }}>Date</th>
                    <th className='no-shrink ' style={{ width: '23%' }}>Agent </th>
                    <th className='no-shrink ' style={{ width: '23%' }}>Duration </th>
                    <th className='no-shrink ' style={{ width: '23%' }}>Messages</th>
                    <th className='no-shrink ' style={{ width: '' }}>Call Status</th>
                  </tr>
                </thead>
                <tbody className='heading-14 align-middle greyTextColor greyText'>
                  <tr className='heading-14' style={{ color: "#797D8C", fontSize: '14px' }}>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      Nov 7, 2025, 3:07 PM
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      Sanoj Kumar
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      0:50
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink '>
                      3
                    </td>
                    <td className=' greyText pe-0 py-2 no-shrink ' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <p className='sucessTable mb-0'>Successfull</p>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>

        {/* offcanvas  */}
        <div class="offcanvas offcanvas-end my-offcanvas" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <div data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setSelect(!select)}>
              <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.04047 0.295798C8.1342 0.388761 8.20859 0.499362 8.25936 0.621222C8.31013 0.743081 8.33627 0.873786 8.33627 1.0058C8.33627 1.13781 8.31013 1.26852 8.25936 1.39038C8.20859 1.51223 8.1342 1.62284 8.04047 1.7158L3.44047 6.3158H26.9805C27.2457 6.3158 27.5 6.42115 27.6876 6.60869C27.8751 6.79623 27.9805 7.05058 27.9805 7.3158C27.9805 7.58102 27.8751 7.83537 27.6876 8.0229C27.5 8.21044 27.2457 8.3158 26.9805 8.3158H3.46047L8.04047 12.8858C8.22672 13.0732 8.33126 13.3266 8.33126 13.5908C8.33126 13.855 8.22672 14.1084 8.04047 14.2958C7.85311 14.482 7.59965 14.5866 7.33547 14.5866C7.07128 14.5866 6.81783 14.482 6.63047 14.2958L0.270468 7.9358C0.184866 7.85367 0.116755 7.75508 0.0702248 7.64596C0.023695 7.53683 -0.000289917 7.41943 -0.000289917 7.3008C-0.000289917 7.18217 0.023695 7.06476 0.0702248 6.95564C0.116755 6.84652 0.184866 6.74793 0.270468 6.6658L6.62047 0.295798C6.71343 0.20207 6.82403 0.127676 6.94589 0.0769072C7.06775 0.0261385 7.19846 0 7.33047 0C7.46248 0 7.59319 0.0261385 7.71504 0.0769072C7.8369 0.127676 7.94751 0.20207 8.04047 0.295798Z" fill="#008479" />
              </svg>
              <span className='ms-3'></span>
            </div>
            <p className='mb-0'>Conversation with Sanoj Kumar</p>
          </div>
          <div className="row">
            <div className="col-4">

            </div>
            <div className="col-8">
              <div className='d-flex text-end justify-content-end me-3'>
                <p style={{ border: '1px solid #ECECFA', borderRadius: "36px", padding: '6px 16px', fontSize: '12px', backgroundColor:'#ECECFA' }}><span><b>Conversation ID</b></span> -  conv_9201k9ebxs78fnnahqs2d5732vba</p>
                <p>
                  <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8747 5.66675C14.8747 4.49315 13.9233 3.54175 12.7497 3.54175H7.08301C5.90941 3.54175 4.95801 4.49315 4.95801 5.66675V14.1667C4.95801 15.3404 5.90941 16.2917 7.08301 16.2917H12.7497C13.9233 16.2917 14.8747 15.3404 14.8747 14.1667V5.66675ZM13.458 5.66675C13.458 5.27555 13.1409 4.95841 12.7497 4.95841H7.08301C6.69181 4.95841 6.37467 5.27555 6.37467 5.66675V14.1667C6.37467 14.558 6.69181 14.8751 7.08301 14.8751H12.7497C13.1409 14.8751 13.458 14.558 13.458 14.1667V5.66675Z" fill="#CCCCCC" />
                    <path d="M4.25 2.12492H11.3333C11.7245 2.12492 12.0417 1.80778 12.0417 1.41659C12.0417 1.02539 11.7245 0.708252 11.3333 0.708252H4.25C3.0764 0.708252 2.125 1.65965 2.125 2.83325V12.7499C2.125 13.1411 2.44214 13.4583 2.83333 13.4583C3.22453 13.4583 3.54167 13.1411 3.54167 12.7499V2.83325C3.54167 2.44205 3.8588 2.12492 4.25 2.12492Z" fill="#CCCCCC" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
          <hr className='mx-3 mt-0' />
          <div class="offcanvas-body">
            <CallMonitoring data={select} />
          </div>
        </div>
        {/* offcanvas  */}
      </div>

    </Container>
  )
}

export default callMonitoring
