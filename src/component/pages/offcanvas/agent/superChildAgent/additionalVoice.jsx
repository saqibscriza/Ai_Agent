import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
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


`

const additionalVoice = () => {
  return (
    <Container>
      <div className="input " >
        <div className="mb-1  ">
          <label for="exampleFormControlInput1" className="form-label  heading-16">Voice</label>
          <select class="form-select   form-focus  label-color" value={''} onChange={(e) => setRoleId(e.target.value)} aria-label="Default select example">
            <option value="">Select a voice</option>

          </select>
        </div>
        <div className="mb-3 mt-2" >
          <label for="exampleFormControlInput1" className="form-label  heading-14">Voice label</label>
          <input type="email" className="form-control form-focus label-color  heading-14" value={''} onChange={(e) => handleLeaveCount(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Unique identifier used by LLM" />
        </div>
        <div className="row nt-2">
          <div className="col-lg-6">
            <div className="mb-1  ">
              <label for="exampleFormControlInput1" className="form-label  heading-14">Language</label>
              <select class="form-select   form-focus  label-color" value={''} onChange={(e) => setUserId(e.target.value)} aria-label="Default select example">
                <option value="">Same as agent</option>
                {/* {
                          userAllData?.map(item => (
                            <option key={item.id} value={item.id}>{item.staffName}</option>
                          ))
                        } */}
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mb-1  ">
              <label for="exampleFormControlInput1" className="form-label  heading-14">Model family</label>
              <select class="form-select   form-focus  label-color" value={''} onChange={(e) => setUserId(e.target.value)} aria-label="Default select example">
                <option value="">Same as agent</option>
                {/* {
                          userAllData?.map(item => (
                            <option key={item.id} value={item.id}>{item.staffName}</option>
                          ))
                        } */}
              </select>
            </div>
          </div>
        </div>
        <div class="mb-3 mt-2">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Describe when the agent should use this voice.'></textarea>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <p className='mb-1'>Stability</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-end " >
              <div className='' style={{ color: '#797D8C', fontSize: '13px' }}>
                <p className='mb-1'>Using default</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p style={{ color: '#797D8C', fontSize: '13px' }}>More expressive</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-end" >
              <div className=''>
                <p style={{ color: '#797D8C', fontSize: '13px' }}>More consistent</p>
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
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <p className='mb-1'>Speed</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-end " >
              <div className='' style={{ color: '#797D8C', fontSize: '13px' }}>
                <p className='mb-1'>Using default</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <p style={{ color: '#797D8C', fontSize: '13px' }}>Slower</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-end" >
              <div className=''>
                <p style={{ color: '#797D8C', fontSize: '13px' }}>Slower</p>
              </div>
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${40}%` }}
              >
                <div className="progress-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 ">
              <p className='mb-1'>Similarity</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 text-end " >
              <div className='' style={{ color: '#797D8C', fontSize: '13px' }}>
                <p className='mb-1'>Using default</p>
              </div>
            </div>
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
                style={{ width: `${60}%` }}
              >
                <div className="progress-circle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row  mt-4" style={{marginLeft:'0px',marginRight:'0px'}}>
          <button className='' style={{ padding: "2px", backgroundColor: '#4E5586', border: '1px solid #4E5586' }} type="button" class="btn btn-primary">Add Voice</button>
        </div>
      </div>
    </Container>
  )
}

export default additionalVoice
