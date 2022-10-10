import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import NextBtn from "../components/NextBtn";
import Skill from "../components/Skill";

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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;
`;

const Comments = styled.ul`
  width: fit-content;
  margin: 100px auto;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    cursor: default;

    > h4 {
      font-size: 36px;
    }

    > p {
      margin-left: 20px;
      font-size: 22px;
      font-family: "Pretendard-Regular";
      line-height: 1.4;
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
        <Skills>
          <Skill skill={"html5"} per={92} />
          <Skill skill={"css3"} per={94} />
          <Skill skill={"javascript"} per={83} />
          <Skill skill={"sass"} per={90} />
          <Skill skill={"jquery"} per={88} />
          <Skill skill={"react"} per={76} />
          <Skill skill={"typescript"} per={35} />
        </Skills>
        <Comments>
          <li>
            <h4>01.</h4>
            <p>
              웹 접근성을 고려한 <strong>시멘틱 페이지</strong>의 구현이
              가능하며, <br />
              원활한 <strong>Zen coding</strong> 활용으로 빠른 업무효율을 낼 수
              있습니다.
            </p>
          </li>
          <li>
            <h4>02. </h4>
            <p>
              클라이언트의 요구사항에 최대한 맞추어 디자인하는 것을
              최우선으로하며, <br />
              복잡한 <strong>반응형 웹 디자인의 구현</strong>이 가능합니다.
            </p>
          </li>
          <li>
            <h4>03. </h4>
            <p>
              javascript / jquery를 활용하여{" "}
              <strong>프레임워크를 사용하지않고 다양한 기능 구현</strong>이
              가능합니다. <br />
              <strong>사용자경험을 분석,적용</strong>하여 사용자가 사소한
              불편함도 느끼지 않도록 디자인합니다.
            </p>
          </li>
          <li>
            <h4>04. </h4>
            <p>
              react로 다양한 모듈을 활용하여 <strong>SPA페이지</strong>를
              구현합니다.
              <br /> 개발 생산성을 높이기 위한 최적화 작업에 관심이 많습니다.
            </p>
          </li>
          <li>
            <h4>05. </h4>
            <p>
              현재 <strong>typescript를 접목한 react</strong>에 대한 공부를
              진행중입니다.
              <br />각 변수의 타입을 제어하고 오류를 최소화하는 코드 구현에
              힘쓰고있습니다.
            </p>
          </li>
        </Comments>
        <NextBtn text={"What I Made"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default WhatICan;
