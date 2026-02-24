import React from "react";
import { RotatingLines } from 'react-loader-spinner'
import styled from "styled-components";

const DataLoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

const LoaderIVR = () => {
    return (
        <DataLoaderContainer>
            <p className='font20 mb-4' style={{ color: "#aaa" }}>
                We appreciate your patience, While is loading...
            </p>
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />        
            </DataLoaderContainer>

    );
};

export default LoaderIVR;