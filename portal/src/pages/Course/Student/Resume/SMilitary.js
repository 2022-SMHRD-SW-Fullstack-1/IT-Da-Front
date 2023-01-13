import React, { useEffect, useRef, useState } from 'react'

const SMilitary = (props) => {
    const miliTitleList = ['필', '미필', '면제']

    const [miliTitle, setMiliTitle] = useState('');
    const [miliArmy, setMiliArmy] = useState('');
    const [miliSDt, setMiliSDt] = useState('');
    const [miliEDt, setMiliEDt] = useState('');
    const [veteranYn, setVeteranYn] = useState('');

    const handleMiliTitle = (e) => {
        setMiliTitle(e.target.value);
    };

    const miliTitleRef = useRef()
    const miliArmyRef = useRef()
    const miliSDtRef = useRef()
    const miliEDtRef = useRef()
    const veteranYnRef = useRef()


    useEffect(() => {
        miliTitleRef.current.value = props.item.title;
        miliArmyRef.current.value = props.item.army;
        miliSDtRef.current.value = props.item.sDt;
        miliEDtRef.current.value = props.item.eDt;
        veteranYnRef.current.value = props.item.veteranYn;
      }, [props]);


    
    return (
        <div className='military'>
            <table className='resumeTable'>
                <tbody>
                    <tr className='sRTitle'>
                        <th>병역</th>
                    </tr>
                    <tr>
                        <td>구분</td>
                        <td>군별</td>
                        <td>복무기간</td>
                        <td></td>
                        <td>복무기간</td>
                        <td>보훈대상</td>
                    </tr>
                    <tr>
                        <td>
                            <select name='mili_title' onChange={handleMiliTitle} ref={miliTitleRef}>
                                {miliTitleList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td><input type='text' name='mili_army' onChange={() => setMiliArmy(miliArmyRef.current.value)} ref={miliArmyRef} /></td>
                        <td><input type='text' name='mili_s_dt' onChange={() => setMiliSDt(miliSDtRef.current.value)} ref={miliSDtRef} /></td>
                        <td>~</td>
                        <td><input type='text' name='mili_e_dt' onChange={() => setMiliEDt(miliEDtRef.current.value)} ref={miliEDtRef} /></td>
                        <td><input type='text' name='veteran_yn' onChange={() => setVeteranYn(veteranYnRef.current.value)} ref={veteranYnRef} /></td>
                    </tr>
                    <tr>
                        <td><button>추가하기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SMilitary