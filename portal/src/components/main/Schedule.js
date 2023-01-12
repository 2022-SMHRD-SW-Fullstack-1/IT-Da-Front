import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../../css/MainComponent.css'

const Schedule = () => {

  // useState를 이용해 클릭한 날짜를 표시 할 수 있습니다.
  const [value, setValue] = useState(new Date());

  const tempList = ["지각하지 않기! (9시 전에 등원 후 수업준비하기)", "지각, 결석 특이사항 있을 경우 사전에 얘기해주기", "예습, 복습, 자체 스터디 등 공부시간 가지기!"]

  return (
    <div className='topDiv'>
      <Calendar onChange={setValue} value={value} />
      <div className='annHead' style={{marginTop: '1rem'}}>
            <p>오늘의 일정</p>
            <div>
               <p>작성하기</p>
               <p>더보기</p>
            </div>
         </div>
         <div className='annBody' style={{minHeight: '12.6rem'}}>
            {tempList.map((item)=>(<p className='annItem' key={item}>{item}</p>))}
         </div>
    </div>
  )
}

export default Schedule