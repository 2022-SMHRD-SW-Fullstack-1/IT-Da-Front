import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import '../../../../css/ResumePrint.css'
const ResumeFrame = ({}) => {
    const printRef=useRef()
  return (
    <div className='resumePrintTopDiv'>
            <ReactToPrint
            trigger={()=><button>프린트하기</button>}
            content={()=>printRef.current}
            pageStyle="print"
            
            />
    <div className='resumePrintDiv print'
         ref={printRef}>
        <div>
            <span></span><span>이 력 서</span><span>로고</span>
        </div>
            <table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id='resumePrintPhoto' rowSpan={4}>사진</td>
                        <td className='resumePrintTitle'>지원분야</td>
                        <td></td>
                        <td className='resumePrintTitle'>희망연봉</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='resumePrintTitle'>성명</td>
                        <td></td>
                        <td className='resumePrintTitle'>생년월일</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='resumePrintTitle'>연락처</td>
                        <td></td>
                        <td className='resumePrintTitle'>이메일</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className='resumePrintTitle'>주소</td>
                        <td colSpan={3}></td>
                    </tr>
                </tbody>
            </table>
        <table>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <th className='resumePrintTitle' rowSpan={3}>학 력</th>
                        <th className='resumePrintTitle'>기간</th>
                        <th className='resumePrintTitle'>학교명</th>
                        <th className='resumePrintTitle'>전공</th>
                        <th className='resumePrintTitle'>구분</th>
                        <th className='resumePrintTitle'>학점</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr>
                        <th className='resumePrintTitle' rowSpan={4}>{"경 력 & 교 육"}</th>
                        <th className='resumePrintTitle'>기간</th>
                        <th className='resumePrintTitle'>기관명</th>
                        <th className='resumePrintTitle'>직책</th>
                        <th className='resumePrintTitle'>직무/활동사항</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <th className='resumePrintTitle' rowSpan={3}>자 격</th>
                        <th className='resumePrintTitle'>자격증명</th>
                        <th className='resumePrintTitle'>기관명</th>
                        <th className='resumePrintTitle resumePrintTitle2'></th>
                        <th className='resumePrintTitle'>자격증명</th>
                        <th className='resumePrintTitle'>기관명</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        <table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='resumePrintTitle' rowSpan={3}>수 상</th>
                        <th className='resumePrintTitle'>수상명</th>
                        <th className='resumePrintTitle'>내용</th>
                        <th className='resumePrintTitle'>수상일자</th>
                        <th className='resumePrintTitle'>기관명</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        <table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='resumePrintTitle' rowSpan={2}>병 역</th>
                        <th className='resumePrintTitle'>구분</th>
                        <th className='resumePrintTitle'>군별</th>
                        <th className='resumePrintTitle'>복무기간(면제사유)</th>
                        <th className='resumePrintTitle'>보훈대상</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <table>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className='resumePrintTitle' rowSpan={5}>전 산 관 련</th>
                        <th className='resumePrintTitle'>구분</th>
                        <th className='resumePrintTitle'>활용수준</th>
                        <th className='resumePrintTitle'>구분</th>
                        <th className='resumePrintTitle'>활용수준</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td colSpan={2}>기타</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <div><p>상기 내용은 사실과 다름 없음을 확인합니다.</p></div>
                <div><span>202 년</span><span>월</span><span>일</span><span>작 성 자 :</span> <span>(인)</span></div>
            </div>
        </div>
    </div>
  )
}

export default ResumeFrame