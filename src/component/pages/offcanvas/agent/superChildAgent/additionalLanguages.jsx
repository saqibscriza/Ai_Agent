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


// ---------------------------------- additionalLanguages OFFCANVAS ----------------------------------
const additionalLanguages = () => {

  return (
    <Container>
      <div className="input " >

        <div className="mb-3 mt-2" >
          <input type="email" className="form-control form-focus label-color  heading-14" value={''} onChange={(e) => handleLeaveCount(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Search languages" />
        </div>
        <div className="mb-3 mt-2" >
          <input type="email" className="form-control form-focus label-color  heading-14" value={''} onChange={(e) => handleLeaveCount(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Select all languages" disabled />
        </div>
        <div className='p-2' style={{border:'1px solid #E4E7EB', borderRadius:'5px',backgroundColor:'#FAFAFA'}}>
          <div className="row ">
            <div className="col-lg-6">
              <div>
                <img src="./Image/image 13.svg" alt="" />
                &nbsp; <span>Hindi</span>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <input style={{borderRadius:'10px'}} class="form-check-input" type="checkbox"  id="flexRadioDefault1" />
            </div>
          </div>
        </div>
        <div className='p-2' style={{border:'1px solid #E4E7EB', borderRadius:'5px'}}>
          <div className="row ">
            <div className="col-lg-6">
              <div>
                <img src="./Image/image 14.svg" alt="" />
                &nbsp; <span>Hindi</span>
              </div>
            </div>
            <div className="col-lg-6 text-end">
              <input style={{borderRadius:'10px'}} class="form-check-input" type="checkbox" name="" id="flexRadioDefault2" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default additionalLanguages
