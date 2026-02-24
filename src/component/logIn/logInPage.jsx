import React, { useState } from "react";
import { LoginApi } from "../../Utils/Apis";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import LoaderIVR from '../../Loader/LoaderIVR';


const LogInPage = () => {

      const [loaderCheck, setLoaderCheck] = useState(false);
    
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


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

    // post Api 
    const AdminLogInApi = async (data) => {
        const myData = {
            email: data.email,
            password: data.password,
        };
        setLoaderCheck(true)
        try {
            const response = await LoginApi(myData);
            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
                sessionStorage.setItem('token', response?.data?.token);
                setLoaderCheck(false)
                setTimeout(() => {
                    navigate('/dashboard');
                }, 1000)
            } else {
                  toast.error(response?.data?.message);
                //   setShow(true)
                setLoaderCheck(false)
            }
        } catch (error) {
            console.log(error)
            // setLoader(false)
        }
    }



    return (
        <>
         {
          loaderCheck && (
            <LoaderIVR />
          )
        }
        <div className="bg-light " style={{ backgroundColor: '#4E5586' }}>
            <div className="container-sm min-vh-100 d-flex justify-content-center align-items-center">
                <div className="row w-100  rounded-4 shadow overflow-hidden" id="main-row" style={{ maxWidth: "1150px", minHeight: "650px", backgroundColor: '#4E5586' }}>
                    {/* Left Column */}
                    <div className="col-md-6 col-sm-12  bg-color-custom d-flex flex-column justify-content-center ">
                        <div className="bg-double-color d-flex flex-column justify-content-center mb-4">
                            <div className="text-center loginImg mb-3" >
                                <img src="./public/Image/Group 80.svg" alt="" />
                            </div>

                            <form className="w-75 mx-auto" onSubmit={handleSubmit(AdminLogInApi)}>
                                <h5 className="orange-color mb-4">Login</h5>

                                <div className="mb-3">
                                    <label className="form-label white-color">Email</label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-white border-end-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path fill="#000" d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z" />
                                            </svg>
                                        </span>
                                        <input
                                            type="text"
                                            // onChange={handleEmailChange}
                                            placeholder="Enter Your Email"
                                            className={`form-control border-start-0 ${errors.email ? "is-invalid" : ""}`}
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: "Enter valid email address",
                                                },
                                            })}
                                        />
                                    </div>
                                    {errors.email && (
                                        <small className="text-danger">{errors.email.message}</small>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label white-color">Password</label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-white border-end-0">
                                            🔒
                                        </span>

                                        <input
                                            type="password"
                                            id="passwordInput"
                                            // onChange={handlePassword}
                                            placeholder="6+ Strong Character"
                                            className={`form-control border-start-0 border-end-0 ${errors.password ? "is-invalid" : ""}`}
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message: "Minimum 6 characters required",
                                                },
                                                pattern: {
                                                    value: /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/,
                                                    message: "Must contain 1 capital letter & 1 number",
                                                },
                                            })}
                                        />

                                        <span
                                            className="input-group-text bg-white"
                                            onClick={togglePassword}
                                            style={{ cursor: "pointer" }}>
                                            👁
                                        </span>
                                    </div>

                                    {errors.password && (
                                        <small className="text-danger">{errors.password.message}</small>
                                    )}
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            {...register("rememberMe")}
                                            id="defaultCheck1"
                                        />
                                        <label className="form-check-label text-white">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#" className="white-color" style={{ textDecoration: "none" }}>
                                        Forgot password?
                                    </a>
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    <button type="submit" className="btn orange-bg white-color w-100" >
                                        {/* <button type="submit" className="btn orange-bg white-color w-100" onClick={(e) => AdminLogInApi(e)}> */}
                                        Login
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-6 col-sm-12 p-4 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#F5F5F5', borderRadius: '30px 0px 0px 30px' }}>
                        <div style={{ borderRadius: '10px 0px 0px 10px' }}>
                            <div className="img-div ps-4 rounded-4" >
                                <img src="/Image/cuate.svg" alt="login image" />
                                {/* <img src="./public/Image/cuate.svg" alt="login image" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};


export default LogInPage;

//   setLoader(true)
//   const formData = new FormData()
//   formData.append('returnDate', returndate);
//   formData.append('classId', Class);
//   formData.append('sectionId', sectionId);
//   formData.append('studentId', student);
//   formData.append('bookId', book);
