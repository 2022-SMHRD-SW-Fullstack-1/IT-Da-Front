import axios from 'axios'
import React, { useState } from 'react'
import uuid from 'react-uuid'
import btnAdd from '../../../../../asset/img/btn_add.png'
import btnDelete from '../../../../../asset/img/btn_delete.png'

const MilitaryWrite = ({ military, setMilitary }) => {
    const miliTitleList = ['선택', '필', '미필', '면제']
    const [inputs, setInputs] = useState({
        mili_num: uuid(),
        mili_title: '',
        mili_army: '',
        mili_s_dt: '',
        veteran_yn: '',
    })
    //newCareer에 담을 수 있게 input값을 선언
    const { mili_num, mili_title, mili_army, mili_s_dt, veteran_yn } = inputs

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const addMilitary = () => {
        const newMilitary = {
            mili_num,
            mili_title,
            mili_army,
            mili_s_dt,
            veteran_yn,
        }
        if ((mili_title == '') ||
            (mili_title == '선택') ||
            (mili_army == '') ||
            (mili_s_dt == '') ||
            (veteran_yn == '')) {
            alert('입력란을 채워 주세요')
        }
        else {
            axios
                .post('/student/military/add', {
                    mili_title: inputs.mili_title,
                    mili_army: inputs.mili_army,
                    mili_s_dt: inputs.mili_s_dt,
                    veteran_yn: inputs.veteran_yn,
                    id: sessionStorage.getItem("loginId")
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => console.log(e));
            setMilitary(military.concat(newMilitary))
            setInputs({
                mili_num: uuid(),
                mili_title: '',
                mili_army: '',
                mili_s_dt: '',
                veteran_yn: '',
            })
        }
    }
    const onRemove = (mili_num, mili_title, mili_army) => {
        // new.num 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = new.num 가 num 인 것을 제거함
        setMilitary(military.filter(newMilitary =>
            (newMilitary.mili_num !== mili_num)))
        axios
            .post('/student/military/delete', {
                mili_title: mili_title,
                mili_army: mili_army,
                id: sessionStorage.getItem("loginId")
            })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e));
    }
    return (
        <div className='resumeDiv'>
            <p className='sRTitle'>병역</p>
            <table className='resumeTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>구분</th>
                        <th>군별</th>
                        <th>복무기간(면제사유)</th>
                        <th>보훈대상</th>
                    </tr>
                </thead>
                <tbody>
                    {military.map((military, idx) => (
                        <tr key={idx}>
                            <td onClick={() => onRemove(military.mili_num,military.mili_title,military.mili_army)}>
                                <div className='.sRBtnDiv'>
                                    <img className='sRDeleteBtn' src={btnDelete}/>
                                    </div></td>
                            <td><p>{military.mili_title}</p></td>
                            <td><p>{military.mili_army}</p></td>
                            <td><p>{military.mili_s_dt}</p></td>
                            <td><p>{military.veteran_yn}</p></td>
                        </tr>
                        ))}
                        <tr>
                            <td onClick={addMilitary}>
                                <div className='.sRBtnDiv'>
                                    <img className='sRAddBtn' src={btnAdd}/>
                                </div></td>
                            <td><select name='mili_title' onChange={onChange} >
                                {miliTitleList.map((mili_title) => (
                                    <option value={mili_title} key={1 + mili_title}>
                                        {mili_title}
                                    </option>
                                ))}
                                </select></td>
                            <td><input type='text' name='mili_army' className='miliArmy' onChange={onChange} value={inputs.mili_army} /></td>
                            <td><input type='text' className='dateInput' name='mili_s_dt' onChange={onChange} value={inputs.mili_s_dt} /></td>
                            <td><input type='text' name='veteran_yn' onChange={onChange} value={inputs.veteran_yn} /></td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}
export default MilitaryWrite