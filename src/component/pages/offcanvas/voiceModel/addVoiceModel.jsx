import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
   .myBtn{
    border: 0px;
    background: #fff;
    padding: 2px 8px;
    border-radius: 18px;
    color: #ACACAC;
}

.insideBtn{
    border: 1px solid #D9D9D9;
    padding: 4px 10px;
    border-radius: 23px;
}
.generateVoicee{
    width: 94%;
    border: none;
    background-color: #4E5586;
    color: #fff;
    padding: 5px;
    border-radius: 10px;
    margin-left: 13px;
    font-size: 14px;
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
.switchBox{
    width: 3.5em;
    height: 25px;
}
.my-form-check-input:checked{
    background-color: #4E5586;
    border-color: #0d6efd;
}
.addVoiceBtn{
    border: 1px solid #D9E4F2;
    border-radius: 25px;
    padding: 2px 9px;
    font-size: 12px;
}
@media (max-width: 991px) {
.mrgn-responisve p, button{
    margin-left: 13px;
    margin-top: 5px;
}
}
`

const addVoiceModel = ({ data }) => {
    console.log('data from main', data)

    const [checked, setChecked] = useState(false);
    const [isTrue, setIsTrue] = useState(false);
    const [testCheck, setTestCheck] = useState(false);

    const [voiceRemix, setVoiceRemix] = useState(false);

    useEffect(() => {
        func()
    }, [data])

    const func = () => {
        setVoiceRemix(false)
        setChecked(false)
    }

    return (
        <Container>
            <div>
                {
                    !voiceRemix ? (
                        <div>
                            {
                                !checked ? (
                                    <div className=''>
                                        <div style={{ backgroundColor: '#EEF5FE', padding: '12px', borderRadius: '8px' }}>
                                            <div className="row">
                                                <div className="col-lg-2 pe-0">
                                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5865 9.69016L18.4588 8.81052L21.625 12.0033M15.9712 8.0612L18.4588 5.5526L21.625 8.74536M0.625 10.4525L3.48859 13.3402L5.28808 11.5255M0.625 7.19459L3.48859 10.0822L6.365 7.12726M5.73796 9.52808C6.24858 12.1202 8.50425 13.9874 11.125 13.9874C13.7457 13.9874 16.0014 12.1202 16.512 9.52808M12.4706 13.8481V18.3296C12.4706 18.491 12.3422 18.6225 12.1823 18.625H10.0677C9.90775 18.6225 9.77938 18.491 9.77938 18.3296V13.8481M11.125 0.625C13.0487 0.625 14.608 2.19749 14.608 4.13731V8.485C14.608 10.4248 13.0487 11.9973 11.125 11.9973C9.20135 11.9973 7.64196 10.4248 7.64196 8.485V4.13731C7.64196 2.19749 9.20135 0.625 11.125 0.625Z" stroke="#4E5586" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="col-lg-10 ps-0">
                                                    <div className='mrgn-responisve'>
                                                        <p className='mb-0 '><b>Voice Design</b></p>
                                                        <p style={{ fontSize: '14px ' }}>Design an entirely new voice from a text prompt</p>
                                                    </div>
                                                    <div>
                                                        <button className='myBtn' style={{ fontSize: '14px' }} onClick={() => setChecked(true)}>Less than a Minute</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-2' style={{ backgroundColor: '#F5F3FF', padding: '12px', borderRadius: '8px' }}>
                                            <div className="row">
                                                <div className="col-lg-2 pe-0">
                                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5865 9.69016L18.4588 8.81052L21.625 12.0033M15.9712 8.0612L18.4588 5.5526L21.625 8.74536M0.625 10.4525L3.48859 13.3402L5.28808 11.5255M0.625 7.19459L3.48859 10.0822L6.365 7.12726M5.73796 9.52808C6.24858 12.1202 8.50425 13.9874 11.125 13.9874C13.7457 13.9874 16.0014 12.1202 16.512 9.52808M12.4706 13.8481V18.3296C12.4706 18.491 12.3422 18.6225 12.1823 18.625H10.0677C9.90775 18.6225 9.77938 18.491 9.77938 18.3296V13.8481M11.125 0.625C13.0487 0.625 14.608 2.19749 14.608 4.13731V8.485C14.608 10.4248 13.0487 11.9973 11.125 11.9973C9.20135 11.9973 7.64196 10.4248 7.64196 8.485V4.13731C7.64196 2.19749 9.20135 0.625 11.125 0.625Z" stroke="#4E5586" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="col-lg-10 ps-0" >
                                                    <div className='mrgn-responisve'>
                                                        <p className='mb-0'><b>Instant Voice Clone</b></p>
                                                        <p style={{ fontSize: '14px' }}>Clone your voice with only 10 Seconds of Audio</p>
                                                    </div>
                                                    <div>
                                                        <button className='myBtn' style={{ fontSize: '14px' }}>2 Minutes</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className='ps-0' style={{ backgroundColor: '#EAE5FF' }} />
                                            <div className="row p-2">
                                                <div className="col-lg-3" style={{ borderRight: "1px solid #aaa" }}>
                                                    <div>
                                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.5" d="M0 18.39C0 14.8028 0 13.0092 1.11442 11.8947C2.22885 10.7803 4.02248 10.7803 7.60976 10.7803H17.7561C21.3433 10.7803 23.137 10.7803 24.2514 11.8947C25.3659 13.0092 25.3659 14.8028 25.3659 18.39C25.3659 21.9773 25.3659 23.7709 24.2514 24.8853C23.137 25.9998 21.3433 25.9998 17.7561 25.9998H7.60976C4.02248 25.9998 2.22885 25.9998 1.11442 24.8853C0 23.7709 0 21.9773 0 18.39Z" fill="#1C274C" />
                                                            <path d="M13.3172 15.5367C13.3172 15.0113 12.8913 14.5854 12.366 14.5854C11.8407 14.5854 11.4148 15.0113 11.4148 15.5367V20.6098C11.4148 21.1352 11.8407 21.5611 12.366 21.5611C12.8913 21.5611 13.3172 21.1352 13.3172 20.6098V15.5367Z" fill="#1C274C" />
                                                            <path d="M5.70737 8.2648C5.70737 4.71462 8.68851 1.83662 12.3659 1.83662C16.0433 1.83662 19.0244 4.71462 19.0244 8.2648V10.718C19.7441 10.7245 20.3733 10.7406 20.9269 10.7805V8.2648C20.9269 3.70028 17.094 0 12.3659 0C7.63781 0 3.80493 3.70028 3.80493 8.2648V10.7805C4.35855 10.7406 4.98779 10.7245 5.70737 10.718V8.2648Z" fill="#1C274C" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div style={{ fontSize: "14px" }}>
                                                        <p className='mb-0'>You need to be on at least the Starter plan to use Instant Voice Cloning</p>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <button className='myBtn' style={{ fontSize: '14px', backgroundColor: '#4E5586', borderRadius: '5px', color: '#fff' }}>Subscribe</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-2' style={{ backgroundColor: '#EEF5FE', padding: '12px', borderRadius: '8px' }}>
                                            <div className="row">
                                                <div className="col-lg-2 pe-0">
                                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5865 9.69016L18.4588 8.81052L21.625 12.0033M15.9712 8.0612L18.4588 5.5526L21.625 8.74536M0.625 10.4525L3.48859 13.3402L5.28808 11.5255M0.625 7.19459L3.48859 10.0822L6.365 7.12726M5.73796 9.52808C6.24858 12.1202 8.50425 13.9874 11.125 13.9874C13.7457 13.9874 16.0014 12.1202 16.512 9.52808M12.4706 13.8481V18.3296C12.4706 18.491 12.3422 18.6225 12.1823 18.625H10.0677C9.90775 18.6225 9.77938 18.491 9.77938 18.3296V13.8481M11.125 0.625C13.0487 0.625 14.608 2.19749 14.608 4.13731V8.485C14.608 10.4248 13.0487 11.9973 11.125 11.9973C9.20135 11.9973 7.64196 10.4248 7.64196 8.485V4.13731C7.64196 2.19749 9.20135 0.625 11.125 0.625Z" stroke="#4E5586" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="col-lg-10 ps-0" >
                                                    <div className='mrgn-responisve'>
                                                        <p className='mb-0'><b>Professional Voice Clone</b></p>
                                                        <p style={{ fontSize: '14px' }}>Create the most realistic digital replica of your
                                                            voice. Requires at least 30 minutes of clean audio.</p>
                                                    </div>
                                                    <div>
                                                        <button className='myBtn' style={{ fontSize: '14px' }}>5 Minutes</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className='ps-0' style={{ backgroundColor: '#EAE5FF' }} />
                                            <div className="row p-2">
                                                <div className="col-lg-3" style={{ borderRight: "1px solid #aaa" }}>
                                                    <div>
                                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.5" d="M0 18.39C0 14.8028 0 13.0092 1.11442 11.8947C2.22885 10.7803 4.02248 10.7803 7.60976 10.7803H17.7561C21.3433 10.7803 23.137 10.7803 24.2514 11.8947C25.3659 13.0092 25.3659 14.8028 25.3659 18.39C25.3659 21.9773 25.3659 23.7709 24.2514 24.8853C23.137 25.9998 21.3433 25.9998 17.7561 25.9998H7.60976C4.02248 25.9998 2.22885 25.9998 1.11442 24.8853C0 23.7709 0 21.9773 0 18.39Z" fill="#1C274C" />
                                                            <path d="M13.3172 15.5367C13.3172 15.0113 12.8913 14.5854 12.366 14.5854C11.8407 14.5854 11.4148 15.0113 11.4148 15.5367V20.6098C11.4148 21.1352 11.8407 21.5611 12.366 21.5611C12.8913 21.5611 13.3172 21.1352 13.3172 20.6098V15.5367Z" fill="#1C274C" />
                                                            <path d="M5.70737 8.2648C5.70737 4.71462 8.68851 1.83662 12.3659 1.83662C16.0433 1.83662 19.0244 4.71462 19.0244 8.2648V10.718C19.7441 10.7245 20.3733 10.7406 20.9269 10.7805V8.2648C20.9269 3.70028 17.094 0 12.3659 0C7.63781 0 3.80493 3.70028 3.80493 8.2648V10.7805C4.35855 10.7406 4.98779 10.7245 5.70737 10.718V8.2648Z" fill="#1C274C" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="col-lg-9">
                                                    <div style={{ fontSize: "14px" }}>
                                                        <p className='mb-0'>You need to be on at least the Creator plan to use Professional Voice Cloning</p>
                                                    </div>
                                                    <div className='mt-2'>
                                                        <button className='myBtn' style={{ fontSize: '14px', backgroundColor: '#4E5586', borderRadius: '5px', color: '#fff' }}>Subscribe</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-2' style={{ backgroundColor: '#F5F3FF', padding: '12px', borderRadius: '8px' }}>
                                            <div className="row">
                                                <div className="col-lg-2 pe-0">
                                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.5865 9.69016L18.4588 8.81052L21.625 12.0033M15.9712 8.0612L18.4588 5.5526L21.625 8.74536M0.625 10.4525L3.48859 13.3402L5.28808 11.5255M0.625 7.19459L3.48859 10.0822L6.365 7.12726M5.73796 9.52808C6.24858 12.1202 8.50425 13.9874 11.125 13.9874C13.7457 13.9874 16.0014 12.1202 16.512 9.52808M12.4706 13.8481V18.3296C12.4706 18.491 12.3422 18.6225 12.1823 18.625H10.0677C9.90775 18.6225 9.77938 18.491 9.77938 18.3296V13.8481M11.125 0.625C13.0487 0.625 14.608 2.19749 14.608 4.13731V8.485C14.608 10.4248 13.0487 11.9973 11.125 11.9973C9.20135 11.9973 7.64196 10.4248 7.64196 8.485V4.13731C7.64196 2.19749 9.20135 0.625 11.125 0.625Z" stroke="#4E5586" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                                <div className="col-lg-10 ps-0">
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-lg-6 mrgn-responisve">
                                                                <p className='mb-0 ' style={{ fontSize: '14px', }}><b>Voice Remixing (Alpha)</b></p>
                                                            </div>
                                                            <div className="col-lg-6 text-end">
                                                                <button className='myBtn' style={{ fontSize: '14px', border: '1px solid #F6D693', backgroundColor: '#FFF3DA' }}>New</button>
                                                            </div>
                                                        </div>
                                                        <div className='mrgn-responisve'>
                                                        <p style={{ fontSize: '14px' }}>Transform existing voices with text prompts to create new voices.</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className='myBtn' style={{ fontSize: '14px' }} onClick={() => setVoiceRemix(!voiceRemix)}>Less than a Minute</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                    :
                                    (
                                        <div>
                                            <div className="row ">
                                                <div className="col-lg-6 ">
                                                    <div>
                                                        <p className='mb-0'>Prompt</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 text-end">
                                                    <div>
                                                        <p className='mb-1'>Best practices &nbsp;
                                                            <span>
                                                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.75 9.75L9.75 0.75M9.75 0.75H1.65M9.75 0.75V8.85" stroke="#5041BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div>
                                                    <p className='mb-0 p-3' style={{ border: '1px solid #DEE2E7', fontSize: "14px", color: "#797D8C", borderRadius: "8px 8px 0px 0px" }}>
                                                        A deep, booming male voice of a massive evil ogre in his middle years. Thick, gravelly tone with a resonant, theatrical quality that's both menacing and absurdly silly. Speaking at a quick, excited pace with erratic bursts of maniacal energy. Perfect audio quality.
                                                    </p>
                                                </div>
                                            </div>

                                            <div style={{ border: '1px solid #DEE2E7', backgroundColor: '#F4F4F4' }}>
                                                <div className="row mt-2 mb-2">
                                                    <div className="col-lg-1">
                                                        <svg className='pt-1' width="26" height="26" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16.5" cy="16.5" r="16" fill="white" stroke="#D9D9D9" />
                                                            <path d="M7.85885 21.4292C7.85885 21.7717 7.97198 22.0681 8.19825 22.3183C8.42451 22.5686 8.70734 22.6871 9.04673 22.674H10.2158C11.0203 22.674 11.787 22.5093 12.5161 22.18C13.2452 21.8507 13.8674 21.4095 14.3828 20.8563C14.8981 20.3031 15.3192 19.6445 15.6461 18.8805C15.9729 18.1166 16.13 17.3197 16.1175 16.4899C16.1175 15.4757 16.4569 14.6064 17.1356 13.8819C17.8144 13.1575 18.6503 12.7953 19.6434 12.7953H22.0003V14.0202C22.0003 14.2968 22.0757 14.5339 22.2266 14.7315C22.3774 14.9291 22.5471 15.074 22.7357 15.1662C22.9242 15.2584 23.1442 15.2847 23.3956 15.2452C23.647 15.2057 23.8544 15.0937 24.0178 14.9093L26.3747 12.4396C26.6135 12.1762 26.7267 11.8798 26.7141 11.5506C26.7015 11.2213 26.5884 10.9315 26.3747 10.6812L24.0178 8.21157C23.8293 8.02716 23.6156 7.91521 23.3767 7.87569C23.1379 7.83618 22.9179 7.86252 22.7168 7.95472C22.5157 8.04692 22.346 8.19181 22.2077 8.38938C22.0694 8.58696 22.0003 8.81746 22.0003 9.08089V10.3256H19.6434C18.8515 10.3256 18.091 10.4902 17.3619 10.8195C16.6328 11.1488 16.0043 11.5835 15.4764 12.1235C14.9484 12.6636 14.5273 13.3221 14.2131 14.0993C13.8988 14.8764 13.748 15.6733 13.7605 16.4899C13.7605 17.5173 13.4149 18.3932 12.7235 19.1176C12.0321 19.8421 11.1962 20.2043 10.2158 20.2043H9.04673C8.71991 20.2043 8.43708 20.3228 8.19825 20.5599C7.95941 20.797 7.84628 21.0868 7.85885 21.4292ZM7.85885 11.5703C7.85885 11.9128 7.97198 12.2026 8.19825 12.4396C8.42451 12.6767 8.70734 12.7953 9.04673 12.7953H10.2158C10.7688 12.7953 11.2779 12.9204 11.743 13.1707C12.2081 13.4209 12.6167 13.7634 12.9686 14.198C13.2326 13.3551 13.6223 12.5977 14.1377 11.926C12.9938 10.8591 11.6865 10.3256 10.2158 10.3256H9.04673C8.71991 10.3256 8.43708 10.4507 8.19825 10.701C7.95941 10.9513 7.84628 11.241 7.85885 11.5703ZM15.7404 21.0934C16.8591 22.1471 18.1601 22.674 19.6434 22.674H22.0003V23.9187C22.0003 24.1821 22.0757 24.4192 22.2266 24.6299C22.3774 24.8407 22.5471 24.9856 22.7357 25.0646C22.9242 25.1436 23.1442 25.1634 23.3956 25.1239C23.647 25.0844 23.8544 24.9724 24.0178 24.788L26.3747 22.3183C26.6135 22.0681 26.7267 21.7717 26.7141 21.4292C26.7015 21.0868 26.5884 20.8036 26.3747 20.5797L24.0178 18.11C23.8293 17.9124 23.6156 17.7939 23.3767 17.7544C23.1379 17.7149 22.9179 17.7412 22.7168 17.8334C22.5157 17.9256 22.346 18.0771 22.2077 18.2878C22.0694 18.4986 22.0003 18.7291 22.0003 18.9793V20.2043H19.6434C19.1029 20.2043 18.5938 20.0857 18.1161 19.8487C17.6384 19.6116 17.2362 19.2691 16.9094 18.8213C16.6328 19.6643 16.2432 20.4216 15.7404 21.0934Z" fill="#5041BC" />
                                                        </svg>
                                                    </div>

                                                    <div className="col-lg-11">
                                                        <div style={{ fontSize: "12px", display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                                            <div>
                                                                <p >
                                                                    <svg style={{ marginBottom: '-12px' }} width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M9 0.97L8.02969 0L0 8L8.02969 16L9 15.035L1.94531 8L9 0.97Z" fill="black" />
                                                                    </svg>
                                                                </p>
                                                            </div>
                                                            <div className='mt-1'>
                                                                <button className='insideBtn'><img style={{ width: '17px' }} src="./Image/Mask group (3).svg" alt="" /> &nbsp; Evil</button>
                                                            </div>
                                                            <div className='mt-1'>
                                                                <button className='insideBtn'><img style={{ width: '17px' }} src="./Image/Mask group (1).svg" alt="" /> &nbsp; Little Mouse</button>
                                                            </div>
                                                            <div className='mt-1'>
                                                                <button className='insideBtn'><img style={{ width: '17px' }} src="./Image/Mask group (3).svg" alt="" /> &nbsp; Angry</button>
                                                            </div>
                                                            <div>
                                                                <p>
                                                                    <svg style={{ marginBottom: '-12px' }} width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M0.000101837 15.0237L0.964435 15.9996L9.04314 8.04911L1.06276 -8.22104e-05L0.0865394 0.958936L7.09786 8.03716L0.000101837 15.0237Z" fill="black" />
                                                                    </svg>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                {
                                                    testCheck && (
                                                        <>
                                                            <div className="row">
                                                                <div>
                                                                    <p className='mb-0 mt-2' style={{ fontSize: '15px' }}><b>Prompt</b></p>
                                                                    <p className='mb-0 p-3' style={{ border: '1px solid #DEE2E7', fontSize: "14px", color: "#797D8C", borderRadius: "8px" }}>
                                                                        Your weapons are but toothpicks to me. [laughs] Surrender now and I may grant you a swift end. I've toppled kingdoms and devoured armies. What hope do you have against me?
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                }
                                            </div>
                                            <div className="row mt-4">
                                                <button className='generateVoicee'>Generate Voice</button>
                                            </div>
                                            <div className="row mt-2">
                                                <button style={{ backgroundColor: '#fff', color: '#000', border: "1px solid #D9E4F2" }} className='generateVoicee' onClick={() => setIsTrue(!isTrue)}> Setting</button>
                                            </div>
                                            {
                                                isTrue && (
                                                    <>
                                                        <div>
                                                            <div class="form-check form-switch mt-4">
                                                                <input class="form-check-input my-form-check-input switchBox ps-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => setTestCheck(!testCheck)} />
                                                                &nbsp; &nbsp;
                                                                <label class="form-check-label pt-1" for="flexSwitchCheckDefault" style={{ fontSize: '15px' }}><b>Default switch checkbox input</b></label>
                                                            </div>
                                                            <div className='mt-3'>
                                                                <div>
                                                                    <p className='mb-1' style={{ fontSize: "16px" }}>Loudness</p>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                                        <p style={{ color: '#797D8C', fontSize: '13px' }}>Quiet</p>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 text-end" >
                                                                        <div className=''>
                                                                            <p style={{ color: '#797D8C', fontSize: '13px' }}>Loud</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="progress-container">
                                                                    <div className="progress-bar">
                                                                        <div
                                                                            className="progress-fill"
                                                                            style={{ width: `${75}%` }}
                                                                        >
                                                                            <div className="progress-circle"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='mt-3'>
                                                                <div>
                                                                    <p className='mb-1' style={{ fontSize: "16px" }}>Guidance Scale</p>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                                        <p style={{ color: '#797D8C', fontSize: '13px' }}>Low</p>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6 text-end" >
                                                                        <div className=''>
                                                                            <p style={{ color: '#797D8C', fontSize: '13px' }}>High</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="progress-container">
                                                                    <div className="progress-bar">
                                                                        <div
                                                                            className="progress-fill"
                                                                            style={{ width: `${75}%` }}
                                                                        >
                                                                            <div className="progress-circle"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    )
                        :
                        (
                            <>
                                <div>
                                    <div style={{ border: '1px solid #E4E7EB', padding: '10px', backgroundColor: '#FCFCFC' }}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <button className='addVoiceBtn'>Add Voice Reference</button>
                                            </div>
                                            <div className="col-lg-6 text-end">
                                                <button className='addVoiceBtn'>
                                                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="-1" x2="16" y2="-1" transform="matrix(-4.37113e-08 1 1 4.37113e-08 14 0)" stroke="#DEE2E7" stroke-width="2" />
                                                        <line y1="-1" x2="13" y2="-1" transform="matrix(-4.37113e-08 1 1 4.37113e-08 10 3)" stroke="#DEE2E7" stroke-width="2" />
                                                        <line y1="-1" x2="9" y2="-1" transform="matrix(-4.37113e-08 1 1 4.37113e-08 6 7)" stroke="black" stroke-width="2" />
                                                        <line y1="-1" x2="5" y2="-1" transform="matrix(-4.37113e-08 1 1 4.37113e-08 2 11)" stroke="black" stroke-width="2" />
                                                    </svg>
                                                    &nbsp;
                                                    <span className='pt-1'>Medium</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ border: '1px solid #E4E7EB', padding: '10px' }}>
                                        <div className="" style={{ height: "200px" }}>
                                            <p style={{ color: '#797D8C', fontSize: '14' }}>Make this Voice elderly and tired</p>
                                        </div>
                                        <div className='d-flex justify-content-between'>
                                            <div style={{ fontSize: '12px' }}>
                                                <button className='insideBtn' style={{ backgroundColor: '#fff' }}>Script</button>
                                            </div>
                                            <div style={{ fontSize: '12px' }}>
                                                <p>350 / 9,448 remaining
                                                    <span style={{ backgroundColor: '#C3C3C3', padding: '5px', borderRadius: '22px', marginLeft: "3px" }}><svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.00025 0L0.29325 4.707C-0.09775 5.098 -0.09775 5.73 0.29325 6.121C0.68425 6.512 1.31625 6.512 1.70725 6.121L4.00025 3.828V11.414C4.00025 11.966 4.44725 12.414 5.00025 12.414C5.55325 12.414 6.00025 11.966 6.00025 11.414V3.828L8.29325 6.121C8.48825 6.316 8.74425 6.414 9.00025 6.414C9.25625 6.414 9.51225 6.316 9.70725 6.121C10.0983 5.73 10.0983 5.098 9.70725 4.707L5.00025 0Z" fill="white" />
                                                    </svg></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                }
            </div>


        </Container>
    )
}

export default addVoiceModel
