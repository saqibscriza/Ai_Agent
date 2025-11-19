import React from "react";

const LogInPage = () => {


 function togglePassword() {
    const input = document.getElementById("passwordInput");
    const icon = document.getElementById("eyeIcon");

    if (input.type === "password") {
      input.type = "text";
      icon.innerHTML = `<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11-3a3 3 0 110 6 3 3 0 010-6z"/>`;
    } else {
      input.type = "password";
      icon.innerHTML = `<path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z"/>`;
    }
  }

    return (
        <div className="bg-light " style={{ backgroundColor: '#4E5586' }}>
            <div className="container-sm min-vh-100 d-flex justify-content-center align-items-center">
                <div
                    className="row w-100  rounded-4 shadow overflow-hidden"
                    id="main-row"
                    style={{ maxWidth: "1150px", minHeight: "650px", backgroundColor: '#4E5586' }}
                >
                    {/* Left Column */}
                    <div className="col-md-6 col-sm-12  bg-color-custom d-flex flex-column justify-content-center ">
                        <div className="bg-double-color d-flex flex-column justify-content-center mb-4">
                            <div className="text-center loginImg mb-3" >
                                <img src="./public/Image/Group 80.svg" alt="" />
                            </div>
                            <div className="w-75 mx-auto">
                                <h5 className="orange-color mb-4">Login</h5>
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label white-color"
                                    >
                                        Email
                                    </label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bg-white border-end-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26 26">
                                                <path fill="#aaa" d="M3 4C1.344 4 0 5.344 0 7v12c0 1.656 1.344 3 3 3h20c1.656 0 3-1.344 3-3V7c0-1.656-1.344-3-3-3zm0 2h20c.551 0 1 .449 1 1v.5l-11 5.938L2 7.5V7c0-.551.449-1 1-1M2 7.781l6.531 5.094l-6.406 6.563l7.813-5.563L13 15.844l3.063-1.969l7.812 5.563l-6.406-6.563L24 7.781V19a.95.95 0 0 1-.125.438c-.165.325-.486.562-.875.562H3c-.389 0-.71-.237-.875-.563A.95.95 0 0 1 2 19z" />
                                            </svg>
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control border-start-0"
                                            placeholder="Enter Your Email"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label white-color">Password</label>
                                    <div className="input-group mb-3">
                                        {/* <!-- Left Icon --> */}
                                        <span className="input-group-text bg-white border-end-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                                                <g fill="none" stroke="#aaa" stroke-linecap="round" strokeWidth="1">
                                                    <path strokeWidth="1.5" d="M15.395 21.9a94 94 0 0 1-4.424.1a95 95 0 0 1-4.424-.1c-1.678-.076-3.056-1.385-3.28-3.055C3.12 17.755 3 16.638 3 15.5s.12-2.255.267-3.345c.224-1.67 1.602-2.979 3.28-3.056C7.958 9.034 9.392 9 10.97 9s3.013.034 4.424.1c1.06.048 2 .588 2.605 1.4" />
                                                    <path stroke-linejoin="round" strokeWidth="1.5" d="M17 14.978A1.99 1.99 0 0 1 19 13c1.105 0 2 .886 2 1.978c0 .394-.116.76-.317 1.069c-.598.919-1.683 1.795-1.683 2.887v.495M19 22h.012M6.5 9V6.5a4.5 4.5 0 0 1 9 0V9" />
                                                    <path stroke-linejoin="round" strokeWidth="2" d="M12 15.49v.01m-4-.01v.01" />
                                                </g>
                                            </svg>
                                        </span>
                                        <input
                                            type="password"
                                            id="passwordInput"
                                            className="form-control border-start-0 border-end-0"
                                            placeholder="6+ Strong Character"
                                        />
                                        <span className="input-group-text bg-white" onClick={()=> togglePassword()} style={{cursor:'pointer'}}>
                                            <svg id="eyeIcon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#aaa" viewBox="0 0 24 24">
                                                <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7zm0 12a5 5 0 110-10 5 5 0 010 10zm0-8a3 3 0 100 6 3 3 0 000-6z" />
                                            </svg>
                                        </span>

                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1" style={{ color: '#fff' }}>
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <a href="#" className="white-color" style={{ textDecoration: 'none' }}>Forgot password?</a>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <button type="button" className="btn orange-bg white-color w-100">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F5F5F5', borderRadius: '30px 0px 0px 30px' }}>
                        <div style={{ borderRadius: '10px 0px 0px 10px' }}>
                            <div className="img-div ps-4 rounded-4" >
                                <img src="./public/Image/cuate.svg" alt="login illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;
