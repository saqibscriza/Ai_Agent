import React, { useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`

.my-form-check-input{
    background-color: #D9D9D9 !important;
    border-color: #D9D9D9 ;
}
.activeBG{
    background-color: #4E5586;
    color: #fff;
}
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
const knowledgeBase = () => {

    const [active, setInActive] = useState(false)
    const [checkButton, setCheckButton] = useState('English optimized')

    const funct = () => {
        setCheckButton('English optimized')
    }
    return (
        <Container>
            <div className="input " >
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                        <p className="mb-0" style={{ fontSize: '18px' }}>Enable RAG</p>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input my-form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckChecked"
                                onClick={() => { setInActive(!active), funct() }}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <p style={{ fontSize: '13px', color: '#2C2C2C' }}>Retrieval-Augmented Generation (RAG) increases the agent's maximum Knowledge Base size. The agent will have access to relevant pieces of attached Knowledge Base during answer generation.</p>
                </div>

                <div>
                    {
                        active === true && (
                            <>
                                <div>
                                    <div>
                                        <p className='' style={{ fontSize: '18px' }}>Enable RAG</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 pe-0">
                                            <button style={{ borderRadius: '0px', fontSize: '15px', border: '1px solid #e9e9ef' }} type="button" className={`btn  w-100 ${checkButton === 'English optimized' ? 'activeBG' : ''}`} onClick={() => setCheckButton('English optimized')}>English optimized</button>
                                        </div>
                                        <div className="col-6 ps-0">
                                            <button style={{ borderRadius: '0px', fontSize: '15px', border: '1px solid #e9e9ef' }} type="button" className={`btn  w-100 ${checkButton === 'Multilingual optimized' ? 'activeBG' : ''}`} onClick={() => setCheckButton('Multilingual optimized')}>Multilingual optimized</button>
                                        </div>
                                    </div>


                                    {
                                        checkButton === 'English optimized' && (
                                            <div>
                                                <div>
                                                    <div className='mt-2'>
                                                        <p className='mb-0' style={{ fontSize: '18px' }}>Character limit</p>
                                                        <div className="mb-3 " >
                                                            <label for="exampleFormControlInput1" style={{ fontSize: '14px' }} className="form-label  heading-14">Limit the total number of characters retrieved per query.</label>
                                                            <input type="email" className="form-control form-focus label-color  heading-14" value={''} onChange={(e) => handleLeaveCount(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="50000" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='mt-2'>
                                                        <p className='mb-0' style={{ fontSize: '18px' }}>Chunk limit</p>
                                                        <div className="mb-3 " >
                                                            <label for="exampleFormControlInput1" style={{ fontSize: '14px' }} className="form-label  heading-14">Limit the number of document chunks retrieved per query.</label>
                                                            <input type="email" className="form-control form-focus label-color  heading-14" value={''} onChange={(e) => handleLeaveCount(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="20" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className='mb-0' style={{ fontSize: '18px' }}>Vector distance limit</p>
                                                    <p style={{ fontSize: '13px' }}>Document chunks with a vector distance higher than this value (i.e., less similar) will not be retrieved.</p>
                                                </div>
                                                <div className="row" style={{ color: '#797D8C', fontSize: '13px' }}>
                                                    <div className="col-lg-6 "><p className='mb-2'>More deterministic</p></div>
                                                    <div className="col-lg-6 text-end"><p className='mb-2'>More expressive</p></div>
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
                                        )
                                    }
                                    {
                                        checkButton === 'Multilingual optimized' && (
                                            <>
                                                <h2>Other Page</h2>
                                            </>
                                        )
                                    }
                                </div>
                            </>
                        )

                    }
                </div>
            </div>
        </Container>
    )
}

export default knowledgeBase
