import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AdditionalVoice from '../../offcanvas/agent/superChildAgent/additionalVoice';
import AdditionalLanguage from '../../offcanvas/agent/superChildAgent/additionalLanguages';
import Gemini from '../../offcanvas/agent/superChildAgent/gemini';
import styled from 'styled-components';

const Container = styled.div`
.scrollableData {
    border: 1px solid #E4E7EB;
    padding: 10px;
    border-radius: 5px 5px 0px 0px;
    height: 150px;       
    overflow-y: auto;     
}
.my-form-check-input{
    background-color: #D9D9D9;
    border-color: #D9D9D9;
}
.swicthButton{
    border: 1px solid #E4E7EB ;
    background-color: #f7f8f8;
    padding:   7px ;
    border-radius: 0px 0px 5px 5px;
}

`
const superChildAgent = () => {

    const [select, setSelect] = useState('Additional voice')

    return (
        <Container>
            <div >
                <h4 className='mt-2' style={{ color: '#FF8057' }}>Agent</h4>
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 mb-3">
                        <div>
                            <label for="exampleFormControlTextarea1" class="form-label" >System prompt <span><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.75 9.75L9.75 0.75M9.75 0.75H1.65M9.75 0.75V8.85" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </span> {'('} <span ><a href="">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.562151 0.56215C-0.187384 1.31168 -0.187384 2.52691 0.562151 3.27644L1.61901 4.3333C1.62695 4.32412 1.63527 4.31517 1.64398 4.30645L4.30653 1.6439C4.31522 1.63522 4.32415 1.62692 4.3333 1.619L3.27644 0.56215C2.52691 -0.187383 1.31168 -0.187383 0.562151 0.56215Z" fill="#5041BC" />
                                    <path d="M5.27928 2.59961C5.27146 2.60946 5.26325 2.61908 5.25464 2.62843L2.6266 5.4954C2.61799 5.50479 2.60916 5.51374 2.6001 5.52227L8.89931 12.3942C9.63918 13.2013 10.8386 13.2013 11.5785 12.3942C12.3183 11.5871 12.3183 10.2786 11.5785 9.47148L5.27928 2.59961Z" fill="#5041BC" />
                                    <path d="M9.22738 0.20806C9.33683 -0.0693535 9.72942 -0.0693535 9.8388 0.20806L10.1314 0.94989C10.1648 1.03459 10.2319 1.10163 10.3166 1.13504L11.0584 1.42761C11.3358 1.53702 11.3358 1.92962 11.0584 2.03903L10.3166 2.33161C10.2319 2.36501 10.1648 2.43205 10.1314 2.51675L9.83887 3.25858C9.72942 3.53599 9.33683 3.53599 9.22738 3.25858L8.93486 2.51675C8.90141 2.43205 8.83438 2.36501 8.74968 2.33161L8.00788 2.03903C7.73045 1.92962 7.73045 1.53702 8.00788 1.42761L8.74968 1.13504C8.83438 1.10163 8.90141 1.03459 8.93486 0.94989L9.22738 0.20806Z" fill="#5041BC" />
                                    <path d="M11.887 4.58485C11.9751 4.24971 12.2914 4.24971 12.3795 4.58485L12.4654 4.91161C12.4923 5.01393 12.5463 5.09493 12.6145 5.13527L12.8323 5.26415C13.0558 5.39633 13.0558 5.87067 12.8323 6.00281L12.6145 6.13168C12.5463 6.17202 12.4923 6.25303 12.4654 6.35531L12.3795 6.68211C12.2914 7.01726 11.9751 7.01726 11.887 6.68211L11.8011 6.35531C11.7742 6.25303 11.7202 6.17202 11.652 6.13168L11.4341 6.00281C11.2108 5.87067 11.2108 5.39633 11.4341 5.26415L11.652 5.13527C11.7202 5.09493 11.7742 5.01393 11.8011 4.91161L11.887 4.58485Z" fill="#5041BC" />
                                    <path d="M1.79687 8.83408C1.92905 8.61064 2.40335 8.61064 2.53553 8.83408L2.6644 9.0519C2.70476 9.12014 2.78575 9.17414 2.88807 9.20104L3.21483 9.28695C3.54997 9.37505 3.54997 9.69128 3.21483 9.77937L2.88807 9.86529C2.78575 9.89218 2.70476 9.94619 2.6644 10.0144L2.53553 10.2322C2.40335 10.4557 1.92905 10.4557 1.79687 10.2322L1.668 10.0144C1.62764 9.94619 1.54665 9.89218 1.44433 9.86529L1.11757 9.77937C0.782425 9.69128 0.782425 9.37505 1.11757 9.28695L1.44433 9.20104C1.54665 9.17414 1.62764 9.12014 1.668 9.0519L1.79687 8.83408Z" fill="#5041BC" />
                                </svg>
                            </a></span> <span style={{ color: "#5041BC" }}>Generate with AI {')'}</span></label>
                            <div className='scrollableData'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Dolor dolorum quaerat molestias possimus fugit praesentium
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                    fuga quo aliquam, eos architecto eaque officiis, reiciendis nihil non eligendi quia facilis sapiente explicabo.
                                </p>
                            </div>
                            <div className='swicthButton d-flex'>
                                <div class="form-check form-switch ms-3">
                                    <input class="form-check-input my-form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Default personality</label>
                                </div>
                                <div className='ms-3'>
                                    <button style={{ padding: '3px 7px', border: '#aaa', backgroundColor: '#fff', fontSize: '13px', borderRadius: '10px', color: '#000' }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_79_1040)">
                                                <path d="M5.8125 0C2.60213 0 0 2.60213 0 5.8125C0 9.02287 2.60213 11.625 5.8125 11.625C9.02287 11.625 11.625 9.02287 11.625 5.8125C11.625 2.60213 9.02287 0 5.8125 0ZM10.8656 5.625H8.61712C8.5965 4.79437 8.44875 4.00087 8.18662 3.2745C8.69287 3.06338 9.16087 2.7825 9.58762 2.45062C10.3462 3.30225 10.8206 4.40812 10.8656 5.625ZM5.60512 10.8645C4.98187 10.3455 4.45913 9.67163 4.07662 8.889C4.5675 8.73563 5.08763 8.65162 5.625 8.63437V10.8653C5.61825 10.8653 5.61188 10.8649 5.60512 10.8645ZM6.01912 0.7605C6.72638 1.34925 7.3035 2.13788 7.69388 3.05775C7.15912 3.24038 6.591 3.3465 5.99962 3.36525V0.759375C6.00675 0.75975 6.01275 0.760125 6.01912 0.7605ZM6.64387 0.82425C7.67887 0.996375 8.60738 1.47975 9.33038 2.1795C8.93775 2.48062 8.50875 2.73563 8.04487 2.92875C7.70362 2.11987 7.22475 1.40475 6.64387 0.82425ZM5.625 0.759375V3.36525C5.03363 3.34612 4.46513 3.24038 3.93075 3.05775C4.32113 2.13788 4.89825 1.34925 5.6055 0.7605C5.61225 0.760125 5.61825 0.75975 5.625 0.759375ZM3.57975 2.92912C3.11662 2.736 2.68725 2.481 2.29463 2.17988C3.01725 1.48013 3.94613 0.99675 4.98112 0.824625C4.39988 1.40475 3.92137 2.11987 3.57975 2.92912ZM3.78937 3.4035C4.36762 3.60413 4.98375 3.72113 5.625 3.74063V5.625H3.38287C3.40313 4.83975 3.54225 4.08938 3.78937 3.4035ZM5.625 6V8.25937C5.03363 8.27738 4.46175 8.37413 3.92288 8.54775C3.59813 7.7745 3.4065 6.91313 3.38287 6H5.625ZM4.98112 10.8007C4.05375 10.6466 3.2115 10.2428 2.52675 9.65625C2.89613 9.40012 3.2955 9.18337 3.72225 9.01875C4.04925 9.69675 4.47713 10.2986 4.98112 10.8007ZM6 10.8656V8.63475C6.537 8.652 7.0575 8.736 7.54838 8.88937C7.1655 9.672 6.64312 10.3459 6.01987 10.8649C6.0135 10.8649 6.00675 10.8653 6 10.8656ZM7.90275 9.01875C8.32912 9.18337 8.72812 9.4005 9.09825 9.65625C8.4135 10.2424 7.57125 10.6466 6.64387 10.8007C7.14787 10.2986 7.57537 9.69675 7.90275 9.01875ZM7.70212 8.54775C7.16287 8.37413 6.591 8.27738 6 8.25937V6H8.24212C8.2185 6.91313 8.0265 7.7745 7.70212 8.54775ZM6 5.625V3.74063C6.64087 3.72113 7.257 3.6045 7.83563 3.40387C8.08238 4.08975 8.2215 4.84013 8.24212 5.62538H6V5.625ZM2.03775 2.45062C2.4645 2.7825 2.9325 3.06338 3.43837 3.2745C3.17625 4.00087 3.0285 4.79437 3.00787 5.625H0.759375C0.804375 4.40812 1.27875 3.30225 2.03775 2.45062ZM0.759375 6H3.00787C3.03113 6.95813 3.23137 7.863 3.5715 8.67637C3.09637 8.86162 2.6535 9.10838 2.24475 9.4005C1.36425 8.52413 0.8085 7.326 0.759375 6ZM9.38025 9.40012C8.9715 9.10837 8.52863 8.86125 8.05313 8.676C8.39363 7.86263 8.5935 6.95775 8.61712 5.99962H10.8656C10.8165 7.326 10.2604 8.52413 9.38025 9.40012Z" fill="#333332" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_79_1040">
                                                    <rect width="12" height="12" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg> &nbsp;Set timezone</button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label for="exampleFormControlTextarea1" class="form-label" style={{ fontSize: '20px' }}>First message <span>
                            </span>
                            </label>
                            <div>
                                <p style={{ fontSize: '15px' }}>The first message the agent will say. If empty, the agent will  <span><b>Disclosure Requirements</b> <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 9.75L9.75 0.75M9.75 0.75H1.65M9.75 0.75V8.85" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></span>  wait for the user to start the conversation.</p>
                            </div>
                            <div className='scrollableData'>
                                <p>
                                    Hi, thanks for contacting customer support! How can I help you today?
                                </p>
                            </div>
                            <div className='swicthButton d-flex'>
                                <div class="form-check form-switch ms-3">
                                    <input class="form-check-input my-form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Interruptible</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12">

                        <div className=''>
                            <div>
                                <h5 className='mb-0' style={{ fontSize: '18px' }}>Voices</h5>
                            </div>
                            <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p className='mb-0'>
                                        Select the ElevenLabs voices you want to use for the agent.
                                    </p>
                                </div>
                                <div style={{ marginTop: '-8px' }}>
                                    <button style={{ border: 'none', padding: '5px 6px', borderRadius: '10px',backgroundColor:"#DADBE1" }}>
                                        <svg  width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.0547 18.457H9.57856C9.42658 18.4571 9.27997 18.4009 9.16698 18.2992C9.05399 18.1976 8.98261 18.0577 8.9666 17.9066L8.78326 16.1803C8.52732 16.0932 8.27729 15.9896 8.03473 15.8702L6.68572 16.9612C6.56766 17.0563 6.41864 17.1044 6.26725 17.0964C6.11586 17.0884 5.97276 17.0248 5.86541 16.9177L4.11445 15.1668C4.00741 15.0594 3.94378 14.9163 3.93575 14.7649C3.92773 14.6135 3.97588 14.4645 4.07098 14.3464L5.1624 12.9958C5.0428 12.7533 4.93908 12.5032 4.85191 12.2473L3.1227 12.0627C2.97164 12.0467 2.83184 11.9754 2.73022 11.8625C2.62859 11.7496 2.57233 11.6031 2.57227 11.4512V8.97463C2.57233 8.82273 2.62859 8.67622 2.73022 8.56331C2.83184 8.45041 2.97164 8.37909 3.1227 8.36309L4.84904 8.17975C4.93621 7.92377 5.03993 7.67373 5.15953 7.43121L4.06811 6.08057C3.97301 5.9625 3.92486 5.81348 3.93288 5.66209C3.94091 5.5107 4.00454 5.36761 4.11158 5.26026L5.86254 3.5093C5.96989 3.40226 6.11299 3.33862 6.26438 3.3306C6.41576 3.32258 6.56478 3.37073 6.68285 3.46582L8.0335 4.55684C8.27606 4.43744 8.52609 4.33386 8.78203 4.24676L8.96537 2.52041C8.98112 2.36885 9.05255 2.22852 9.16583 2.12661C9.27911 2.02469 9.42618 1.96844 9.57856 1.96875H12.0547C12.2066 1.96872 12.3533 2.02493 12.4662 2.12656C12.5792 2.2282 12.6506 2.36805 12.6666 2.51918L12.8496 4.24553C13.1056 4.33263 13.3558 4.43621 13.5985 4.55561L14.9487 3.46459C15.0668 3.3695 15.2158 3.32134 15.3672 3.32937C15.5186 3.33739 15.6617 3.40103 15.769 3.50807L17.52 5.25902C17.627 5.36638 17.6907 5.50947 17.6987 5.66086C17.7067 5.81225 17.6586 5.96127 17.5635 6.07934L16.4721 7.42998C16.5915 7.67258 16.6952 7.92261 16.7825 8.17852L18.5089 8.36186C18.6599 8.37795 18.7996 8.44931 18.9011 8.56221C19.0026 8.6751 19.0589 8.82156 19.0589 8.9734V11.4499C19.0592 11.6017 19.0034 11.7483 18.9021 11.8614C18.8009 11.9745 18.6614 12.0462 18.5105 12.0627L16.7842 12.246C16.6968 12.5019 16.5931 12.752 16.4737 12.9946L17.5651 14.3452C17.6602 14.4633 17.7084 14.6123 17.7003 14.7637C17.6923 14.9151 17.6287 15.0582 17.5216 15.1655L15.7707 16.9177C15.6633 17.0248 15.5202 17.0884 15.3688 17.0964C15.2175 17.1044 15.0684 17.0563 14.9504 16.9612L13.6001 15.8702C13.3574 15.9896 13.1073 16.0932 12.8512 16.1803L12.6683 17.9066C12.6522 18.058 12.5806 18.1981 12.4673 18.2998C12.3539 18.4014 12.2069 18.4575 12.0547 18.457ZM10.131 17.2266H11.5005L11.6683 15.645C11.6815 15.5212 11.7319 15.4043 11.8129 15.3098C11.8939 15.2152 12.0016 15.1475 12.1219 15.1155C12.5553 14.9999 12.9713 14.8271 13.359 14.6016C13.4669 14.5387 13.5914 14.5101 13.716 14.5197C13.8405 14.5293 13.9592 14.5766 14.0562 14.6553L15.2933 15.6548L16.2616 14.6865L15.2604 13.4531C15.1818 13.3561 15.1345 13.2374 15.1249 13.1129C15.1153 12.9883 15.1438 12.8638 15.2067 12.7559C15.4318 12.3684 15.6041 11.9527 15.719 11.5196C15.751 11.3993 15.8188 11.2915 15.9135 11.2105C16.0081 11.1295 16.1251 11.0791 16.2489 11.066L17.8301 10.8979V9.52834L16.2489 9.36018C16.1251 9.34709 16.0081 9.29672 15.9135 9.21572C15.8188 9.13472 15.751 9.02691 15.719 8.90654C15.6041 8.47335 15.4318 8.05747 15.2067 7.66992C15.1438 7.56199 15.1153 7.43747 15.1249 7.31291C15.1345 7.18836 15.1818 7.06968 15.2604 6.97266L16.26 5.73563L15.2916 4.76725L14.0546 5.7668C13.9576 5.84548 13.8389 5.89277 13.7143 5.90237C13.5898 5.91197 13.4653 5.88342 13.3573 5.82053C12.9698 5.59563 12.5541 5.42335 12.1211 5.30824C12.0008 5.27624 11.893 5.2085 11.812 5.11395C11.7311 5.01941 11.6806 4.90252 11.6675 4.77873L11.5014 3.19922H10.131L9.96328 4.78078C9.95009 4.90463 9.89962 5.02155 9.81855 5.1161C9.73748 5.21065 9.62962 5.27836 9.50924 5.31029C9.07656 5.42593 8.66124 5.59876 8.27426 5.82422C8.16632 5.88711 8.0418 5.91566 7.91725 5.90606C7.7927 5.89646 7.67402 5.84918 7.57699 5.77049L6.34119 4.7693L5.37322 5.73768L6.37318 6.97471C6.45181 7.07178 6.49902 7.19048 6.50854 7.31503C6.51807 7.43958 6.48945 7.56408 6.4265 7.67197C6.20179 8.05956 6.02952 8.47526 5.91422 8.90819C5.88222 9.02849 5.81447 9.13626 5.71993 9.21725C5.62539 9.29825 5.5085 9.34866 5.38471 9.36182L3.80314 9.52998V10.8991L5.38471 11.0672C5.5085 11.0804 5.62539 11.1308 5.71993 11.2118C5.81447 11.2928 5.88222 11.4006 5.91422 11.5209C6.02949 11.9534 6.20162 12.3686 6.42609 12.7559C6.48904 12.8638 6.51766 12.9883 6.50813 13.1128C6.49861 13.2374 6.4514 13.3561 6.37277 13.4531L5.37322 14.6881L6.3416 15.6565L7.57904 14.6569C7.67607 14.5782 7.79475 14.531 7.9193 14.5214C8.04385 14.5118 8.16837 14.5403 8.27631 14.6032C8.66363 14.8282 9.07923 15.0004 9.51211 15.1155C9.63249 15.1474 9.74035 15.2151 9.82142 15.3097C9.90249 15.4042 9.95296 15.5212 9.96615 15.645L10.131 17.2266Z" fill="#797D8C" />
                                            <path d="M10.8161 13.9602C10.075 13.9601 9.35057 13.7403 8.7344 13.3285C8.11823 12.9167 7.63801 12.3314 7.35446 11.6467C7.0709 10.962 6.99676 10.2086 7.14139 9.48172C7.28602 8.75486 7.64294 8.08722 8.16701 7.5632C8.69108 7.03919 9.35876 6.68235 10.0856 6.53779C10.8125 6.39324 11.5659 6.46747 12.2506 6.7511C12.9353 7.03473 13.5205 7.51501 13.9322 8.13123C14.344 8.74744 14.5637 9.4719 14.5637 10.213C14.5626 11.2066 14.1674 12.1591 13.4648 12.8616C12.7623 13.5641 11.8097 13.9592 10.8161 13.9602ZM10.8161 7.69629C10.3184 7.69637 9.83183 7.84404 9.41801 8.12063C9.0042 8.39722 8.68168 8.79031 8.49126 9.25019C8.30084 9.71006 8.25106 10.2161 8.34821 10.7042C8.44537 11.1924 8.6851 11.6408 9.03708 11.9927C9.38907 12.3447 9.8375 12.5843 10.3257 12.6814C10.8139 12.7785 11.3199 12.7286 11.7797 12.5381C12.2396 12.3476 12.6326 12.025 12.9091 11.6112C13.1857 11.1973 13.3332 10.7108 13.3332 10.213C13.3325 9.5457 13.067 8.90594 12.5951 8.43411C12.1232 7.96229 11.4834 7.69694 10.8161 7.69629Z" fill="#797D8C" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className='p-2 mt-2' style={{ border: '1px solid #E4E7EB', borderRadius: '5px 5px 0px 0px' }}>
                                <div className="row ps-2" >
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-1">
                                                <div>
                                                    <img style={{ width: "20px" }} src="./Image/Mask group (1).svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <p className='' style={{ margin: 'auto' }}>Eric</p>
                                                </div>
                                            </div>
                                            <div className="col-4 pt-1" style={{ textAlign: 'center' }}>
                                                <div className=''>
                                                    <p style={{ padding: '2px 4px', border: '#aaa', backgroundColor: '#DADBE1', fontSize: '10px', borderRadius: '10px', color: '#8B8B8B', margin: 'auto' }}>Primary</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 " >
                                        <div style={{ float: 'right' }}>
                                            <svg width='10' height="14" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.000101837 15.0237L0.964435 15.9996L9.04314 8.04911L1.06276 -8.22104e-05L0.0865394 0.958936L7.09786 8.03716L0.000101837 15.0237Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2' style={{ border: '1px solid #E4E7EB', backgroundColor: '#E4E7EB', borderRadius: '0px 0px 5px 5px ' }}>
                                <div className="row" style={{ cursor: 'pointer' }}>
                                    <div className="col-8" style={{ display: 'flex' }}  >
                                        <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('Additional voice')}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_85_27)">
                                                    <path d="M9 16.3125C7.55373 16.3125 6.13993 15.8836 4.9374 15.0801C3.73486 14.2766 2.7976 13.1346 2.24413 11.7984C1.69067 10.4622 1.54586 8.99189 1.82801 7.57341C2.11017 6.15492 2.80661 4.85196 3.82928 3.82928C4.85196 2.80661 6.15492 2.11017 7.57341 1.82801C8.99189 1.54586 10.4622 1.69067 11.7984 2.24413C13.1346 2.7976 14.2766 3.73486 15.0801 4.9374C15.8836 6.13993 16.3125 7.55373 16.3125 9C16.3125 10.9394 15.5421 12.7994 14.1707 14.1707C12.7994 15.5421 10.9394 16.3125 9 16.3125ZM9 2.8125C7.77623 2.8125 6.57994 3.17539 5.56241 3.85528C4.54488 4.53518 3.75182 5.50153 3.2835 6.63215C2.81518 7.76277 2.69265 9.00687 2.93139 10.2071C3.17014 11.4074 3.75944 12.5099 4.62478 13.3752C5.49012 14.2406 6.59262 14.8299 7.79288 15.0686C8.99314 15.3074 10.2372 15.1848 11.3679 14.7165C12.4985 14.2482 13.4648 13.4551 14.1447 12.4376C14.8246 11.4201 15.1875 10.2238 15.1875 9C15.1875 7.35898 14.5356 5.78516 13.3752 4.62478C12.2148 3.4644 10.641 2.8125 9 2.8125Z" fill="#878787" />
                                                    <path d="M9 12.9375C8.85082 12.9375 8.70774 12.8782 8.60225 12.7727C8.49676 12.6673 8.4375 12.5242 8.4375 12.375V5.625C8.4375 5.47582 8.49676 5.33274 8.60225 5.22725C8.70774 5.12176 8.85082 5.0625 9 5.0625C9.14918 5.0625 9.29226 5.12176 9.39775 5.22725C9.50324 5.33274 9.5625 5.47582 9.5625 5.625V12.375C9.5625 12.5242 9.50324 12.6673 9.39775 12.7727C9.29226 12.8782 9.14918 12.9375 9 12.9375Z" fill="#878787" />
                                                    <path d="M12.375 9.5625H5.625C5.47582 9.5625 5.33274 9.50324 5.22725 9.39775C5.12176 9.29226 5.0625 9.14918 5.0625 9C5.0625 8.85082 5.12176 8.70774 5.22725 8.60225C5.33274 8.49676 5.47582 8.4375 5.625 8.4375H12.375C12.5242 8.4375 12.6673 8.49676 12.7727 8.60225C12.8782 8.70774 12.9375 8.85082 12.9375 9C12.9375 9.14918 12.8782 9.29226 12.7727 9.39775C12.6673 9.50324 12.5242 9.5625 12.375 9.5625Z" fill="#878787" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_85_27">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='ps-1'>
                                            <p className='mb-0'>Add additional voice </p>
                                        </div>
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 '>
                            <div>
                                <h5 className='mb-0' style={{ fontSize: '18px' }}>Voices</h5>
                            </div>
                            <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p className='mb-0'>
                                        Select the ElevenLabs voices you want to use for the agent.
                                    </p>
                                </div>

                            </div>
                            <div className='p-2 mt-2' style={{ border: '1px solid #E4E7EB', borderRadius: '5px 5px 0px 0px' }}>
                                <div className="row ps-2" >
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="row">
                                            <div className="col-1">
                                                <div>
                                                    <img style={{ width: "18px" }} src="./Image/image 4.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div>
                                                    <p className='' style={{ margin: 'auto' }}>English</p>
                                                </div>
                                            </div>
                                            <div className="col-4 pt-1" style={{ textAlign: 'center' }}>
                                                <div className=''>
                                                    <p style={{ padding: '2px 4px', border: '#aaa', backgroundColor: '#DADBE1', fontSize: '10px', borderRadius: '10px', color: '#8B8B8B', margin: 'auto' }}>Default</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 " >
                                        <div style={{ float: 'right' }}>
                                            <svg width='10' height="14" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.000101837 15.0237L0.964435 15.9996L9.04314 8.04911L1.06276 -8.22104e-05L0.0865394 0.958936L7.09786 8.03716L0.000101837 15.0237Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2' style={{ border: '1px solid #E4E7EB', backgroundColor: '#E4E7EB', borderRadius: '0px 0px 5px 5px ' }}>
                                <div className="row" style={{ cursor: 'pointer' }}>
                                    <div className="col-8" style={{ display: 'flex' }}>
                                        <div data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('Additional languages')}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_85_27)">
                                                    <path d="M9 16.3125C7.55373 16.3125 6.13993 15.8836 4.9374 15.0801C3.73486 14.2766 2.7976 13.1346 2.24413 11.7984C1.69067 10.4622 1.54586 8.99189 1.82801 7.57341C2.11017 6.15492 2.80661 4.85196 3.82928 3.82928C4.85196 2.80661 6.15492 2.11017 7.57341 1.82801C8.99189 1.54586 10.4622 1.69067 11.7984 2.24413C13.1346 2.7976 14.2766 3.73486 15.0801 4.9374C15.8836 6.13993 16.3125 7.55373 16.3125 9C16.3125 10.9394 15.5421 12.7994 14.1707 14.1707C12.7994 15.5421 10.9394 16.3125 9 16.3125ZM9 2.8125C7.77623 2.8125 6.57994 3.17539 5.56241 3.85528C4.54488 4.53518 3.75182 5.50153 3.2835 6.63215C2.81518 7.76277 2.69265 9.00687 2.93139 10.2071C3.17014 11.4074 3.75944 12.5099 4.62478 13.3752C5.49012 14.2406 6.59262 14.8299 7.79288 15.0686C8.99314 15.3074 10.2372 15.1848 11.3679 14.7165C12.4985 14.2482 13.4648 13.4551 14.1447 12.4376C14.8246 11.4201 15.1875 10.2238 15.1875 9C15.1875 7.35898 14.5356 5.78516 13.3752 4.62478C12.2148 3.4644 10.641 2.8125 9 2.8125Z" fill="#878787" />
                                                    <path d="M9 12.9375C8.85082 12.9375 8.70774 12.8782 8.60225 12.7727C8.49676 12.6673 8.4375 12.5242 8.4375 12.375V5.625C8.4375 5.47582 8.49676 5.33274 8.60225 5.22725C8.70774 5.12176 8.85082 5.0625 9 5.0625C9.14918 5.0625 9.29226 5.12176 9.39775 5.22725C9.50324 5.33274 9.5625 5.47582 9.5625 5.625V12.375C9.5625 12.5242 9.50324 12.6673 9.39775 12.7727C9.29226 12.8782 9.14918 12.9375 9 12.9375Z" fill="#878787" />
                                                    <path d="M12.375 9.5625H5.625C5.47582 9.5625 5.33274 9.50324 5.22725 9.39775C5.12176 9.29226 5.0625 9.14918 5.0625 9C5.0625 8.85082 5.12176 8.70774 5.22725 8.60225C5.33274 8.49676 5.47582 8.4375 5.625 8.4375H12.375C12.5242 8.4375 12.6673 8.49676 12.7727 8.60225C12.8782 8.70774 12.9375 8.85082 12.9375 9C12.9375 9.14918 12.8782 9.29226 12.7727 9.39775C12.6673 9.50324 12.5242 9.5625 12.375 9.5625Z" fill="#878787" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_85_27">
                                                        <rect width="18" height="18" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div className='ps-1'>
                                            <p className='mb-0'>Add additional Languages  </p>
                                        </div>
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4 '>
                            <div>
                                <h5 className='mb-0' style={{ fontSize: '18px' }}>LLM</h5>
                            </div>
                            <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <p className='mb-2'>
                                        Select which provider and model to use for the LLM.
                                    </p>
                                </div>
                            </div>

                            <div className='p-2' style={{ border: '1px solid #E4E7EB', backgroundColor: '#E4E7EB', borderRadius: '5px' }}>
                                <div className="row" style={{ cursor: 'pointer' }}>
                                    <div className="col-lg-6 col-md-12 col-sm-12" style={{ display: 'flex' }}>
                                        <div className='ps-1' style={{ textAlign: "center" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => setSelect('LLM')}>
                                            <p className='mb-0'>Gemini 2.5 Flash</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12 " >
                                        <div style={{ float: 'right' }}>
                                            <svg width='10' height="14" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.000101837 15.0237L0.964435 15.9996L9.04314 8.04911L1.06276 -8.22104e-05L0.0865394 0.958936L7.09786 8.03716L0.000101837 15.0237Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* offcanvas  */}
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <div  data-bs-dismiss="offcanvas" aria-label="Close">
                              <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.04047 0.295798C8.1342 0.388761 8.20859 0.499362 8.25936 0.621222C8.31013 0.743081 8.33627 0.873786 8.33627 1.0058C8.33627 1.13781 8.31013 1.26852 8.25936 1.39038C8.20859 1.51223 8.1342 1.62284 8.04047 1.7158L3.44047 6.3158H26.9805C27.2457 6.3158 27.5 6.42115 27.6876 6.60869C27.8751 6.79623 27.9805 7.05058 27.9805 7.3158C27.9805 7.58102 27.8751 7.83537 27.6876 8.0229C27.5 8.21044 27.2457 8.3158 26.9805 8.3158H3.46047L8.04047 12.8858C8.22672 13.0732 8.33126 13.3266 8.33126 13.5908C8.33126 13.855 8.22672 14.1084 8.04047 14.2958C7.85311 14.482 7.59965 14.5866 7.33547 14.5866C7.07128 14.5866 6.81783 14.482 6.63047 14.2958L0.270468 7.9358C0.184866 7.85367 0.116755 7.75508 0.0702248 7.64596C0.023695 7.53683 -0.000289917 7.41943 -0.000289917 7.3008C-0.000289917 7.18217 0.023695 7.06476 0.0702248 6.95564C0.116755 6.84652 0.184866 6.74793 0.270468 6.6658L6.62047 0.295798C6.71343 0.20207 6.82403 0.127676 6.94589 0.0769072C7.06775 0.0261385 7.19846 0 7.33047 0C7.46248 0 7.59319 0.0261385 7.71504 0.0769072C7.8369 0.127676 7.94751 0.20207 8.04047 0.295798Z" fill="#008479" />
                            </svg>
                            <span className='ms-3'></span> <span className='ms-3'>{select}</span>
                        </div>

                    </div>
                    <div class="offcanvas-body">

                        {select === 'Additional voice' && (
                            <>
                               <AdditionalVoice />
                            </>
                        )}
                        {select === 'Additional languages' && (
                            <>
                                <AdditionalLanguage />
                            </>
                        )}
                        {select === 'LLM' && (
                            <>
                                <Gemini />
                            </>
                        )}
                    </div>
                </div>
                {/* offcanvas  */}
            </div>
        </Container>
    )
}

export default superChildAgent
