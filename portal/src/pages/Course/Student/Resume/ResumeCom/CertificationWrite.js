import axios from 'axios'
import React, { useState } from 'react'
import uuid from 'react-uuid'
import btnAdd from '../../../../../asset/img/btn_add.png'
import btnDelete from '../../../../../asset/img/btn_delete.png'
const CertificationWrite = ({ certification, setCertification }) => {
    const [inputs, setInputs] = useState({
        cert_num: uuid(),
        cert_org: '',
        cert_name: '',
        cert_dt: '',
    })
    //newCareer에 담을 수 있게 input값을 선언
    const { cert_num, cert_org, cert_name, cert_dt } = inputs

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const addCertification = () => {
        const newCertification = {
            cert_num,
            cert_org,
            cert_name,
            cert_dt,
        }
        if ((cert_org == '') || (cert_name == '') || (cert_dt == '')) {
            alert('입력란을 채워 주세요')
        } else {
            axios
                .post('/student/certification/add', {
                    cert_org: inputs.cert_org,
                    cert_name: inputs.cert_name,
                    cert_dt: inputs.cert_dt,
                    id: sessionStorage.getItem("loginId")
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => console.log(e));
            setCertification(certification.concat(newCertification))
            setInputs({
                cert_num: uuid(),
                cert_org: '',
                cert_name: '',
                cert_dt: '',
            })
        }
    }
    const onRemove = (cert_num,cert_org,cert_name,cert_dt) => {
        // new.num 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = new.num 가 num 인 것을 제거함
        setCertification(certification.filter(newCertification => newCertification.cert_num !== cert_num))
        axios
            .post('/student/certification/delete', {
                cert_org:cert_org,
                cert_name:cert_name,
                cert_dt:cert_dt,
                id: sessionStorage.getItem("loginId")
            })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e));
    }
    return (
        <div className='resumeDiv'>
            <p className='sRTitle'>자격증</p>
            <table className='resumeTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>자격증명</th>
                        <th>발급기관</th>
                        <th>발급일자</th>
                    </tr>
                </thead>
                <tbody>
                    {certification.map((certification, idx) => (
                        <tr key={idx}>
                            <td onClick={() => onRemove(certification.cert_num,certification.cert_org,certification.cert_name,certification.cert_dt)}>
                                <div className='.sRBtnDiv'>
                                    <img className='sRDeleteBtn' src={btnDelete}/>
                                    </div></td>
                            <td><p>{certification.cert_name}</p></td>
                            <td><p>{certification.cert_org}</p></td>
                            <td><p>{certification.cert_dt.replace(/-/g,'.')} </p></td>
                        </tr>
                    ))}
                    <tr>
                        <td onClick={addCertification}>
                            <div className='.sRBtnDiv'>
                                <img className='sRAddBtn' src={btnAdd}/>
                            </div></td>
                        <td><input type='text' name='cert_name' onChange={onChange} value={inputs.cert_name} /></td>
                        <td><input type='text' name='cert_org' onChange={onChange} value={inputs.cert_org} /></td>
                        <td><input type='date' className='dateInput' name='cert_dt' onChange={onChange} value={inputs.cert_dt} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CertificationWrite