import React, { useEffect, useRef, useState } from 'react'

const SPrize = (props) => {

    const [prizeName, setPrizeName] = useState('');
    const [prizeOrg, setPrizeOrg] = useState('');
    const [prizeDt, setPrizeDt] = useState('');

    const prizeNameRef = useRef()
    const prizeOrgRef = useRef()
    const prizeDtRef = useRef()

    useEffect(() => {
        prizeNameRef.current.value = props.item.org;
        prizeOrgRef .current.value = props.item.name;
        prizeDtRef.current.value = props.item.dt;
      }, [props]);

    return (
        <div className='prize'>
            <table className='resumeTable'>
                <tbody>
                    <tr className='sRTitle'>
                        <th>수상내역</th>
                    </tr>
                    <tr>
                        <td>기관명</td>
                        <td>수상명</td>
                        <td>수상일자</td>
                    </tr>
                    <tr>
                        <td><input type='text' name='prize_org' onChange={() => setPrizeOrg(prizeOrgRef.current.value)} ref={prizeOrgRef} /></td>
                        <td><input type='text' name='prize_name' onChange={() => setPrizeName(prizeNameRef.current.value)} ref={prizeNameRef} /></td>
                        <td><input type='text' name='prize_dt' onChange={() => setPrizeDt(prizeDtRef.current.value)} ref={prizeDtRef} /></td>
                    </tr>
                    <tr>
                        <td><button>추가하기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SPrize