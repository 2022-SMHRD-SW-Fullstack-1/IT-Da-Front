import React, { useEffect, useRef, useState } from 'react'

const SCertification = (props) => {

    const [certOrg, setCertOrg] = useState('');
    const [certName, setCertName] = useState('');
    const [certDt, setCertDt] = useState('');

    const certOrgRef = useRef()
    const certNameRef = useRef()
    const certDtRef = useRef()

    useEffect(() => {
        certOrgRef.current.value = props.item.org;
        certNameRef.current.value = props.item.name;
        certDtRef.current.value = props.item.dt;
    }, [props]);

    return (
        <div className='certificationDiv'>
            <div className='resumeDiv'>
                <div>
                    <p className='sRTitle'>자격증</p>
                    <div className='sRTitleDiv'>
                        <div>기관명</div>
                        <div>자격증명</div>
                        <div>발행일</div>
                    </div>
                    <div className='sRContentDiv'>
                        <div><input type='text' name='cert_org' onChange={() => setCertOrg(certOrgRef.current.value)} ref={certOrgRef} /></div>
                        <div><input type='text' name='cert_name' onChange={() => setCertName(certNameRef.current.value)} ref={certNameRef} /></div>
                        <div><input type='text' name='cert_dt' onChange={() => setCertDt(certDtRef.current.value)} ref={certDtRef} /></div>
                    </div>
                    <div className='sRBtnDiv'>
                        <button>추가하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SCertification