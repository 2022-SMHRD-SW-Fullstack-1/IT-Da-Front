import React, { useEffect, useState } from 'react'

const PrizeCom = (props) => {

    useEffect(() => {
        console.log("prizeCom")
        console.log(props.item)
        console.log(props.item[props.idx])
    }, [props.idx, props.item])

    const [value, setValue] = useState([
        {
            org: props.item.org,
            name: props.item.name,
            dt: props.item.dt,
        },
    ]);

    return (
        <div className='sRContentDiv'>
            <div><input type='text' name='prize_org' onChange={(e) => setValue(props.item.org = e.target.value)} value={props.item.org} /></div>
            <div><input type='text' name='prize_name' onChange={(e) => setValue(props.item.name = e.target.value)} value={props.item.name} /></div>
            <div><input type='text' name='prize_dt' onChange={(e) => setValue(props.item.dt = e.target.value)} value={props.item.dt} /></div>
            <div className='sRBtnDiv'>
                <button className='sRDeleteBtn'>삭제하기</button>
            </div>
        </div>
    )
}

export default PrizeCom