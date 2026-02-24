import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Stepper from '../../../stepperCom/Stepper';
import { useParams } from "react-router-dom";
import { useCaseTyepe } from '../../../Utils/Apis.jsx';
import LoaderIVR from '../../../Loader/LoaderIVR.jsx';

const Container = styled.div`
    .smallContainer{
    /* width: 265px; */
    height: 180px;
    border-radius: 6px;
    align-content: center;
    }
   .smallContainer {
  transition: all 0.3s ease;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
}
.smallContainer:hover {
  transform: translateY(-5px) scale(1.05);
  background: #fff;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.12);
  border: 1px solid #cdcdcd;
}
.smallContainer:hover .icon svg {
  transform: scale(1.15);
}
.icon svg {
  transition: transform 0.3s ease;
}
.textDecor{
  text-decoration: none !important;
    color: inherit !important;
}



`

const agentUseCase = () => {

    const [transferIndutryType, setTransferIndutryType] = useState('');
    // console.log('industry type', transferIndutryType)

    const [loaderCheck, setLoaderCheck] = useState(false);

    const [useCaseType, setUseCaseType] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setTransferIndutryType(id)
        UseCaseGetAll()
    }, [])

    const UseCaseGetAll = async () => {
        setLoaderCheck(false)
        try {
            const response = await useCaseTyepe();
            // console.log('useCase type all data', response)
            if (response?.data?.status === "success") {
                setUseCaseType(response?.data?.useCases);
                setLoaderCheck(false)
            } else {
                toast.error(response?.data?.message);
                // setShow(true)
                setLoaderCheck(false)
            }
        } catch (error) {
            console.log(error)
            // setLoader(false)
        }
    }

    const bgColors = [
        "rgba(255, 242, 244, 1)",
        "rgba(253, 248, 239, 1)",
        "rgba(231, 241, 235, 1)",
        "rgba(249, 243, 255, 1)"
    ];
    return (
        <Container>
            <div>
                {
                    loaderCheck && (
                        <LoaderIVR />
                    )
                }
            </div>
            <div className="container-fluid ps-1 pe-3 mt-3" style={{ width: '100%' }}>
                {/* <div className='breadcrumm p-1 '>
                    <div className="row mt-margin-responsive pt-2">
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
                    </div>
                </div> */}
            </div>
            <div>
                <div className='mt-4'>
                    <Stepper currentStep={2} />
                </div>
            </div>
            <div className="container-fluid ps-1 pe-3 mt-1" style={{ width: '90%' }}>
                <div>
                    <div className="row" style={{ textAlign: '' }}>
                        <div className="col-lg-6 col-md-6">
                            <p className='pt-3 mb-0' style={{ color: '#FF9579', fontSize: '24px', fontWeight: '500' }}><b>Use case</b></p>
                            <p className='' style={{ fontSize: '12px' }}><b>What will your agent help with?</b></p>
                        </div>
                        <div className="col-lg-6 col-md-6 ">
                            <Link to="/addagentindustry" style={{ float: 'right' }}>
                                <button style={{ borderRadius: '25px', padding: '5px 20px', backgroundColor: '#f8f7f7' }} type="button" class="btn btn-md  playground  me-1 mt-3" > {'<'} &nbsp; Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row mt-2">
                        {useCaseType?.map((item, index) => {
                            const columnIndex = index % 4;          // 0-3
                            const rowIndex = Math.floor(index / 4); // row number
                            const colorIndex = (rowIndex + columnIndex) % 4;
                            return (
                                <div className="col-lg-3 col-md-6 col-sm-12 mb-3" key={index}>
                                    <Link to={`/completeagent/${item?.key}`}   state={{ transferIndutryType }} style={{ textDecoration: "none" }}>
                                        <div
                                            className="text-center smallContainer"
                                            style={{ backgroundColor: bgColors[colorIndex] }}
                                        >
                                            <div className=" pb-3" >
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="20" cy="20" r="20" fill="#FFDAE0" />
                                                    <path d="M28.85 24.2094L28.1 22.4906C28.0476 22.3727 27.9622 22.2725 27.854 22.202C27.7459 22.1316 27.6197 22.094 27.4906 22.0938H24.7312L24.0844 17.5844C24.0333 17.21 23.8466 16.8674 23.5598 16.6215C23.273 16.3756 22.9059 16.2434 22.5281 16.25H22.3938V15.625C22.3938 15.2927 22.2617 14.9739 22.0267 14.7389C21.7917 14.5039 21.473 14.3719 21.1406 14.3719C20.8083 14.3719 20.4895 14.5039 20.2545 14.7389C20.0195 14.9739 19.8875 15.2927 19.8875 15.625V16.25H19.75C19.3737 16.2438 19.008 16.3754 18.722 16.62C18.4359 16.8646 18.2491 17.2054 18.1969 17.5781L17.55 22.0938H16.1438C15.4133 22.0895 14.711 22.375 14.1906 22.8875C14.1219 22.9563 14.0594 23.025 14 23.0938V12.0938C13.9973 11.8267 13.8889 11.5715 13.6986 11.3841C13.5083 11.1968 13.2515 11.0923 12.9844 11.0938H11.4062C11.3234 11.0938 11.2439 11.1267 11.1853 11.1853C11.1267 11.2439 11.0938 11.3234 11.0938 11.4063C11.0938 11.4891 11.1267 11.5686 11.1853 11.6272C11.2439 11.6858 11.3234 11.7188 11.4062 11.7188H12.9844C13.0858 11.7169 13.1839 11.7553 13.2571 11.8256C13.3303 11.8959 13.3727 11.9923 13.375 12.0938V24.8125C13.375 24.8954 13.4079 24.9749 13.4665 25.0335C13.5251 25.0921 13.6046 25.125 13.6875 25.125H14.7563C14.5416 25.3281 14.3705 25.5727 14.2534 25.844C14.1363 26.1153 14.0756 26.4076 14.075 26.7031C14.0848 27.2913 14.3254 27.8521 14.7448 28.2646C15.1642 28.677 15.7289 28.9082 16.3172 28.9082C16.9055 28.9082 17.4702 28.677 17.8896 28.2646C18.309 27.8521 18.5496 27.2913 18.5594 26.7031C18.5595 26.4075 18.4991 26.115 18.382 25.8436C18.2648 25.5722 18.0933 25.3277 17.8781 25.125H24.2313C24.0166 25.3281 23.8455 25.5727 23.7284 25.844C23.6113 26.1153 23.5506 26.4076 23.55 26.7031C23.5598 27.2913 23.8004 27.8521 24.2198 28.2646C24.6392 28.677 25.2039 28.9082 25.7922 28.9082C26.3805 28.9082 26.9452 28.677 27.3646 28.2646C27.784 27.8521 28.0246 27.2913 28.0344 26.7031C28.0338 26.4076 27.9731 26.1153 27.856 25.844C27.7389 25.5727 27.5678 25.3281 27.3531 25.125H28.2406C28.3519 25.1258 28.4615 25.0984 28.5593 25.0454C28.6571 24.9924 28.7399 24.9155 28.8 24.8219C28.8598 24.7325 28.8958 24.6293 28.9045 24.5221C28.9133 24.4149 28.8945 24.3073 28.85 24.2094ZM20.5125 15.625C20.5125 15.4584 20.5787 15.2987 20.6965 15.1809C20.8143 15.0631 20.974 14.9969 21.1406 14.9969C21.3072 14.9969 21.467 15.0631 21.5848 15.1809C21.7026 15.2987 21.7688 15.4584 21.7688 15.625V16.25H20.5125V15.625ZM18.125 22.4813L18.8156 17.6594C18.8489 17.4372 18.9622 17.2348 19.1343 17.0903C19.3064 16.9458 19.5254 16.8693 19.75 16.875H19.8875V18.4375C19.8875 18.5204 19.9204 18.5999 19.979 18.6585C20.0376 18.7171 20.1171 18.75 20.2 18.75C20.2829 18.75 20.3624 18.7171 20.421 18.6585C20.4796 18.5999 20.5125 18.5204 20.5125 18.4375V16.875H21.7688V18.4375C21.7688 18.5204 21.8017 18.5999 21.8603 18.6585C21.9189 18.7171 21.9984 18.75 22.0813 18.75C22.1641 18.75 22.2436 18.7171 22.3022 18.6585C22.3608 18.5999 22.3938 18.5204 22.3938 18.4375V16.875H22.5281C22.754 16.8694 22.9742 16.9467 23.1469 17.0924C23.3197 17.2381 23.4331 17.442 23.4656 17.6656L24.1562 22.475C24.1656 22.5538 24.1578 22.6336 24.1336 22.7091C24.1093 22.7846 24.0691 22.854 24.0156 22.9125C23.9544 22.98 23.8796 23.0339 23.7961 23.0705C23.7127 23.1071 23.6224 23.1257 23.5312 23.125H18.75C18.6588 23.126 18.5684 23.1076 18.4849 23.0709C18.4014 23.0343 18.3266 22.9803 18.2656 22.9125C18.2126 22.8549 18.1727 22.7866 18.1484 22.7122C18.1241 22.6378 18.1162 22.559 18.125 22.4813ZM17.9344 26.7031C17.9423 27.0248 17.8541 27.3415 17.6811 27.6127C17.5081 27.884 17.2581 28.0975 16.9632 28.226C16.6682 28.3545 16.3416 28.3921 16.0252 28.3341C15.7087 28.276 15.4167 28.125 15.1866 27.9001C14.9564 27.6753 14.7985 27.387 14.7331 27.072C14.6676 26.757 14.6976 26.4296 14.8191 26.1317C14.9406 25.8338 15.1482 25.5789 15.4154 25.3996C15.6825 25.2203 15.997 25.1247 16.3187 25.125C16.742 25.1208 17.1497 25.2846 17.4525 25.5804C17.7553 25.8761 17.9286 26.2799 17.9344 26.7031ZM27.4094 26.7031C27.4173 27.0246 27.3292 27.3412 27.1563 27.6124C26.9834 27.8836 26.7337 28.0971 26.4389 28.2257C26.1441 28.3543 25.8177 28.3921 25.5013 28.3343C25.185 28.2765 24.893 28.1257 24.6627 27.9012C24.4324 27.6767 24.2743 27.3887 24.2085 27.0739C24.1427 26.7591 24.1722 26.4318 24.2932 26.1339C24.4143 25.8359 24.6214 25.5808 24.8881 25.4011C25.1548 25.2214 25.469 25.1253 25.7906 25.125C26.2144 25.1203 26.6227 25.2837 26.9262 25.5795C27.2296 25.8753 27.4034 26.2794 27.4094 26.7031ZM28.2406 24.5H14.025C14.0935 24.0561 14.3053 23.6467 14.6281 23.3344C14.8278 23.1371 15.0645 22.9812 15.3246 22.8755C15.5847 22.7699 15.863 22.7166 16.1438 22.7188H17.5156C17.5496 22.9445 17.6472 23.1558 17.7969 23.3281C17.9168 23.462 18.0637 23.5688 18.2281 23.6416C18.3924 23.7143 18.5703 23.7513 18.75 23.75H23.5312C23.7108 23.7506 23.8886 23.7134 24.0528 23.6407C24.217 23.568 24.3641 23.4615 24.4844 23.3281C24.6337 23.156 24.7303 22.9444 24.7625 22.7188H27.4906C27.4982 22.7188 27.5057 22.7208 27.5123 22.7247C27.5189 22.7285 27.5243 22.734 27.5281 22.7406L28.2781 24.4813C28.2742 24.4876 28.2687 24.4926 28.262 24.4959C28.2554 24.4993 28.248 24.5007 28.2406 24.5Z" fill="#D87777" />
                                                </svg>
                                            </div>

                                            <p style={{ fontSize: "16px", color: '#000' }}>{item?.label}</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div className="row mt-2">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
                            <Link to="/completeagent" className='textDecor'>
                                <div className='text-center smallContainer' style={{ backgroundColor: '#FFF2F4' }}>
                                    <div className="icon pb-3">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="20" r="20" fill="#FFDAE0" />
                                            <g clip-path="url(#clip0_69_213)">
                                                <path d="M29 15.9999C29.5304 15.9999 30.0391 16.2106 30.4142 16.5857C30.7893 16.9608 31 17.4695 31 17.9999V21.9999C31 22.5303 30.7893 23.039 30.4142 23.4141C30.0391 23.7892 29.5304 23.9999 29 23.9999H27.938C27.6942 25.9332 26.7533 27.7111 25.2917 28.9999C23.8302 30.2887 21.9486 30.9999 20 30.9999V28.9999C21.5913 28.9999 23.1174 28.3678 24.2426 27.2425C25.3679 26.1173 26 24.5912 26 22.9999V16.9999C26 15.4086 25.3679 13.8825 24.2426 12.7573C23.1174 11.632 21.5913 10.9999 20 10.9999C18.4087 10.9999 16.8826 11.632 15.7574 12.7573C14.6321 13.8825 14 15.4086 14 16.9999V23.9999H11C10.4696 23.9999 9.96086 23.7892 9.58579 23.4141C9.21071 23.039 9 22.5303 9 21.9999V17.9999C9 17.4695 9.21071 16.9608 9.58579 16.5857C9.96086 16.2106 10.4696 15.9999 11 15.9999H12.062C12.306 14.0668 13.2471 12.2892 14.7086 11.0006C16.1701 9.71198 18.0516 9.00098 20 9.00098C21.9484 9.00098 23.8299 9.71198 25.2914 11.0006C26.7529 12.2892 27.694 14.0668 27.938 15.9999H29ZM15.76 23.7849L16.82 22.0889C17.7731 22.6859 18.8754 23.0017 20 22.9999C21.1246 23.0017 22.2269 22.6859 23.18 22.0889L24.24 23.7849C22.9693 24.581 21.4995 25.0022 20 24.9999C18.5005 25.0022 17.0307 24.581 15.76 23.7849Z" fill="#E38393" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_69_213">
                                                    <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="para">
                                        <p style={{ fontSize: '16px' }}><b>Customer Support</b></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                       

                    </div> */}

                </div>
            </div>


        </Container>
    )
}

export default agentUseCase
