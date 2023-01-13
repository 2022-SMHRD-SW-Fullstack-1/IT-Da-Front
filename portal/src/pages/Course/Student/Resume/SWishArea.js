import React, { useEffect, useRef, useState } from 'react'

const SWishArea = (props) => {
    /**지역 전체 리스트 */
    const areaList = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '해외']

    const [wishArea1, setWishArea1] = useState('');
    const [wishArea2, setWishArea2] = useState('');
    const [wishArea3, setWishArea3] = useState('');

    const handleWishArea1 = (e) => {
        setWishArea1(e.target.value);
    };
    const handleWishArea2 = (e) => {
        setWishArea2(e.target.value);
    };
    const handleWishArea3 = (e) => {
        setWishArea3(e.target.value);
    };

    const wishArea1Ref = useRef()
    const wishArea2Ref = useRef()
    const wishArea3Ref = useRef()

    useEffect(() => {
        console.log(props.item)
        console.log(wishArea1Ref)
        wishArea1Ref.current.value = props.item.wishArea1
        wishArea2Ref.current.value = props.item.wishArea2
        wishArea3Ref.current.value = props.item.wishArea3
    }, [props]);

    return (
        <div className='wish_area'>
            <table>
                <tbody>
                    <tr>
                        <td>희망지역</td>
                        <td>
                            <select name='wish_area1' onChange={handleWishArea1} ref={wishArea1Ref}>
                                {areaList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </td>

                        <td>
                            <select name='wish_area2' onChange={handleWishArea2} ref={wishArea2Ref}>
                                {areaList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </td>

                        <td>
                            <select name='wish_area3' onChange={handleWishArea3} ref={wishArea3Ref}>
                                {areaList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SWishArea