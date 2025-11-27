import React from 'react'

const analysis = () => {
  return (
    <>
      <div>
        <div className="row mt-2">
          <div className="col-8">
            <div className='row'>
              <div className="col-2 ">
                <h4 className='mt-2' style={{ color: '#FF8057' }}>Analysis</h4>
              </div>
              <div className="col-2 px-0">
                <div className='mt-3' style={{ fontSize: '13px' }}>
                  <button style={{ border: 'none', borderRadius: '15px', padding: '1px 8px', backgroundColor: '#CDD8F5', color: '#fff' }}>+ Data After</button>
                </div>
              </div>
              <div className="col-2 px-0">
                <div className='mt-3' style={{ fontSize: '13px' }}>
                  <button style={{ border: 'none', borderRadius: '15px', padding: '1px 8px', backgroundColor: '#CDD8F5', color: '#fff' }}>+ Data After</button>
                </div>
              </div>
              <div className="col-2 px-0">
                <div className='mt-3' style={{ fontSize: '13px' }}>
                  <button style={{ border: 'none', borderRadius: '15px', padding: '1px 8px', backgroundColor: '#CDD8F5', color: '#fff' }}>+ Data After</button>
                </div>
              </div>
              <div className="col-2">
                <div className='mt-3' style={{ fontSize: '13px' }}>
                  <button style={{ border: 'none', borderRadius: '15px', padding: '1px 8px', backgroundColor: '#CDD8F5', color: '#fff' }}>+ Data After</button>
                </div>
              </div>

            </div>
          </div>
          <div className="col-4"></div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 col-sm-12" st>
            <div
              style={{
                backgroundColor: '#FBFBFB',
                border: '1px solid #E4E7EB',
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '250px'
              }}
            >
              <div>
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 29V13" stroke="#1C274C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M13 25V17" stroke="#1C274C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M29 25V17" stroke="#1C274C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M31 3.67564C28.0582 1.97394 24.6428 1 21 1C9.9543 1 1 9.9543 1 21C1 24.1994 1.75124 27.2232 3.08692 29.905C3.44188 30.6176 3.56002 31.4322 3.35424 32.2012L2.16302 36.6534C1.6459 38.586 3.41402 40.354 5.3467 39.837L9.79878 38.6458C10.5679 38.44 11.3824 38.5582 12.0951 38.913C14.7767 40.2488 17.8006 41 21 41C32.0456 41 41 32.0456 41 21C41 17.3572 40.026 13.9417 38.3244 11" stroke="#1C274C" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className='mt-3'>
                <p className='mb-0'><b>No conversations found</b></p>
                <p style={{ fontSize: '13px' }}>This agent has no conversations yet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className='' >
              <div>
                <p className='mb-0' style={{ fontSize: '16px', }}><b>Evaluation criteria</b></p>
                <p style={{ fontSize: '14px' }}>Define criteria to evaluate whether conversations were successful or not.</p>
              </div>
              <div style={{ padding: '', border: '1px solid #E4E7EB', borderRadius:'5px' }}>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <p className='ps-2 pt-2 mb-2'>0 criteria</p>
                  </div>
                  <div className=' pe-4 pt-2 col-lg-6 col-md-6 col-sm-6 text-end'>
                    <button style={{ border: 'none', borderRadius: '15px', padding: '1px 8px', backgroundColor: '#4E5586', color: '#fff',fontSize:'14px' }}>+ Add criteria</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-3' >
              <div>
                <p className='mb-0' style={{ fontSize: '16px', }}><b>Data collection</b></p>
                <p style={{ fontSize: '14px' }}>Define custom data specifications to extract from conversation transcripts.</p>
              </div>
              <div style={{ padding: '', border: '1px solid #E4E7EB', borderRadius:'5px' }}>
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-6'>
                    <p className='ps-2 pt-2 mb-2'>0 data points</p>
                  </div>
                  <div className=' pe-4 pt-2 col-lg-6 col-md-6 col-sm-6 text-end'>
                    <button style={{ border: 'none', borderRadius: '15px', padding: '1px 8px', backgroundColor: '#4E5586', color: '#fff',fontSize:'14px' }}>+ Add data points</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default analysis
