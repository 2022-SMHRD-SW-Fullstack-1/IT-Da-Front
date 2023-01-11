import React from 'react'
import "../css/Footer.css"
import logo from "../asset/img/logo_cwl.png"

const Footer = () => {
  return (
    <div className='container'>
      <div className='container_inner'>
      <div className='footer_top_holder'>
        <div className='footer_top_container'>
          <div className='footer_top_container_inner'>
            <div className='footer_top_widget'>
            <img className='logo' src={logo}></img>
            </div>
        </div>
      </div>
      </div>

      <div className='footer_bottom_holder'>
        <div className='footer_bottom_container'>
          <div className='footer_bottom_container_inner'>
            <div className='footer_bottom_container_inner_left'>
              <dl>
                <dt class="title">
                  (사)스마트인재개발원
                </dt>
                <dd>
                  대표자:차준섭
                  <br/>
                  개인정보책임관리자:반수경
                  <br/>
                  사업자번호:178-82-00065
                  <br/>
                  <span className='emphasize'>광주본점:</span>광주 동구 예술길 31-15 3~5, 7층
                  <br/>
                  <span className='emphasize'>광주남구점:</span>광주 남구 송암로 60 2층
                  <br/>
                  <span className='emphasize'>서울점:</span>서울시 성동구 성수일로 99 1201호
                  <br/>
                  <span className='emphasize'>순천점:</span>전라남도 순천시 중앙로 260
                  <br/>
                  <span className='emphasize'>FAX:</span>062-655-3510
                  <br/>
                  <span className='emphasize'>E-Mail:</span>smhrd@smhrd.or.kr
                  <br/>    
                </dd>
              </dl>
            </div>
            <div className='footer_bottom_container_inner_right'>
              <dl>
                <dt class="title">고객센터</dt>
                <dd>
                  전화상담:<span className='emphasize'>062-655-3510, 9</span>
                  <br/>    
                  카카오톡:<span className='emphasize'>@스마트인재개발원</span>
                  <br/>    
                  홈페이지:<span className='emphasize'>상담신청 메뉴 클릭</span>
                  <br/>
                  상담시간
                  <br/>
                  <span className='emphasize'>전화상담:</span>09시~19시(월~금)
                  <br/>    
                  <span className='emphasize'>홈페이지:</span>09시~22시(연중무휴)
                  <br/>    
                  <span className='emphasize'>카카오톡:</span>09시~22시(연중무휴)
                  <br/>    
                  *홈페이지 내 취업/수료율은 2021년도 수치로
                  <br/>    
                  2022 직업능력개발훈련 역량평가 결과에 따름.
                </dd>
              </dl>
            </div>

          </div>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer