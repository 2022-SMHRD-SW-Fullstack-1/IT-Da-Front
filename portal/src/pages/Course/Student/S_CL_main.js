import React from "react";

import { useState, useEffect } from "react";

const S_CL_main = () => {
  const [coverLetter, SetCoverLetter] = useState({
    growth: "성장배경",
    pros_cons: "장단점",
    goal_and_crisis: "위기 극복",
    motivation: "지원동기",
  });



  const btnResume = () => {
    console.log("click");

    console.log(coverLetter);
  };
  useEffect(() => {
    console.log("메인 페이지 변화");
  }, []);

  return (
    <div className="T_rMain">
      <div className="coverLetterMain">
        <div className="sCLTitleDiv">
          <p className="sCLTitle">성장배경</p>
          <div className="sCLContentDiv">
            <div>
              <input
                type="text"
                name="growth"
                onChange={(e) =>
                  {
                    SetCoverLetter({
                      ...coverLetter,
                      growth : e.target.value
                    });

                    console.log('성장배경',coverLetter)
                  }}
                value={coverLetter.growth}
              />
            </div>
          </div>
        </div>

        <div className="sCLTitleDiv">
          <p className="sCLTitle">성격의 장단점</p>
          <div className="sCLContentDiv">
            <div>
              <input
                type="text"
                name="pros_cons"
                onChange={(e) =>
                  {
                    SetCoverLetter({
                      ...coverLetter,
                      pros_cons : e.target.value
                    });

                    console.log('성격의장단점',coverLetter)
                  }
                }
                value={coverLetter.pros_cons}
              />
            </div>
          </div>
        </div>

        <div className="sCLTitleDiv">
          <p className="sCLTitle">위기극복 및 목표달성</p>
          <div className="sCLContentDiv">
            <div>
              <input
                type="text"
                name="goal_and_crisis"
                onChange={(e) =>
                  SetCoverLetter((coverLetter.goal_and_crisis = e.target.value))
                }
                value={coverLetter.goal_and_crisis}
              />
            </div>
          </div>
        </div>

        <div className="sCLTitleDiv">
          <p className="sCLTitle">지원 동기 및 입사 후 포부</p>
          <div className="sCLContentDiv">
            <div>
              <input
                type="text"
                name="motivation"
                onChange={(e) =>
                  SetCoverLetter((coverLetter.motivation = e.target.value))
                }
                value={coverLetter.motivation}
              />
            </div>
          </div>
        </div>

        <div className="sRBtnDiv">
          <button onClick={btnResume}>저장하기</button>
        </div>
      </div>
    </div>
  );
};
export default S_CL_main;
