import React from 'react'

const S_portfolio = () => {
    return (
        <div className="topDiv_resume">
            <div>
                <p>포트폴리오 제목</p>
                <div>
                    <p>
                        <input
                            className="cLInput"
                            type="text"
                            name="growth"
                        // onChange={onChange}
                        // value={coverLetter.growth||''}
                        />
                    </p>
                </div>
            </div>
            <div>
                <p>사진</p>
                <div>
                    <p>
                        <input
                            className="cLInput"
                            type="text"
                        // name="pros_cons"
                        // onChange={onChange}
                        // value={coverLetter.pros_cons||''}
                        />
                    </p>
                </div>
            </div>
            <div>
                <p className="sCLTitle">설명</p>
                <div>
                    <p>
                        <input
                            className="cLInput"
                            type="text"
                        // name="goal_and_crisis"
                        // onChange={onChange}
                        // value={coverLetter.goal_and_crisis||''}
                        />
                    </p>
                </div>
            </div>
            <div>
                <p>파일 및 링크</p>
                <div>
                    <p>
                        <input
                            className="cLInput"
                            type="text"
                        // name="motivation"
                        // onChange={onChange}
                        // value={coverLetter.motivation||''}
                        />
                    </p>
                </div>
            </div>
            <div className="saveDiv">
                <span>
                    {/* <button className="blueBtn" onClick={btnResume}>
                  저장하기
                </button> */}
                </span>
                {/* <span><button className="blueBtn" onClick={goToCoverLetterFrame}>출력페이지</button></span> */}
            </div>
        </div>
    )
}

export default S_portfolio
