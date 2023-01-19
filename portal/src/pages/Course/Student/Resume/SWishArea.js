import React, { useEffect, useState } from 'react'

const SWishArea = (props) => {
  /**지역 전체 리스트 */
  const areaList = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '해외']
  const [value, setValue] = useState([
    {
        wish_area1: props.item.wish_area1 || '전체',
        wish_area2: props.item.wish_area2 || '전체',
        wish_area3: props.item.wish_area3 || '전체',
    },
]);

  useEffect(() => {
  }, [props.item]);

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>희망지역</p>
      <div className='sRContentDiv'>
        <div>
          <select name='wish_area1' onChange={(e) => setValue(props.item.wish_area1 = e.target.value)} value={props.item.wish_area1}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name='wish_area2' onChange={(e) => setValue(props.item.wish_area2 = e.target.value)} value={props.item.wish_area2}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name='wish_area3' onChange={(e) => setValue(props.item.wish_area3 = e.target.value)} value={props.item.wish_area3}>
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