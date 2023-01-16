import React, { useEffect, useRef } from 'react'

const SMilitary = (props) => {
  const miliTitleList = ['필', '미필', '면제']

  // const handleMiliTitle = (e) => {
  //   setMiliTitle(e.target.value);
  // };

  const miliTitleRef = useRef()
  const miliArmyRef = useRef()
  const miliSDtRef = useRef()
  const miliEDtRef = useRef()
  const veteranYnRef = useRef()


  useEffect(() => {
    miliTitleRef.current.value = props.item.title;
    miliArmyRef.current.value = props.item.army;
    miliSDtRef.current.value = props.item.sDt;
    miliEDtRef.current.value = props.item.eDt;
    veteranYnRef.current.value = props.item.veteranYn;
  }, [props.item])
  // }, [miliTitleRef, miliArmyRef, miliSDtRef, miliEDtRef, veteranYnRef]);

  const setValue = () => {
    props.setValue({
      title: miliTitleRef.current.value,
      army: miliArmyRef.current.value,
      sDt: miliSDtRef.current.value,
      eDt: miliEDtRef.current.value,
      veteranYn: veteranYnRef.current.value,
    })
  }

  return (
    <div className='resumeDiv'>
      <p className='sRTitle'>병역</p>
      <div className='sRTitleDiv'>
        <div>구분</div>
        <div>군별</div>
        <div>복무기간</div>
        <div></div>
        <div>복무기간</div>
        <div>보훈대상</div>
      </div>
      <div className='sRContentDiv'>
        <div>
          <select name='mili_title' onChange={setValue} ref={miliTitleRef}>
            {miliTitleList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div><input type='text' name='mili_army' onChange={setValue} ref={miliArmyRef} /></div>
        <div><input type='text' name='mili_s_dt' onChange={setValue} ref={miliSDtRef} /></div>
        <div>~</div>
        <div><input type='text' name='mili_e_dt' onChange={setValue} ref={miliEDtRef} /></div>
        <div><input type='text' name='veteran_yn' onChange={setValue} ref={veteranYnRef} /></div>
      </div>
      <div className='sRBtnDiv'>
        <button className='sRAddBtn'>추가하기</button>
      </div>
    </div>
  )
}

export default SMilitary