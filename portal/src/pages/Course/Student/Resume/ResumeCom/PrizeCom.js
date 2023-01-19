import React, { useEffect, useState } from 'react'

const PrizeCom = (props) => {

    useEffect(() => {
        // console.log("prizeCom")
        // console.log(props.item)
        // console.log(props.item[props.idx])
    }, [props.idx, props.item])

    const [value, setValue] = useState([
        {
            prize_org: props.item.org || '',
            prize_name: props.item.name || '',
            prize_dt: props.item.dt || '',
        },
    ]);

    const handleDelete = (e) =>{
        e.target.parentElement.parentElement.parentElement.childElementCount>4&&
        e.target.parentElement.parentElement.remove()
    }

    return (
        <div className='sRContentDiv'>
            <div><input type='text' name='prize_org' onChange={(e) => setValue(props.item.prize_org = e.target.value)} value={props.item.prize_org || ''} /></div>
            <div><input type='text' name='prize_name' onChange={(e) => setValue(props.item.prize_name = e.target.value)} value={props.item.prize_name || ''} /></div>
            <div><input type='text' name='prize_dt' onChange={(e) => setValue(props.item.prize_dt = e.target.value)} value={props.item.prize_dt || ''} /></div>
            <div className='sRBtnDiv'>
                <button className='sRDeleteBtn' onClick={handleDelete}>삭제하기</button>
            </div>
        </div>
    )
}

export default PrizeCom