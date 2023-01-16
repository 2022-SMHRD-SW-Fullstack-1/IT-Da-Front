import React, { useEffect, useState } from 'react'

const MilitaryCom = (props) => {

    const miliTitleList = ['필', '미필', '면제']

    useEffect(() => {
        console.log("militaryCom")
        console.log(props.item)
        console.log(props.item[props.idx])
    }, [props.idx, props.item])

    const [value, setValue] = useState([
        {
            title: props.item.title || '',
            army: props.item.army || '',
            sDt: props.item.sDt || '',
            eDt: props.item.eDt || '',
            veteranYn: props.item.veteranYn || '',
        },
    ]);

    return (
        <div className='sRContentDiv'>
            <div>
                <select name='mili_title' onChange={(e) => setValue(props.item.title = e.target.value)} value={props.item.title}>
                    {miliTitleList.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>

            </div>
            <div><input type='text' name='mili_army' onChange={(e) => setValue(props.item.army = e.target.value)} value={props.item.army} /></div>
            <div><input type='text' name='mili_s_dt' onChange={(e) => setValue(props.item.sDt = e.target.value)} value={props.item.sDt} /></div>
            <div>~</div>
            <div><input type='text' name='mili_e_dt' onChange={(e) => setValue(props.item.eDt = e.target.value)} value={props.item.eDt} /></div>
            <div><input type='text' name='veteran_yn' onChange={(e) => setValue(props.item.veteranYn = e.target.value)} value={props.item.veteranYn} /></div>
            <div className='sRBtnDiv'>
                <button className='sRDeleteBtn'>삭제하기</button>
            </div>
        </div>
    )
}

export default MilitaryCom