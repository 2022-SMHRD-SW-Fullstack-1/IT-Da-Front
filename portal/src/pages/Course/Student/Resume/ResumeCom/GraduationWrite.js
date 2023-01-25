import axios from 'axios'
import React, { useState } from 'react'
import uuid from 'react-uuid'
import btnAdd from '../../../../../asset/img/btn_add.png'
import btnDelete from '../../../../../asset/img/btn_delete.png'

const GraduationWrite = ({ graduation, setGraduation }) => {
    const gradTypeList = ['재학', '휴학', '졸업예정', '졸업']
    const [inputs, setInputs] = useState({
        grad_num: uuid(),
        grad_school: '',
        school_type: '',
        grad_dt: '',
        grad_type: '',
        grad_score: '',
    })
    //newCareer에 담을 수 있게 input값을 선언
    const { grad_num, grad_school, school_type, grad_dt, grad_type, grad_score } = inputs

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const addGraduation = () => {
        const newGraduation = {
            grad_num,
            grad_school,
            school_type,
            grad_dt,
            grad_type,
            grad_score,
        }
        if ((grad_num == '') ||
            (grad_school == '') ||
            (school_type == '') ||
            (grad_dt == '') ||
            (grad_type == '') ||
            (grad_score == '')) {
            alert('입력란을 채워 주세요')
        }
        else {
            axios
                .post('/student/graduation/add', {
                    grad_school: inputs.grad_school,
                    school_type: inputs.school_type,
                    grad_dt: inputs.grad_dt,
                    grad_type: inputs.grad_type,
                    grad_score: inputs.grad_score,
                    id: sessionStorage.getItem("loginId")
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => console.log(e));
            setGraduation(graduation.concat(newGraduation))
            setInputs({
                grad_num: uuid(),
                grad_school: '',
                school_type: '',
                grad_dt: '',
                grad_type: '',
                grad_score: '',
            })
        }
    }
    const onRemove = (grad_num, grad_dt, grad_school, school_type, grad_type) => {
        // new.num 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = new.num 가 num 인 것을 제거함
        console.log('제거')
        setGraduation(graduation.filter(newGraduation =>
            (newGraduation.grad_num !== grad_num)
        ))
        axios
            .post('/student/graduation/delete', {
                grad_dt: grad_dt,
                grad_school: grad_school,
                school_type: school_type,
                grad_type: grad_type,
                id: sessionStorage.getItem("loginId")
            })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e));
    }

    return (
        <div className='resumeDiv'>
            <p className='sRTitle'>학력</p>
            <table className='resumeTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>학교명</th>
                        <th>전공</th>
                        <th>기간</th>
                        <th>구분</th>
                        <th>학점</th>
                    </tr>
                </thead>
                <tbody>
                    {graduation.map((graduation, idx) => (
                        <tr key={idx}>
                            <td onClick={() => onRemove(graduation.grad_num, graduation.grad_dt, graduation.grad_school, graduation.school_type, graduation.grad_type)}>
                                <div className='.sRBtnDiv'>
                                    <img className='sRDeleteBtn' src={btnDelete}/>
                                    </div></td>
                            <td><p>{graduation.grad_school}</p></td>
                            <td><p>{graduation.school_type}</p></td>
                            <td><p>{graduation.grad_dt}</p></td>
                            <td><p>{graduation.grad_type}</p></td>
                            <td><p>{graduation.grad_score}</p></td>
                        </tr>
                    ))}
                    <tr>
                        <td onClick={addGraduation}>
                            <div className='.sRBtnDiv'>
                                <img className='sRAddBtn' src={btnAdd}/>
                            </div></td>
                        <td><input type='text' name='grad_school' onChange={onChange} value={inputs.grad_school} /></td>
                        <td><input type='text' name='school_type' onChange={onChange} value={inputs.school_type} /></td>
                        <td><input type='date' name='grad_dt' onChange={onChange} value={inputs.grad_dt} /></td>
                        <td><select name='grad_type' onChange={onChange} >
                            {gradTypeList.map((grad_type) => (
                                <option value={grad_type} key={1 + grad_type}>
                                    {grad_type}
                                </option>
                            ))}
                            </select>
                        </td>
                        <td><input type='text' name='grad_score' className='gradScore' onChange={onChange} value={inputs.grad_score} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GraduationWrite