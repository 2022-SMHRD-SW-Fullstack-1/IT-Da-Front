import React, { useEffect, useRef, useState } from 'react'

const SCareer = (props) => {

    const [crOrganization, setCrOrganization] = useState()
    const [crPosition, setCrPosition] = useState()
    const [crDt, setCrDt] = useState()
    const [crActivity, setCrActivity] = useState()

    const crOrganizationRef = useRef()
    const crPositionRef = useRef()
    const crDtRef = useRef()
    const crActivityRef = useRef()

    useEffect(() => {
        crOrganizationRef.current.value = props.item.organization;
        crPositionRef.current.value = props.item.position;
        crDtRef.current.value = props.item.dt;
        crActivityRef.current.value = props.item.activity;
    }, [props]);

    return (
        <div className='careerDiv'>
            <div className='resumeDiv'>
                <div>
                    <p className='sRTitle'>경력, 교육</p>
                    <div className='sRTitleDiv'>
                        <div>기관명</div>
                        <div>직책</div>
                        <div>기간</div>
                        <div>직무/활동사항</div>
                    </div>
                    <div className='sRContentDiv'>
                        <div><input type='text' name='cr_organization' onChange={() => setCrOrganization(crOrganizationRef.current.value)} ref={crOrganizationRef} /></div>
                        <div><input type='text' name='cr_position' onChange={() => setCrPosition(crPositionRef.current.value)} ref={crPositionRef} /></div>
                        <div><input type='text' name='cr_dt' onChange={() => setCrDt(crDtRef.current.value)} ref={crDtRef} /></div>
                        <div><input type='text' name='cr_activity' onChange={() => setCrActivity(crActivityRef.current.value)} ref={crActivityRef} /></div>
                    </div>
                    <div className='sRBtnDiv'>
                        <button>추가하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SCareer