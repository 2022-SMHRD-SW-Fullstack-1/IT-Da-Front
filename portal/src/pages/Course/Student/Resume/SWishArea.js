import React, { useEffect } from 'react'

const SWishArea = (props) => {
  /**지역 전체 리스트 */
  const areaList = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '해외']


  useEffect(() => {
  }, [props.item]);

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>희망지역</p>
      <div className='sRContentDiv'>
        <div>
          <select name='wish_area1' onChange={(e) => props.setValue(e.target.value)} value={props.item.wishArea1}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name='wish_area2' onChange={(e) => props.setValue(e.target.value)} value={props.item.wishArea2}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name='wish_area3' onChange={(e) => props.setValue(e.target.value)} value={props.item.wishArea3}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default SWishArea