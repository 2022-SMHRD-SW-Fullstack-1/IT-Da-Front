import React from 'react'

import '../../css/MainComponent.css'

const Announcement = () => {

   // 임시 데이터
   const tempList = ["지각하지 않기! (9시 전에 등원 후 수업준비하기)", "지각, 결석 특이사항 있을 경우 사전에 얘기해주기", "예습, 복습, 자체 스터디 등 공부시간 가지기!", "흡연은 7층에서 부탁합니다~~!", "5층, 6층 사용하지 않기"]

   return (
      <div className='topDiv'>
         <div className='annHead'>
            <p>공지사항</p>
            <div>
               <p>작성하기</p>
               <p>더보기</p>
            </div>
         </div>
         <div className='annBody'>
            {tempList.map((item)=>(<p className='annItem' key={item}>- {item}</p>))}
         </div>
      </div>
   )
}

export default Announcement