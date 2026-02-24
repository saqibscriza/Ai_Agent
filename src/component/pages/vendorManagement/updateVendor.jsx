import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { getVendorDataById, updateVendorDataById } from '../../../Utils/Apis.jsx';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import LoaderIVR from '../../../Loader/LoaderIVR.jsx';

const updateVendor = () => {

    const [loaderCheck, setLoaderCheck] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    const { id } = useParams();
    useEffect(() => {
        if (id) {
            VendorDataById();
        }
    }, [id]);

    // get by id data function
    const VendorDataById = async () => {
        setLoaderCheck(true)
        try {
            const response = await getVendorDataById(id);
            console.log('data by id', response)
            if (response?.data?.status === "success") {
                const vendor = response.data.vendor;
                setLoaderCheck(false)
                // set form values
                setValue("status", vendor.status ? "Active" : "Inactive");

                // ⭐ THIS FILLS THE FORM
                reset({
                    vendorId: vendor.vendorId,
                    vendorName: vendor.vendorName,
                    emailAddress: vendor.emailAddress,
                    mobileNumber: vendor.mobileNumber,
                    addressLine1: vendor.addressLine1,
                    addressLine2: vendor.addressLine2,
                    landmark: vendor.landmark,
                    city: vendor.city,
                    district: vendor.district,
                    state: vendor.state,
                    pincode: vendor.pincode,
                    country: vendor.country,
                    createDate: vendor.createdDate?.slice(0, 10),
                    renewalDate: vendor.renewalDate?.slice(0, 10),
                    subscriptionPlan: vendor.subscriptionPlan,
                    status: vendor.status,
                    status: vendor.status === true ? "true" : "false",

                });

            } else {
                toast.error(response?.data?.message);
                setLoaderCheck(false)
            }
        } catch (error) {
            console.log(error);
        }
    };
    // update Api 
    const AddVendorApi = async (data) => {

        const formData = new FormData();
        // append all fields coming from react-hook-form
        formData.append("vendorName", data.vendorName);
        formData.append("vendorId", data.vendorId);
        formData.append("emailAddress", data.emailAddress);
        formData.append("mobileNumber", data.mobileNumber);
        formData.append("addressLine1", data.addressLine1);
        formData.append("addressLine2", data.addressLine2);
        formData.append("landmark", data.landmark);
        formData.append("city", data.city);
        formData.append("district", data.district);
        formData.append("state", data.state);
        formData.append("pincode", data.pincode);
        formData.append("country", data.country);

        formData.append("createDate", data.createDate);
        formData.append("subscriptionPlan", data.subscriptionPlan);
        formData.append("renewalDate", data.renewalDate);
        formData.append("status", data.status);
        try {
            const response = await updateVendorDataById(id, formData);
            if (response?.data?.status === "success") {
                toast.success(response?.data?.message);
                setTimeout(() => {
                    navigate('/vendormanagement');
                }, 2000)
            } else {
                toast.error(response?.data?.message);
                //   setShow(true)
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
            <div className="container-fluid ps-1 pe-3 mt-3">
                <div className='breadcrumm p-1 px-3'>
                    <div className="row mt-margin-responsive pt-2">
                        <nav
                            style={{ "--bs-breadcrumb-divider": "'>'" }}
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                                <li className="breadcrumb-item my-anchor"><a href="#">Vendor Management</a></li>
                                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Update Vendor</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row " style={{ marginTop: '-10px' }}>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='' style={{ fontSize: "16px" }}>
                                <p>Create and manage your Vendor Management</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                            <div className='d-flex breadcrmBtn ' style={{ marginTop: '-8px' }}>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div>
                        <div>
                            <div style={{ color: '#7162DB', fontSize: '16px', borderRadius: '2px' }}>
                                <p className='pt-3'><b>Update Vendor</b></p>
                            </div>
                            <div style={{ backgroundColor: '#F5F3FF', padding: '' }}>
                                <p className='p-2 ps-4'>Vendor Details</p>
                            </div>
                        </div>
                        <div className="row mx-1">
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Vendor ID</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="VEND-7682-01" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Vendor Name</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Vendor Name" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Mobile Number" />
                                </div>
                            </div>

                        </div>
                        <div className="row mx-1">
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Create Date</label>
                                    <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="11 October 2025" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Subscription Plan</label>
                                    <select class="form-select form-select-sm   " aria-label="Default select example">
                                        <option selected>Select Plan</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Renewal Date</label>
                                    <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Email Address" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Status</label>
                                    <select class="form-select form-select-sm   " aria-label="Default select example">
                                        <option selected>Select Status</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div>
                            <div style={{ backgroundColor: '#F5F3FF', padding: '', borderRadius: '2px' }}>
                                <p className='p-2 ps-4'>Vendor Address Details</p>
                            </div>
                        </div>
                        <div className="row mx-1">
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Address Line 1</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Address Line 1" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Address Line 2</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Address Line 2" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Landmark</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Landmark" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">City</label>
                                    <input type="email" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter City Name" />
                                </div>
                            </div>

                        </div>
                        <div className="row mx-1">
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">District</label>
                                    <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter District" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">State</label>
                                    <select class="form-select form-select-sm   " aria-label="Default select example">
                                        <option selected>Select State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Pin Code</label>
                                    <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter Pin Code" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 " >
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Country</label>
                                    <select class="form-select form-select-sm   " aria-label="Default select example">
                                        <option selected>Select Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className="row d-flex">
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className=" ">
                                    <Link to="" >
                                        <button
                                            type="button"
                                            className="btn btn-md playground me-1 mt-3"
                                            style={{
                                                borderRadius: "25px",
                                                padding: "7px 20px",
                                                background: "linear-gradient(90deg, #454F93 0%, #5365DF 100%)",
                                                color: "#fff",
                                                border: "none",
                                            }}
                                        >
                                            Update Vendor
                                        </button>

                                    </Link>
                                </div>
                                <div className="">
                                    <Link to="/vendormanagement" >
                                        <button style={{ borderRadius: '25px', padding: '6px 24px', backgroundColor: '#f8f7f7' }} type="button" class="btn btn-md  playground  me-1 mt-3" > {'<'} &nbsp; Back</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <form onSubmit={handleSubmit(AddVendorApi)}>
                    <div>
                        {/* HEADER */}
                        <div style={{ color: '#7162DB', fontSize: '16px' }}>
                            <p className="pt-3"><b>Add Vendor</b></p>
                        </div>

                        <div style={{ background: '#F5F3FF' }}>
                            <p className="p-2 ps-4">Vendor Details</p>
                        </div>

                        {/* ROW 1 */}
                        <div className="row mx-1">

                            <div className="col-lg-3">
                                <label>Vendor ID</label>
                                <input className={`form-control form-control-sm ${errors.vendorId && "is-invalid"}`}
                                    placeholder="VEND-7682-01"
                                    {...register("vendorId", { required: "Vendor ID required" })} />
                                <small className="text-danger">{errors.vendorId?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Vendor Name</label>
                                <input className={`form-control form-control-sm ${errors.vendorName && "is-invalid"}`}
                                    placeholder="Enter Vendor Name"
                                    {...register("vendorName", { required: "Vendor name required" })} />
                                <small className="text-danger">{errors.vendorName?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Email Address</label>
                                <input className={`form-control form-control-sm ${errors.emailAddress && "is-invalid"}`}
                                    placeholder="Enter Email Address"
                                    {...register("emailAddress", {
                                        required: "Email required",
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter valid email" }
                                    })} />
                                <small className="text-danger">{errors.emailAddress?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Mobile Number</label>
                                <input className={`form-control form-control-sm ${errors.mobileNumber && "is-invalid"}`}
                                    placeholder="Enter Mobile Number"
                                    {...register("mobileNumber", {
                                        required: "Mobile required",
                                        pattern: { value: /^[0-9]{10}$/, message: "Enter 10 digit mobile" }
                                    })} />
                                <small className="text-danger">{errors.mobileNumber?.message}</small>
                            </div>

                        </div>
                        {/* ROW 2 - EXTRA DETAILS */}
                        <div className="row mx-1 mt-2">

                            {/* CREATE DATE */}
                            <div className="col-lg-3">
                                <label>Create Date</label>
                                <input
                                    type="date"
                                    className="form-control form-control-sm"
                                    {...register("createDate", {
                                        required: "Create Date is required"
                                    })}
                                />
                                <p className="text-danger small">{errors.createDate?.message}</p>
                            </div>

                            {/* SUBSCRIPTION PLAN */}
                            <div className="col-lg-3">
                                <label>Subscription Plan</label>
                                <select
                                    className="form-select form-select-sm"
                                    {...register("subscriptionPlan", {
                                        required: "Subscription Plan is required"
                                    })}
                                >
                                    <option value="">Select Plan</option>
                                    <option value="Basic">Basic</option>
                                    <option value="Standard">Standard</option>
                                    <option value="Premium">Premium</option>
                                </select>
                                <p className="text-danger small">{errors.subscriptionPlan?.message}</p>
                            </div>

                            {/* RENEWAL DATE */}
                            <div className="col-lg-3">
                                <label>Renewal Date</label>
                                <input
                                    type="date"
                                    className="form-control form-control-sm"
                                    {...register("renewalDate", {
                                        required: "Renewal Date is required"
                                    })}
                                />
                                <p className="text-danger small">{errors.renewalDate?.message}</p>
                            </div>

                            {/* STATUS */}
                            <div className="col-lg-3">
                                <label>Status</label>
                                <select
                                    className="form-select form-select-sm"
                                    {...register("status", {
                                        required: "Status is required"
                                    })}
                                >
                                    <option value="">Select Status</option>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                    {/* <option value="Pending">Pending</option> */}
                                </select>
                                <p className="text-danger small">{errors.status?.message}</p>
                            </div>

                        </div>

                        {/* SECTION TITLE */}
                        <div style={{ background: '#F5F3FF', marginTop: 20 }}>
                            <p className="p-2 ps-4">Vendor Address Details</p>
                        </div>

                        {/* ADDRESS ROW 1 */}
                        <div className="row mx-1">

                            <div className="col-lg-3">
                                <label>Address Line 1</label>
                                <input className={`form-control form-control-sm ${errors.addressLine1 && "is-invalid"}`}
                                    {...register("addressLine1", { required: "Address required" })} />
                                <small className="text-danger">{errors.addressLine1?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Address Line 2</label>
                                <input className={`form-control form-control-sm ${errors.addressLine2 && "is-invalid"}`}
                                    {...register("addressLine2", { required: "Address required" })} />
                                <small className="text-danger">{errors.addressLine2?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Landmark</label>
                                <input className={`form-control form-control-sm ${errors.landmark && "is-invalid"}`}
                                    {...register("landmark", { required: "Landmark required" })} />
                                <small className="text-danger">{errors.landmark?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>City</label>
                                <input className={`form-control form-control-sm ${errors.city && "is-invalid"}`}
                                    {...register("city", { required: "City required" })} />
                                <small className="text-danger">{errors.city?.message}</small>
                            </div>

                        </div>

                        {/* ADDRESS ROW 2 */}
                        <div className="row mx-1">

                            <div className="col-lg-3">
                                <label>District</label>
                                <input className={`form-control form-control-sm ${errors.district && "is-invalid"}`}
                                    {...register("district", { required: "District required" })} />
                                <small className="text-danger">{errors.district?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>State</label>
                                <input className={`form-control form-control-sm ${errors.state && "is-invalid"}`}
                                    {...register("state", { required: "State required" })} />
                                <small className="text-danger">{errors.state?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Pin Code</label>
                                <input className={`form-control form-control-sm ${errors.pincode && "is-invalid"}`}
                                    {...register("pincode", {
                                        required: "Pincode required",
                                        pattern: { value: /^[0-9]{6}$/, message: "Enter valid pincode" }
                                    })} />
                                <small className="text-danger">{errors.pincode?.message}</small>
                            </div>

                            <div className="col-lg-3">
                                <label>Country</label>
                                <input className={`form-control form-control-sm ${errors.country && "is-invalid"}`}
                                    {...register("country", { required: "Country required" })} />
                                <small className="text-danger">{errors.country?.message}</small>
                            </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="text-center mt-4">

                            <button
                                type="submit"
                                className="btn btn-md me-2"
                                style={{
                                    borderRadius: "25px",
                                    padding: "7px 20px",
                                    background: "linear-gradient(90deg,#454F93 0%,#5365DF 100%)",
                                    color: "#fff",
                                    border: "none"
                                }}>
                                Create Vendor
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate("/vendormanagement")}
                                className="btn btn-md"
                                style={{ borderRadius: '25px', padding: '6px 24px', background: '#f8f7f7' }}>
                                {'<'} Back
                            </button>

                        </div>

                    </div>

                </form>
            </div>
        </>
    )
}

export default updateVendor
