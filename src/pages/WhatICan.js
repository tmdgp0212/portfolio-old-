import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import NextBtn from "../components/NextBtn";
// import Skill from "../components/Skill";

const Wrapper = styled.section`
  > .container {
    > h3 {
      margin: 50px;
      font-size: 36px;
      text-align: center;
    }

    > button {
      margin: 0 auto;
    }
  }
`;
const Skills = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;

  @media screen and (max-width: 1200px) {
    padding: 0 50px;
    grid-template-columns: 1fr;
  } */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  img {
    height: 75px;
  }
`;

const Comments = styled.div`
  width: fit-content;
  margin: 100px auto;
  cursor: default;

  > .about-me {
    margin-bottom: 100px;

    > h3 {
      font-size: 36px;
      margin-bottom: 50px;
    }

    > ul {
      > li {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        > span {
          font-size: 28px;
          @media screen and (max-width: 1200px) {
            font-size: 28px;
          }
        }

        > p {
          margin-left: 20px;
          font-size: 22px;
          font-family: "Pretendard-Regular";
          line-height: 1.5;
          word-break: keep-all;

          @media screen and (max-width: 1200px) {
            font-size: 18px;
          }
        }
      }
    }
  }
`;

const WhatICan = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/whatimade");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <h3>Skills</h3>
        {/* <Skills>
          <Skill skill={"html5"} per={92} />
          <Skill skill={"css3"} per={94} />
          <Skill skill={"javascript"} per={83} />
          <Skill skill={"sass"} per={90} />
          <Skill skill={"jquery"} per={88} />
          <Skill skill={"react"} per={72} />
          <Skill skill={"typescript"} per={35} />
        </Skills> */}
        <Skills>
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/html5.png`}
            alt={'html5'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/css3.png`}
            alt={'css3'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/javascript.png`}
            alt={'javascript'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/sass.png`}
            alt={'sass'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/jquery.png`}
            alt={'jquery'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/react.png`}
            alt={'react'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/skill/typescript.png`}
            alt={'typescript'}
          />
        </Skills>
        <Comments>
          <div className="about-me">
            <h3>저는 이런 작업을 해봤어요</h3>
            <ul>
              <li>
                <span>01.</span>
                <p>
                  <strong>웹 표준 html5</strong>의 특성을 이해하고 능숙하게
                  다룹니다.
                </p>
              </li>
              <li>
                <span>02. </span>
                <p>
                  <strong>시멘틱 웹</strong>을 고려한 문서를 작성하여{" "}
                  <strong>웹 접근성을 높입니다.</strong>
                </p>
              </li>
              <li>
                <span>03. </span>
                <p>
                  CSS 전처리기 <strong>SCSS를 사용</strong>
                  하여 페이지를 디자인합니다.
                </p>
              </li>
              <li>
                <span>04. </span>
                <p>
                  다양한 디바이스에서의 호환성을 높인{" "}
                  <strong>반응형 웹 개발이 가능</strong>
                  합니다.
                </p>
              </li>
              <li>
                <span>05. </span>
                <p>
                  <strong>Javascript ES6</strong> 의 작동원리를 이해하고,
                  <strong> 라이브러리의 도움 없이 다양한 기능을 구현</strong>
                  합니다.
                </p>
              </li>
              <li>
                <span>06. </span>
                <p>
                  <strong>jQuery</strong>를 활용하여 동적으로 웹 사이트를
                  구현합니다.
                </p>
              </li>
              <li>
                <span>07. </span>
                <p>
                  <strong>React </strong>기반의
                  <strong> SPA(Single Page Application) 제작</strong>이
                  가능합니다.
                </p>
              </li>
              <li>
                <span>08. </span>
                <p>
                  <strong>API통신</strong>으로 서버에 데이터를 저장하고 수정,삭제해 본 경험이 있습니다.
                </p>
              </li>
              <li>
                <span>09. </span>
                <p>
                  <strong>TypeScript를 접목한 React</strong>
                  코드의 작성경험이 있습니다.
                </p>
              </li>
              <li>
                <span>10. </span>
                <p>
                  <strong>Git</strong>을 통한 브랜치 관리와 버전 생산 경험이 있습니다.
                </p>
              </li>
              <li>
                <span>11. </span>
                <p>
                  <strong>GitHub</strong>로 사이트를 배포하여 소스를 관리하고
                  공유한 경험이 있습니다.
                </p>
              </li>
              <li>
                <span>12. </span>
                <p>
                  <strong>UI/UX에 대한 이해</strong>를 바탕으로 사용자입장에서
                  고민하여 개발 합니다.
                </p>
              </li>
            </ul>
          </div>
          <div className="about-me">
            <h3>저는 이런 사람이예요</h3>
            <ul>
              <li>
                <span>01.</span>
                <p>
                  다양한 직군과의 협업 시 <strong>원활한 커뮤니케이션</strong>이
                  가능합니다.
                </p>
              </li>
              <li>
                <span>02.</span>
                <p>
                  <strong>이타적 성향</strong>으로 동료들과{" "}
                  <strong>원만한 대인관계</strong>를 유지합니다.
                </p>
              </li>
              <li>
                <span>03.</span>
                <p>
                  타고난 이해력과 학습력을 바탕으로{" "}
                  <strong>빠른 업무습득</strong>이 가능합니다.
                </p>
              </li>
              <li>
                <span>04.</span>
                <p>
                  문제의 단순한 해결보다는{" "}
                  <strong>원인과 결과를 정확히 파악</strong>
                  하고자 합니다.
                </p>
              </li>
              <li>
                <span>05.</span>
                <p>
                  <strong>기본기를 탄탄하게</strong> 다져 스스로에게
                  <strong> 떳떳한 개발자</strong>가 되고자합니다.
                </p>
              </li>
              <li>
                <span>06.</span>
                <p>
                  현재에 안주하지 않고{" "}
                  <strong>끊임없이 공부하고 성장하려합니다</strong>.
                </p>
              </li>
            </ul>
          </div>
        </Comments>
        <Comments></Comments>
        <NextBtn text={"What I Made"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default WhatICan;
