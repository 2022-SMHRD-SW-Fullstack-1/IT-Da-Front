import React, { useEffect, useRef } from 'react'

const SWishArea = (props) => {
  /**지역 전체 리스트 */
  const areaList = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '해외']

  const wishArea1Ref = useRef()
  const wishArea2Ref = useRef()
  const wishArea3Ref = useRef()

  useEffect(() => {
    console.log(props.item)
    wishArea1Ref.current.value = props.item.wishArea1;
    wishArea2Ref.current.value = props.item.wishArea2;
    wishArea3Ref.current.value = props.item.wishArea3;
  }, [props.item]);

  const setValue = () => {
    props.setValue({
      wishArea1: wishArea1Ref.current.value,
      wishArea2: wishArea2Ref.current.value,
      wishArea3: wishArea3Ref.current.value
    })
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>희망지역</p>
      <div className='sRContentDiv'>
        <div>
          <select name='wish_area1' onChange={setValue} ref={wishArea1Ref}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name='wish_area2' onChange={setValue} ref={wishArea2Ref}>
            {areaList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select name='wish_area3' onChange={setValue} ref={wishArea3Ref}>
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