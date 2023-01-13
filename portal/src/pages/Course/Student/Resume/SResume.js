import React, { useEffect, useRef, useState } from 'react'

const SResume = (props) => {
    const [name, setName] = useState()
    const [gender, setGender] = useState()
    const [age, setAge] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [addr, setAddr] = useState()
    const [skills, setSkills] = useState()

    const nameRef = useRef()
    const genderRef = useRef()
    const ageRef = useRef()
    const phoneRef = useRef()
    const emailRef = useRef()
    const addrRef = useRef()
    const skillsRef = useRef()

    //초기값을 입력해줘야 한다
    useEffect(() => {
        nameRef.current.value = props.item.name;
        genderRef.current.value = props.item.gender;
        ageRef.current.value = props.item.age;
        phoneRef.current.value = props.item.phone;
        emailRef.current.value = props.item.email;
        addrRef.current.value = props.item.addr;
        skillsRef.current.value = props.item.skills;
    }, [props]);

    return (
        <div className='resume'>
            <table className='resumeTable'>
                <tbody>
                    <tr className='sRTitle'>
                        <th>인적사항</th>
                    </tr>
                    <tr>
                        <td rowSpan='4'>사진</td>
                        <td><input type='text' name='name' onChange={() => setName(nameRef.current.value)} ref={nameRef} /></td>
                        <td><input type='text' name='gender' onChange={() => setGender(genderRef.current.value)} ref={genderRef} /></td>
                        <td>/</td>
                        <td><input type='text' name='age' onChange={() => setAge(ageRef.current.value)} ref={ageRef} /></td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td colSpan='3'><input type='text' name='phone' onChange={() => setPhone(phoneRef.current.value)} ref={phoneRef} /></td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td colSpan='3'><input type='text' name='email' onChange={() => setEmail(emailRef.current.value)} ref={emailRef} /></td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td colSpan='3'><input type='text' name='addr' onChange={() => setAddr(addrRef.current.value)} ref={addrRef} /></td>
                    </tr>
                    <tr>
                        <td><button>수정</button><button>삭제</button></td>
                    </tr>
                    <tr>
                        <td>기술스택</td>
                    </tr>
                    <tr>
                        <td><input type='textarea' name='skills' onChange={() => setSkills(skillsRef.current.value)} ref={skillsRef} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SResume