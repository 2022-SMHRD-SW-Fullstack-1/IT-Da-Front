import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print'
import '../../../../css/ResumePrint.css'
const CoverLetterFrame = () => {
    /**부모 컴포넌트에서 아래 내용을 작성하여, 특정 id의 이력서 정보를 이곳(CoverLetterFrame)으로 보내준다 */
    // const navigate = useNavigate()
    // const goToCoverLetterFrame = () => {
    //   navigate('/cover_letter/frame', 
    //   {state:{ resume: resume, graduation: graduation, career: career, certification:certification, prize:prize, military:military }})
    // }

    const { state } = useLocation();
    const printRef = useRef()
    // 데이터 가져오기
    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div className='resumePrintTopDiv'>
            <div className='resumePrintDiv coverLetterPrintDiv'
                ref={printRef}>
                <div id='coverLetterTitle'>
                    <span>자기소개서</span>
                </div>
                <div>지원자 : {sessionStorage.getItem("userName")}</div>
                <table>
                    <thead>
                        <tr>
                            <th className='resumePrintTitle'>성<br/>장<br/>과<br/>정</th>
                            <td>{state.coverLetter.growth}</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th className='resumePrintTitle'>성격<br/>의<br/>장단점</th>
                            <td>{state.coverLetter.pros_cons}</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th className='resumePrintTitle'>위기<br/>극복<br/>·<br/>목표<br/>달성</th>
                            <td>{state.coverLetter.goal_and_crisis}</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th className='resumePrintTitle'>지원<br/>동기<br/>·<br/>포부</th>
                            <td>{state.coverLetter.motivation}</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <ReactToPrint
                trigger={() => <button className='printBtn'>출력하기</button>}
                content={() => printRef.current}
                pageStyle="print"

            />
        </div>
    )
}

export default CoverLetterFrame