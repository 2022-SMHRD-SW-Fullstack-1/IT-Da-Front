import React, { useEffect, useState } from 'react'

const CertificationCom = (props) => {

    useEffect(() => {
        // console.log("certificationCom")
        // console.log(props.item)
        // console.log(props.item[props.idx])
    }, [props.idx, props.item])

    const [value, setValue] = useState([
        {
            cert_org: props.item.cert_org || '',
            cert_name: props.item.cert_name || '',
            cert_dt: props.item.cert_dt || '',
        },
    ]);

    const handleDelete = (e) => {
        e.target.parentElement.parentElement.parentElement.childElementCount>4&&
        e.target.parentElement.parentElement.remove()
    }

    return (
        <div className='sRContentDiv'>
            <div><input type='text' name='cert_org' onChange={(e) => setValue(props.item.cert_org = e.target.value)} value={props.item.cert_org || ''} /></div>
            <div><input type='text' name='cert_name' onChange={(e) => setValue(props.item.cert_name = e.target.value)} value={props.item.cert_name || ''} /></div>
            <div><input type='text' name='cert_dt' onChange={(e) => setValue(props.item.cert_dt = e.target.value)} value={props.item.cert_dt || ''} /></div>
            <div className='sRBtnDiv'>
                <button className='sRDeleteBtn' onClick={handleDelete}>삭제하기</button>
            </div>
        </div>
    )
}

export default CertificationCom