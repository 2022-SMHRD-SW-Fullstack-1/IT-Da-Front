import axios from 'axios'
import uuid from 'react-uuid'
import React, { useState } from 'react'
import btnAdd from '../../../../../asset/img/btn_add.png'
import btnDelete from '../../../../../asset/img/btn_delete.png'

const PrizeWrite = ({ prize, setPrize }) => {
    const [inputs, setInputs] = useState({
        prize_num: uuid(),
        prize_org: '',
        prize_name: '',
        prize_dt: '',
    })
    //newCareer에 담을 수 있게 input값을 선언
    const { prize_num, prize_name, prize_dt, prize_org } = inputs

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const addPrize = () => {
        const newPrize = {
            prize_num,
            prize_org,
            prize_name,
            prize_dt,
        }

        if ((prize_name == '') || (prize_dt == '') || (prize_org == '')) {
            alert('입력란을 채워 주세요')
        }
        else {
            axios
                .post('/student/prize/add', {
                    prize_num:inputs.prize_num,
                    prize_org: inputs.prize_org,
                    prize_name: inputs.prize_name,
                    prize_dt: inputs.prize_dt,
                    id: sessionStorage.getItem("loginId")
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((e) => console.log(e));
            setPrize(prize.concat(newPrize))
            setInputs({
                prize_num: uuid(),
                prize_org: '',
                prize_name: '',
                prize_dt: '',
            })
        }
    }
    // select 또는 insert를 할 때마다 전부 delete를 해주면 문제가 없음
    // -> 업데이트하는 부분만 추가/삭제하고 싶음
    // 문제가 되는 부분 -> 데이터를 추가할 때, filter를 어떤 것을 사용해야할지
    // -> uuid를 사용하고 싶은데, 프론트에서 어떤식으로 가공해야할지 모르겠음
    //      프론트에서 가공한다면 스프링에서 default가 아니라 프론트에서 설정해준 값을 넣을 수 있을까?
    //unhex((uuid().replace(/  _utf8mb4\'-\'  /g,  _utf8mb4\'\'  )).toUpperCase)
    //                                 ?                ?
    const onRemove = (prize_num,prize_org, prize_name, prize_dt) => {
        // new.num 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = new.num 가 num 인 것을 제거함
        console.log(prize_org, prize_name, prize_dt)
        setPrize(prize.filter(newPrize => (newPrize.prize_num!=prize_num)))
        axios
        .post('/student/prize/delete', {
            prize_org:prize_org,
            prize_name:prize_name,
            prize_dt:prize_dt,
            id: sessionStorage.getItem("loginId")
        })
        .then((res) => {
            console.log(res)
        })
        .catch((e) => console.log(e));
    }
    return (
        <div className='resumeDiv'>
            <p className='sRTitle'>수상내역</p>
            <table className='resumeTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>수상명</th>
                        {/* <th>내용</th> */}
                        <th>수상일자</th>
                        <th>기관명</th>
                    </tr>
                </thead>
                <tbody>
                    {prize.map((prize, idx) => (
                        <tr key={idx}>
                            <td onClick={() => onRemove(prize.prize_num, prize.prize_org, prize.prize_name,prize.prize_dt)}>
                                <div className='.sRBtnDiv'>
                                    <img className='sRDeleteBtn' src={btnDelete}/>
                                </div></td>
                            <td><p>{prize.prize_name}</p></td>
                            <td><p>{prize.prize_dt} </p></td>
                            <td><p>{prize.prize_org}</p></td>
                        </tr>
                    ))}
                    <tr>
                        <td onClick={addPrize}>
                            <div className='.sRBtnDiv'>
                                <img className='sRAddBtn' src={btnAdd}/>
                            </div></td>
                        <td><input type='text' name='prize_name' onChange={onChange} value={inputs.prize_name} /></td>
                        <td><input type='date' name='prize_dt' onChange={onChange} value={inputs.prize_dt} /></td>
                        <td><input type='text' name='prize_org' onChange={onChange} value={inputs.prize_org} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PrizeWrite