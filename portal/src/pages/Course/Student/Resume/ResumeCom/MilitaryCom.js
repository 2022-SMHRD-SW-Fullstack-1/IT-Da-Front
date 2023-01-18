import React, { useEffect, useState } from 'react'

const MilitaryCom = (props) => {

    const miliTitleList = ['필', '미필', '면제']

    useEffect(() => {
        // console.log("militaryCom")
        // console.log(props.item)
        // console.log(props.item[props.idx])
    }, [props.idx, props.item])

    const [value, setValue] = useState([
        {
            mili_title: props.item.mili_title || '필',
            mili_army: props.item.mili_army || '',
            mili_s_dt: props.item.mili_s_dt || '',
            mili_e_dt: props.item.mili_e_dt || '',
            mili_veteran_yn: props.item.mili_veteran_yn || '',
        },
    ]);
    const handleDelete = (e) => {
        e.target.parentElement.parentElement.parentElement.childElementCount > 4 &&
            e.target.parentElement.parentElement.remove()
    }

    return (
        <div className='sRContentDiv'>
            <div>
                <select name='mili_title' onChange={(e) => setValue(props.item.mili_title = e.target.value)} value={props.item.mili_title || '필'}>
                    {miliTitleList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>

            </div>
            <div><input type='text' name='mili_army' onChange={(e) => setValue(props.item.mili_army = e.target.value)} value={props.item.mili_army || ''} /></div>
            <div><input type='text' name='mili_s_dt' onChange={(e) => setValue(props.item.mili_s_dt = e.target.value)} value={props.item.mili_s_dt || ''} /></div>
            <div>~</div>
            <div><input type='text' name='mili_e_dt' onChange={(e) => setValue(props.item.mili_e_dt = e.target.value)} value={props.item.mili_e_dt || ''} /></div>
            <div><input type='text' name='veteran_yn' onChange={(e) => setValue(props.item.veteran_yn = e.target.value)} value={props.item.veteran_yn || ''} /></div>
            <div className='sRBtnDiv'>
                <button className='sRDeleteBtn' onClick={handleDelete}>삭제하기</button>
            </div>
        </div>
    )
}

export default MilitaryCom