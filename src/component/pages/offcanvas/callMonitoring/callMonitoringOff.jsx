import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
.activeBroder {
  border-bottom: 2px solid #FF8057;
  padding-bottom: 11px;
  width: 100%;
  display: flex;         /* keeps full width and center content */
  align-items: center;
}

   @media (max-width: 991px) {
    .my-active-navbar {
    margin-top: 8px;  
    }
}
.progress-container {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Background bar */
.progress-bar {
  width: 100%;
  height: 6px;
  background-color: #e5e5e5;     
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background-color: #4E5586;      
  border-radius: 10px;
  position: relative;
  transition: width 0.3s ease-in-out; 
}

.progress-circle {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(50%, -50%);
  width: 12px;
  height: 12px;
  background-color: #4E5586;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 4px rgba(0,0,0,0.3);
}

.progress-text {
  margin-left: 10px;
  font-weight: 600;
}
.my-form-check-input{
    background-color: #4E5586 !important;
    border-color: #4E5586 ;
}
`

const callMonitoringOff = () => {
    const [active, setInActive] = useState('Default')

    return (
        <Container>
            <div>
                <div>
                    <div className="row">

                        <div className="col-lg-7 col-md-12 col-sm-12">
                            <div>
                                <p className='mb-0'>Conversation Details</p>
                            </div>
                            <hr />
                            <div>
                                <img src="./Image/61672 1.svg" alt="" />
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className='d-flex gap-3'>
                                            <div>
                                                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M15 30C23.2842 30 30 23.2842 30 15C30 6.71572 23.2842 0 15 0C6.71572 0 0 6.71572 0 15C0 23.2842 6.71572 30 15 30Z" fill="#5041BC" />
                                                    <path d="M19.8994 16.3153L12.8969 20.5357C11.7697 21.215 10.3845 20.3308 10.3845 18.9319V10.491C10.3845 9.09219 11.7697 8.20798 12.8969 8.88732L19.8994 13.1077C21.0591 13.8068 21.0591 15.6162 19.8994 16.3153Z" fill="#5041BC" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p>1.0x</p>
                                            </div>
                                            <div>
                                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.3125 0H4.25L0 4.30769L4.25 8.61539H5.3125V5.38462H11.6875C13.448 5.38462 14.875 6.83109 14.875 8.61539C14.875 10.3997 13.448 11.8462 11.6875 11.8462H4.25V14H11.6875C14.6215 14 17 11.5892 17 8.61539C17 5.64155 14.6215 3.23077 11.6875 3.23077H5.3125V0Z" fill="black" />
                                                </svg>
                                            </div>
                                            <div>
                                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.6875 0H12.75L17 4.30769L12.75 8.61539H11.6875V5.38462H5.3125C3.55204 5.38462 2.125 6.83109 2.125 8.61539C2.125 10.3997 3.55204 11.8462 5.3125 11.8462H12.75V14H5.3125C2.37851 14 0 11.5892 0 8.61539C0 5.64155 2.37851 3.23077 5.3125 3.23077H11.6875V0Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 ">
                                        <div className='d-flex justify-content-end gap-3'>
                                            <div>
                                                <p>0.00 / 0.10</p>
                                            </div>
                                            <div>
                                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="15" cy="15" r="15" fill="#D9D9D9" />
                                                    <path d="M14.6174 16.6216C15.5087 16.6216 16.234 15.8963 16.234 15.005C16.234 14.1137 15.5087 13.3884 14.6174 13.3884C13.7261 13.3884 13.0007 14.1137 13.0007 15.005C13.0007 15.8963 13.7261 16.6216 14.6174 16.6216Z" fill="black" />
                                                    <path d="M20.0051 16.6216C20.8964 16.6216 21.6217 15.8963 21.6217 15.005C21.6217 14.1137 20.8964 13.3884 20.0051 13.3884C19.1138 13.3884 18.3884 14.1137 18.3884 15.005C18.3884 15.8963 19.1138 16.6216 20.0051 16.6216Z" fill="black" />
                                                    <path d="M9.2282 16.6216C10.1195 16.6216 10.8448 15.8963 10.8448 15.005C10.8448 14.1137 10.1195 13.3884 9.2282 13.3884C8.3369 13.3884 7.61157 14.1137 7.61157 15.005C7.61157 15.8963 8.3369 16.6216 9.2282 16.6216Z" fill="black" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ border: "1px solid #E4E7EB", padding: '16px', borderRadius: '8px', marginTop: '12px', backgroundColor: "#FDF8EF" }}>
                                    <div className="row">
                                        <div className="col-lg-1 col-md-12 col-sm-12">
                                            <div>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 15.75C10.4142 15.75 10.75 15.4142 10.75 15V9C10.75 8.5858 10.4142 8.25 10 8.25C9.5858 8.25 9.25 8.5858 9.25 9V15C9.25 15.4142 9.5858 15.75 10 15.75ZM10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.4477 7 9 6.55228 9 6C9 5.44772 9.4477 5 10 5Z" fill="#646A93" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="col-lg-11 col-md-12 col-sm-12">
                                            <div>
                                                <p className='mb-0' style={{ color: '#4E5586', fontSize: '14px' }}>You can now ensure your agent returns high quality responses to conversations like this
                                                    one. Try Tests in the Transcription tab.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* dynamic slide check area */}
                            <div className='mt-3'>
                                <div className='ps-4' style={{ backgroundColor: '#F1F1F9', paddingTop: '12px' }}>
                                    <div className="row">
                                        <div className={`col-4`}>
                                            <div className={active === 'Default' ? 'activeBroder' : ''} style={{ cursor: 'pointer' }} onClick={() => setInActive('Default')}>
                                                Overview
                                            </div>
                                        </div>
                                        <div className={`col-4`}>
                                            <div className={active === 'Custom' ? 'activeBroder' : ''} style={{ cursor: 'pointer' }} onClick={() => setInActive('Custom')}>
                                                Transcription
                                            </div>
                                        </div>
                                        <div className={`col-4`}>
                                            <div className={active === 'Disabled' ? 'activeBroder' : ''} style={{ cursor: 'pointer' }} onClick={() => setInActive('Disabled')}>
                                                Client Data
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        active === "Default" && (
                                            <>
                                                <div className='mt-3'>
                                                    <p className='mb-0' style={{ fontSize: "18px" }}><b>Summary</b></p>
                                                    <p style={{ fontSize: "14px", color: "#4E5586" }}>The user initiated a conversation, and the agent responded, offering assistance.</p>
                                                </div>
                                                <hr />
                                                <div>
                                                    <div className="row" style={{ fontSize: "14px" }}>
                                                        <div className="col-lg-5 col-md-12 col-sm-12">
                                                            <p className='mb-0'>Call Status</p>
                                                        </div>
                                                        <div className="col-lg-7 col-md-12 col-sm-12">
                                                            <p className='mb-0' style={{ color: "#43BE83" }}>Successful</p>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-3" style={{ fontSize: "14px" }}>
                                                        <div className="col-lg-5 col-md-12 col-sm-12">
                                                            <p className='mb-0'>User ID</p>
                                                        </div>
                                                        <div className="col-lg-7 col-md-12 col-sm-12">
                                                            <p className='mb-0' >39587458</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                </div>
                                            </>
                                        )
                                    }

                                    {/* Custom Area  */}

                                    {
                                        active === "Custom" && (
                                            <>
                                                <div>
                                                    <div>
                                                        <div className='mt-3' style={{ fontSize: '14px' }}>
                                                            <div className="row">
                                                                <div className="col-lg-1 col-md-12 col-sm-12">
                                                                    <div>
                                                                        <img src="./Image/Ellipse 172.svg" alt="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-11 col-md-12 col-sm-12 ps-4">
                                                                    <div className='mb-1'>
                                                                        <p className='mb-0'>Sanoj Kumar</p>
                                                                    </div>
                                                                    <div className='me-2' style={{ border: "2px solid #D9D9D9", padding: '5px', borderRadius: '5px' }}>
                                                                        <p className='mb-0' style={{ color: '#4E5586' }}>Hi, thanks for contacting us! How can I help you today? <br /> <span style={{ color: '#9E9E9E' }}>0.00</span></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row mt-2">
                                                                <div className="col-lg-11 col-md-12 col-sm-12 ps-4">
                                                                    <div className='me-2' style={{ border: "2px solid #D9D9D9", padding: '5px', borderRadius: '5px', backgroundColor: '#DDD9F5' }}>
                                                                        <p className='mb-0' style={{ color: '#4E5586' }}>Hi, thanks for contacting us! How can I help you today? <br /> <span style={{ color: '#9E9E9E' }}>0.00</span></p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-1 col-md-12 col-sm-12">
                                                                    <div className='me-2 mt-3' >
                                                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M8.72692 8.39057C8.67335 8.40086 8.62372 8.42514 8.58341 8.46078C8.54309 8.49641 8.51363 8.54204 8.49822 8.59271C8.48281 8.64339 8.48204 8.69718 8.49599 8.74825C8.50994 8.79932 8.53808 8.84573 8.57735 8.88243L10.2226 10.5027C10.2651 10.5419 10.299 10.589 10.3221 10.6412C10.3453 10.6934 10.3572 10.7497 10.3572 10.8065C10.3572 10.8633 10.3453 10.9195 10.3221 10.9717C10.299 11.024 10.2651 11.0711 10.2226 11.1103L9.5944 11.7179C9.55389 11.759 9.50516 11.7918 9.45117 11.8141C9.39718 11.8365 9.33905 11.8481 9.28031 11.8481C9.22157 11.8481 9.16344 11.8365 9.10945 11.8141C9.05546 11.7918 9.00673 11.759 8.96622 11.7179L4.92795 7.81191C4.88541 7.77273 4.85155 7.7256 4.82841 7.67337C4.80527 7.62115 4.79334 7.56493 4.79334 7.50811C4.79334 7.4513 4.80527 7.39507 4.82841 7.34285C4.85155 7.29063 4.88541 7.2435 4.92795 7.20432L8.96622 3.29836C9.00673 3.25722 9.05546 3.22446 9.10945 3.20208C9.16344 3.1797 9.22157 3.16816 9.28031 3.16816C9.33905 3.16816 9.39718 3.1797 9.45117 3.20208C9.50516 3.22446 9.55389 3.25722 9.5944 3.29836L10.2226 3.93489C10.2651 3.97407 10.299 4.0212 10.3221 4.07342C10.3453 4.12565 10.3572 4.18187 10.3572 4.23868C10.3572 4.2955 10.3453 4.35172 10.3221 4.40394C10.299 4.45617 10.2651 4.5033 10.2226 4.54248L8.54744 6.16273C8.36796 6.33633 8.697 6.65459 8.697 6.65459C10.4698 6.68493 12.1836 7.27537 13.5771 8.33584C14.9705 9.3963 15.967 10.8686 16.4146 12.528C17.435 11.2295 17.9914 9.64541 18 8.01444C17.9701 3.52983 13.9617 0 8.99614 0C4.03055 0 0.0221858 3.55876 0.0221858 7.92764C0.0385027 9.27784 0.409041 10.6019 1.09906 11.7757C1.15769 11.8651 1.19601 11.9654 1.21148 12.0702C1.22695 12.1749 1.21922 12.2817 1.1888 12.3833L0.0221858 15.4792C-0.00190513 15.5437 -0.00648573 15.6136 0.00897937 15.6807C0.0244445 15.7477 0.0593159 15.8091 0.109517 15.8576C0.159718 15.9062 0.223173 15.9399 0.292463 15.9549C0.361753 15.9698 0.434014 15.9654 0.500797 15.9421L3.73142 14.7558C3.83576 14.7212 3.94711 14.711 4.05631 14.7261C4.16552 14.7412 4.26946 14.7811 4.35959 14.8426C5.79836 15.6071 7.41441 16.0053 9.05596 15.9999C11.1767 15.9856 13.2309 15.2825 14.889 14.0036C14.7272 12.5092 14.0162 11.1207 12.8853 10.0906C11.7544 9.0605 10.2788 8.45724 8.72692 8.39057Z" fill="#5041BC" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                    {/* Disabled Area  */}

                                    {
                                        active === "Disabled" && (
                                            <>
                                                <div className='mt-3'>
                                                    <div>
                                                        <p className='mb-0' style={{ fontSize: '18px' }}>Client overrides</p>
                                                    </div>
                                                    <hr className='my-1'/>
                                                    <div>
                                                        <div className="row mt-2" >
                                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                                <p className='mb-0' style={{color:'#4E5586', fontSize:"15px"}}>Language</p>
                                                            </div>
                                                            <div className="col-lg-6 col-md-12 col-sm-12">
                                                                <p className='mb-0'>
                                                                    <img src="./Image/image 4.svg" alt="" /> &nbsp;
                                                                    <span>39587458</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className='mt-2'/>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>

                            {/* dynamic slide check area */}

                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12" >
                            <div >
                                <p className='mb-0'>Metadata</p>
                            </div>
                            <hr />
                            <div style={{ borderLeft: "1px solid #DEE2E7", paddingLeft: "16px" }}>

                                <div>
                                    <div className="row" style={{ fontSize: '14px' }}>
                                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                                            <p className='mb-0 ps-2' style={{ color: "#4E5586" }}>Date</p>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <p className='mb-0'>Friday, 10:46 AM</p>
                                        </div>
                                    </div>
                                    <hr style={{ color: '#DEE2E7' }} />
                                    <div className="row" style={{ fontSize: '14px' }}>
                                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                                            <p className='mb-0 ps-2' style={{ color: "#4E5586" }}>Connection Duration</p>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <p className='mb-0'>0.50</p>
                                        </div>
                                    </div>
                                    <hr style={{ color: '#DEE2E7' }} />
                                    <div className="row" style={{ fontSize: '14px' }}>
                                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                                            <p className='mb-0 ps-2' style={{ color: "#4E5586" }}>Credits (call)</p>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <p className='mb-0'>30</p>
                                        </div>
                                    </div>
                                    <hr style={{ color: '#DEE2E7' }} />
                                    <div className="row" style={{ fontSize: '14px' }}>
                                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                                            <p className='mb-0 ps-2' style={{ color: "#4E5586" }}>Credits (LLM)</p>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <p className='mb-0'>1</p>
                                        </div>
                                    </div>
                                    <hr style={{ color: '#DEE2E7' }} />
                                    <div className="row" style={{ fontSize: '14px' }}>
                                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                                            <p className='mb-0 ps-2' style={{ color: "#4E5586" }}>LLM Cost</p>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                            <p className='mb-0'>$0.00019 / min <br /> Total: $0.00016</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default callMonitoringOff
