import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SuperChildAgent from '../superChildAgent/superChildAgent';
import KnowledgeBase from '../knowledgeBase/knowledgeBase';
import Analysis from '../analysis/analysis';
import Test from '../tests/test';
import Widget from '../widget/widget';
import styled from 'styled-components';

const Container = styled.div`
.activeBroder {
    border-bottom: 2px solid #FF8057;
    width: fit-content;
    padding-bottom: 11px;   
}
   @media (max-width: 991px) {
    .my-active-navbar {
    margin-top: 8px;  
    }
}
`
const childAgent = () => {

    const [active, setInActive] = useState('agent')

    return (
        <Container>
            <div className="container-fluid ps-1 pe-3 mt-3">
                <div className='breadcrumm p-1 px-3'>
                    <div className="row pt-2">
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
                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                            <div className='d-flex breadcrmBtn ' style={{ marginTop: '-8px' }}>
                                <Link to='/aicallingagent'>
                                <div>
                                    <button type="button" class="btn btn-md  playground me-1" style={{ backgroundColor: '#4E5586', color: '#fff' }}  >Preview Agent</button>
                                </div>
                                </Link>
                                <div style={{ border: '1px solid #aaa', borderRadius: '5px' }}>
                                    <div class="dropdown my-dropdown ">
                                        <a style={{ padding: '5px 10px' }} class="btn btn-secondary my-btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg width="21" height="6" viewBox="0 0 21 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.2583 5.48333C19.7725 5.48333 21 4.25585 21 2.74167C21 1.22749 19.7725 0 18.2583 0C16.7441 0 15.5166 1.22749 15.5166 2.74167C15.5166 4.25585 16.7441 5.48333 18.2583 5.48333Z" fill="#797D8C" />
                                                <path d="M10.5002 5.48333C12.0144 5.48333 13.2419 4.25585 13.2419 2.74167C13.2419 1.22749 12.0144 0 10.5002 0C8.98604 0 7.75854 1.22749 7.75854 2.74167C7.75854 4.25585 8.98604 5.48333 10.5002 5.48333Z" fill="#797D8C" />
                                                <path d="M2.74169 5.48333C4.25589 5.48333 5.48338 4.25585 5.48338 2.74167C5.48338 1.22749 4.25589 0 2.74169 0C1.2275 0 0 1.22749 0 2.74167C0 4.25585 1.2275 5.48333 2.74169 5.48333Z" fill="#797D8C" />
                                            </svg>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Conversation History</a></li>
                                            <li><a class="dropdown-item" href="#"> Duplicate Agent</a></li>
                                            <li><a class="dropdown-item" href="#">Unarchive Agent</a></li>
                                            <li><a class="dropdown-item" href="#">Delete Agent</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <div><button type="button" class="btn  newAgent" ><Link to='./addagentindustry'>+ New Agent</Link></button></div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid ps-1 pe-3 mt-1" style={{ width: '95%' }}>
                    <div>
                        <div className="row" style={{ textAlign: '' }}>
                            <div className="col-lg-6 col-md-6">
                                <div className='d-flex'>
                                    <p className='pt-3 mb-0' style={{ color: '#000', fontSize: '24px', fontWeight: '500' }}><b>Shahrukh</b></p>
                                    <div className='mt-2 ms-3'>
                                        <button style={{ borderRadius: '25px', padding: '2px 6px', backgroundColor: '#f8f7f7', fontSize: '10px', }} type="button" class="btn btn-md  playground  me-1 mt-3" >Public</button>
                                    </div>
                                </div>
                                <div>
                                    <p style={{ color: '#CCCCCC' }}>agent_1401k9rwrtg8eb8rfggq4xsw3aeb
                                        <span className='ms-2'>
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8747 5.66675C14.8747 4.49315 13.9233 3.54175 12.7497 3.54175H7.08301C5.90941 3.54175 4.95801 4.49315 4.95801 5.66675V14.1667C4.95801 15.3404 5.90941 16.2917 7.08301 16.2917H12.7497C13.9233 16.2917 14.8747 15.3404 14.8747 14.1667V5.66675ZM13.458 5.66675C13.458 5.27555 13.1409 4.95841 12.7497 4.95841H7.08301C6.69181 4.95841 6.37467 5.27555 6.37467 5.66675V14.1667C6.37467 14.558 6.69181 14.8751 7.08301 14.8751H12.7497C13.1409 14.8751 13.458 14.558 13.458 14.1667V5.66675Z" fill="#CCCCCC" />
                                                <path d="M4.25 2.12492H11.3333C11.7245 2.12492 12.0417 1.80778 12.0417 1.41659C12.0417 1.02539 11.7245 0.708252 11.3333 0.708252H4.25C3.0764 0.708252 2.125 1.65965 2.125 2.83325V12.7499C2.125 13.1411 2.44214 13.4583 2.83333 13.4583C3.22453 13.4583 3.54167 13.1411 3.54167 12.7499V2.83325C3.54167 2.44205 3.8588 2.12492 4.25 2.12492Z" fill="#CCCCCC" />
                                            </svg>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='ps-4' style={{ backgroundColor: '#F1F1F9', paddingTop: '12px' }}>
                                <div className="col-7">
                                    <div className="row">
                                        <div className={`col-lg-2 col-md-4 col-sm-8  ${active === 'agent' ? 'activeBroder' : ''}`} style={{cursor:'pointer'}} onClick={() => setInActive('agent')}>Agent </div>
                                        <div className={`col-lg-3 col-md-6 col-sm-9  my-active-navbar  mt-0 ${active === 'knowledgeBase' ? 'activeBroder' : ''}`} style={{cursor:'pointer'}} onClick={() => setInActive('knowledgeBase')} >Knowledge Base</div>
                                        <div className={`col-lg-2 col-md-4 col-sm-8  ${active === 'analysis' ? 'activeBroder' : ''}`} style={{cursor:'pointer'}} onClick={() => setInActive('analysis')}>Analysis</div>
                                        <div className={`col-lg-2 col-md-4 col-sm-8  ${active === 'test' ? 'activeBroder' : ''}`} style={{cursor:'pointer'}} onClick={() => setInActive('test')}>Tests</div>
                                        <div className={`col-lg-1 col-md-4 col-sm-8  ${active === 'widget' ? 'activeBroder' : ''}`} style={{cursor:'pointer'}} onClick={() => setInActive('widget')}>Widget</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5"></div>
                        </div>
                        <div className="row">
                            {
                                active === 'agent' && (<SuperChildAgent />)
                                // active === 'agent' && (<superChildAgent data={data} />)
                            }
                            {
                                active === 'knowledgeBase' && (<KnowledgeBase />)
                            }
                            {
                                active === 'analysis' && (<Analysis />)
                            }
                            {
                                active === 'test' && (<Test />)
                            }
                            {
                                active === 'widget' && (<Widget />)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default childAgent
