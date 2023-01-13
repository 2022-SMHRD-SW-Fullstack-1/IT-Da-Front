import React, { useEffect, useRef, useState } from 'react'

const SGraduation = (props) => {

    const gradTypeList = ['재학', '휴학', '졸업예정', '졸업']

    const [gradSchool, setGradSchool] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [gradDt, setGradDt] = useState('');
    const [gradType, setGradType] = useState('');
    const [gradScore, setGradScore] = useState('');

    const handleGradType = (e) => {
        setGradType(e.target.value);
    };

    const gradSchoolRef = useRef()
    const schoolTypeRef = useRef()
    const gradDtRef = useRef()
    const gradTypeRef = useRef()
    const gradScoreRef = useRef()

    useEffect(() => {
        gradSchoolRef.current.value = props.item.gradSchool;
        schoolTypeRef.current.value = props.item.schoolType;
        gradDtRef.current.value = props.item.gradDt;
        gradTypeRef.current.value = props.item.gradType;
        gradScoreRef.current.value = props.item.gradScore;
    }, [props]);

    return (
        <div className='graduation'>
            <table className='resumeTable'>
                <tbody>
                    <tr className='sRTitle'>
                        <th>학력</th>
                    </tr>
                    <tr>
                        <td>학교명</td>
                        <td>구분</td>
                        <td>기간</td>
                        <td>상태</td>
                        <td>학점</td>
                    </tr>
                    <tr>
                        <td><input type='text' name='grad_school' onChange={() => setGradSchool(gradSchoolRef.current.value)} ref={gradSchoolRef} /></td>
                        <td><input type='text' name='school_type' onChange={() => setSchoolType(schoolTypeRef.current.value)} ref={schoolTypeRef} /></td>
                        <td><input type='text' name='grad_dt' onChange={() => setGradDt(gradDtRef.current.value)} ref={gradDtRef} /></td>
                        <td>
                            <select name='grad_type' onChange={() => setGradType(gradTypeRef.current.value)} ref={gradTypeRef}>
                                {gradTypeList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td><input type='text' name='grad_score' onChange={() => setGradScore(gradScoreRef.current.value)} ref={gradScoreRef} /></td>
                    </tr>
                    <tr>
                        <td><button>추가하기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SGraduation