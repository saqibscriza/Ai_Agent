import React from "react";
// import "./stepper.css";
import styled from 'styled-components';

const Container = styled.div`
.stepper-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* each step */
.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;
}

/* circle */
.step-circle {
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 3px solid #cfd8dc;
  background: white;
  z-index: 2;
}

/* active step */
.step-circle.active {
  border-color: rgba(78, 85, 134, 1);
  background: #fff;
}

/* completed step */
.step-circle.completed {
  background: rgba(78, 85, 134, 1);
  border-color: rgba(78, 85, 134, 1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* label text */
.step-label {
  margin-top: 8px;
  font-size: 14px;
  color: #555;
}

/* connecting line */
.step-line {
  position: absolute;
  /* top: 14px; */
  top: 10px;
  left: 50%;
  width: 100%;
  height: 3px;
  background: #cfd8dc;
  z-index: 1;
}

/* completed line */
.line-completed {
  background: rgba(78, 85, 134, 1);
}

`
const Stepper = ({ currentStep = 1 }) => {
  const steps = [
    "Select Industry",
    "Choose Use Case",
    "Agent Details",
    "Finish Agent",
  ];

  return (
    <Container>
      <div className="stepper-wrapper">
        {steps?.map((label, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div className="step-item" key={index}>
              <div
                className={`step-circle 
                  ${isCompleted ? "completed" : ""} 
                  ${isActive ? "active" : ""}`}
              >
                {isCompleted ? "✓" : ""}
              </div>

              <div className="step-label">{label}</div>

              {index !== steps?.length - 1 && (
                <div
                  className={`step-line ${
                    currentStep > stepNumber ? "line-completed" : ""
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Stepper;
