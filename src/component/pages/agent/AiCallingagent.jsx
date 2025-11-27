import React from 'react'
import { Link } from 'react-router-dom'

const AiCallingagent = () => {
    return (
        <>
            <div>
                <div className='breadcrumm p-1 px-3 me-3'>
                    <div className="row pt-2">
                        <nav
                            style={{
                                "--bs-breadcrumb-divider": "'>'"
                            }}
                            aria-label="breadcrumb"
                        >
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item my-anchor"><a href="#">Home</a></li>
                                <li className="breadcrumb-item my-anchor"><a href="#">Shahrukh</a></li>
                                <li className="breadcrumb-item active" style={{ color: '#FF9579' }} aria-current="page">Test AI agent</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    </div>
                    <div className="col-lg-6 col-md-6 " >
                        <div className='me-5'>
                            <Link to="/childagent" style={{ float: 'right' }}>
                                <button style={{ borderRadius: '25px', padding: '5px 20px', backgroundColor: '#f8f7f7' }} type="button" class="btn btn-md  playground  me-1 mt-3" > {'<'} &nbsp; Back</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: '100%',
                    height: '40vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img style={{ width: '20%', height: 'auto' }} src="./Image/Mask group (2).svg" alt="" />

                </div>
            </div>
        </>
    )
}
export default AiCallingagent
