import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Stepper from '../../../stepperCom/Stepper';
import { useParams, useLocation } from "react-router-dom";
import { CreateAgentApi, GoalPromtPostApi } from '../../../Utils/Apis.jsx';
import LoaderIVR from '../../../Loader/LoaderIVR.jsx';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';

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

`

const completeAgent = () => {

        const navigate = useNavigate();
    
    const [loaderCheck, setLoaderCheck] = useState(false);
    const [nameForGoalPromt, setNameForGoalPromt] = useState('');
    console.log('value of nameForGoalPromt',nameForGoalPromt)
    const { id } = useParams();
    const location = useLocation();
    // console.log('value from params', id); // URL param

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // post Api 
    const AddAgentApi = async (data) => {
        setNameForGoalPromt(data.name)
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("industry", location.state?.transferIndutryType);
        formData.append("useCase", id);
        formData.append("goal", data.goal);
        formData.append("websiteUrl", data.websiteUrl);
        setLoaderCheck(true)
        try {
            const response = await CreateAgentApi(formData);
            console.log('create agent api res ----', response)
            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
                const goalPrompt = response?.data?.agent
                localStorage.setItem('GoalPrompt', goalPrompt?.agentId)
                setLoaderCheck(false)
                
                setTimeout(() => {
                    navigate('/childagent');
                }, 2000)
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

    // Goal promt post Api 
    const GoalPromtApi = async () => {
        console.log('value call api post')
        const formData = new FormData();
        formData.append("name", '');
        formData.append("industry", location.state?.transferIndutryType);
        formData.append("useCase", id);
        setLoaderCheck(true)
        try {
            const response = await GoalPromtPostApi(formData);
            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
            
                setLoaderCheck(false)
                setValue("goal", response?.data?.mainGoal);

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
                    <Stepper currentStep={3} />
                </div>
            </div>

            <form className="container-fluid ps-1 pe-3 mt-1" style={{ width: '90%' }} onSubmit={handleSubmit(AddAgentApi)}>
                <div className="row" style={{ textAlign: '' }}>
                    <div className="col-lg-6 col-md-6">
                        <p className='pt-3 mb-0' style={{ color: '#FF9579', fontSize: '24px', fontWeight: '500' }}><b>Complete your agent</b></p>
                        <p className='' style={{ fontSize: '12px' }}><b>Name your agent, describe its goal, and optionally add your website</b></p>
                    </div>
                    <div className="col-lg-6 col-md-6 ">
                        <Link to="/addagentindustry" style={{ float: 'right' }}>
                            <button style={{ borderRadius: '25px', padding: '5px 20px', backgroundColor: '#f8f7f7' }} type="button" class="btn btn-md  playground  me-1 mt-4" > {'<'} &nbsp; Back</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Agent Name*</label>
                        <input type="text" class={`form-control form-control-md ${errors.name && "is-invalid"}`} id="exampleFormControlInput1" placeholder="Enter Name"
                            {...register("name", { required: "Vendor ID required" })} />
                        <small className="text-danger">{errors.name?.message}</small>
                    </div>
                    <div class="">
                        <label for="exampleFormControlInput1" class="form-label">Website (Optional)</label>
                        <input type="text" class="form-control form-control-md" id="exampleFormControlInput1" placeholder="Enter Name" {...register("websiteUrl")} />
                        <p className='mt-1 mb-3' style={{ fontSize: '14px' }}>We'll only access publicly available information from your website to personalize your agent.</p>
                    </div>

                    {/* <div className="mb-3 AI">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Main Goal
                        </label>
                        <textarea
                            id="exampleFormControlTextarea1"
                            rows="3"
                            className={`form-control form-control-md ${errors.goal ? "is-invalid" : ""
                                }`}
                            {...register("goal", { required: "Main Goal is required" })}
                        ></textarea>

                        <small className="text-danger">
                            {errors.goal?.message}
                        </small>
                    </div> */}
                     <div class="mb-3 AI" >
                        <label for="exampleFormControlTextarea1" class="form-label" >Main Goal * {'('}&nbsp;
                            <span onClick={(e)=> GoalPromtApi()}><a href="">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.562151 0.56215C-0.187384 1.31168 -0.187384 2.52691 0.562151 3.27644L1.61901 4.3333C1.62695 4.32412 1.63527 4.31517 1.64398 4.30645L4.30653 1.6439C4.31522 1.63522 4.32415 1.62692 4.3333 1.619L3.27644 0.56215C2.52691 -0.187383 1.31168 -0.187383 0.562151 0.56215Z" fill="#5041BC" />
                                <path d="M5.27928 2.59961C5.27146 2.60946 5.26325 2.61908 5.25464 2.62843L2.6266 5.4954C2.61799 5.50479 2.60916 5.51374 2.6001 5.52227L8.89931 12.3942C9.63918 13.2013 10.8386 13.2013 11.5785 12.3942C12.3183 11.5871 12.3183 10.2786 11.5785 9.47148L5.27928 2.59961Z" fill="#5041BC" />
                                <path d="M9.22738 0.20806C9.33683 -0.0693535 9.72942 -0.0693535 9.8388 0.20806L10.1314 0.94989C10.1648 1.03459 10.2319 1.10163 10.3166 1.13504L11.0584 1.42761C11.3358 1.53702 11.3358 1.92962 11.0584 2.03903L10.3166 2.33161C10.2319 2.36501 10.1648 2.43205 10.1314 2.51675L9.83887 3.25858C9.72942 3.53599 9.33683 3.53599 9.22738 3.25858L8.93486 2.51675C8.90141 2.43205 8.83438 2.36501 8.74968 2.33161L8.00788 2.03903C7.73045 1.92962 7.73045 1.53702 8.00788 1.42761L8.74968 1.13504C8.83438 1.10163 8.90141 1.03459 8.93486 0.94989L9.22738 0.20806Z" fill="#5041BC" />
                                <path d="M11.887 4.58485C11.9751 4.24971 12.2914 4.24971 12.3795 4.58485L12.4654 4.91161C12.4923 5.01393 12.5463 5.09493 12.6145 5.13527L12.8323 5.26415C13.0558 5.39633 13.0558 5.87067 12.8323 6.00281L12.6145 6.13168C12.5463 6.17202 12.4923 6.25303 12.4654 6.35531L12.3795 6.68211C12.2914 7.01726 11.9751 7.01726 11.887 6.68211L11.8011 6.35531C11.7742 6.25303 11.7202 6.17202 11.652 6.13168L11.4341 6.00281C11.2108 5.87067 11.2108 5.39633 11.4341 5.26415L11.652 5.13527C11.7202 5.09493 11.7742 5.01393 11.8011 4.91161L11.887 4.58485Z" fill="#5041BC" />
                                <path d="M1.79687 8.83408C1.92905 8.61064 2.40335 8.61064 2.53553 8.83408L2.6644 9.0519C2.70476 9.12014 2.78575 9.17414 2.88807 9.20104L3.21483 9.28695C3.54997 9.37505 3.54997 9.69128 3.21483 9.77937L2.88807 9.86529C2.78575 9.89218 2.70476 9.94619 2.6644 10.0144L2.53553 10.2322C2.40335 10.4557 1.92905 10.4557 1.79687 10.2322L1.668 10.0144C1.62764 9.94619 1.54665 9.89218 1.44433 9.86529L1.11757 9.77937C0.782425 9.69128 0.782425 9.37505 1.11757 9.28695L1.44433 9.20104C1.54665 9.17414 1.62764 9.12014 1.668 9.0519L1.79687 8.83408Z" fill="#5041BC" />
                            </svg>
                        </a>
                        </span> 
                        <span style={{ color: "#5041BC",cursor:'pointer' }} onClick={(e)=> GoalPromtApi()}>Generate with AI {')'}</span>
                        </label>
                        {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
                        <textarea
                            id="exampleFormControlTextarea1"
                            rows="3"
                            className={`form-control form-control-md ${errors.goal ? "is-invalid" : ""
                                }`}
                            {...register("goal", { required: "Main Goal is required" })}
                        ></textarea>

                        <small className="text-danger">
                            {errors.goal?.message}
                        </small>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="d-flex justify-content-center">
                        <div>
                                {/* <Link to='/childagent'> */}
                              <button
                                    type="submit"
                                    className="btn btn-md playground me-1 mt-2"
                                    style={{
                                        borderRadius: "25px",
                                        padding: "5px 20px",
                                        background: "linear-gradient(90deg, #454E91 0%, #5365E1 100%)",
                                        color: "#fff",
                                        border: "none"
                                    }}>
                                    Create Agent
                                </button>
                        </div>
                        <div className=" ">
                            <Link to="/agentusecase/:id" >
                                <button  style={{ borderRadius: '25px', padding: '5px 20px', backgroundColor: '#f8f7f7' }} type="button" class="btn btn-md  playground  me-1 mt-2" > {'<'} &nbsp; Back</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </form>
        </Container>
    )
}

export default completeAgent


 {/* <div class="mb-3 AI" >
                        <label for="exampleFormControlTextarea1" class="form-label" >Main Goal * {'('} <span ><a href="">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.562151 0.56215C-0.187384 1.31168 -0.187384 2.52691 0.562151 3.27644L1.61901 4.3333C1.62695 4.32412 1.63527 4.31517 1.64398 4.30645L4.30653 1.6439C4.31522 1.63522 4.32415 1.62692 4.3333 1.619L3.27644 0.56215C2.52691 -0.187383 1.31168 -0.187383 0.562151 0.56215Z" fill="#5041BC" />
                                <path d="M5.27928 2.59961C5.27146 2.60946 5.26325 2.61908 5.25464 2.62843L2.6266 5.4954C2.61799 5.50479 2.60916 5.51374 2.6001 5.52227L8.89931 12.3942C9.63918 13.2013 10.8386 13.2013 11.5785 12.3942C12.3183 11.5871 12.3183 10.2786 11.5785 9.47148L5.27928 2.59961Z" fill="#5041BC" />
                                <path d="M9.22738 0.20806C9.33683 -0.0693535 9.72942 -0.0693535 9.8388 0.20806L10.1314 0.94989C10.1648 1.03459 10.2319 1.10163 10.3166 1.13504L11.0584 1.42761C11.3358 1.53702 11.3358 1.92962 11.0584 2.03903L10.3166 2.33161C10.2319 2.36501 10.1648 2.43205 10.1314 2.51675L9.83887 3.25858C9.72942 3.53599 9.33683 3.53599 9.22738 3.25858L8.93486 2.51675C8.90141 2.43205 8.83438 2.36501 8.74968 2.33161L8.00788 2.03903C7.73045 1.92962 7.73045 1.53702 8.00788 1.42761L8.74968 1.13504C8.83438 1.10163 8.90141 1.03459 8.93486 0.94989L9.22738 0.20806Z" fill="#5041BC" />
                                <path d="M11.887 4.58485C11.9751 4.24971 12.2914 4.24971 12.3795 4.58485L12.4654 4.91161C12.4923 5.01393 12.5463 5.09493 12.6145 5.13527L12.8323 5.26415C13.0558 5.39633 13.0558 5.87067 12.8323 6.00281L12.6145 6.13168C12.5463 6.17202 12.4923 6.25303 12.4654 6.35531L12.3795 6.68211C12.2914 7.01726 11.9751 7.01726 11.887 6.68211L11.8011 6.35531C11.7742 6.25303 11.7202 6.17202 11.652 6.13168L11.4341 6.00281C11.2108 5.87067 11.2108 5.39633 11.4341 5.26415L11.652 5.13527C11.7202 5.09493 11.7742 5.01393 11.8011 4.91161L11.887 4.58485Z" fill="#5041BC" />
                                <path d="M1.79687 8.83408C1.92905 8.61064 2.40335 8.61064 2.53553 8.83408L2.6644 9.0519C2.70476 9.12014 2.78575 9.17414 2.88807 9.20104L3.21483 9.28695C3.54997 9.37505 3.54997 9.69128 3.21483 9.77937L2.88807 9.86529C2.78575 9.89218 2.70476 9.94619 2.6644 10.0144L2.53553 10.2322C2.40335 10.4557 1.92905 10.4557 1.79687 10.2322L1.668 10.0144C1.62764 9.94619 1.54665 9.89218 1.44433 9.86529L1.11757 9.77937C0.782425 9.69128 0.782425 9.37505 1.11757 9.28695L1.44433 9.20104C1.54665 9.17414 1.62764 9.12014 1.668 9.0519L1.79687 8.83408Z" fill="#5041BC" />
                            </svg>
                        </a>
                        </span> 
                        <span style={{ color: "#5041BC" }}>Generate with AI {')'}</span>
                        </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div> */}