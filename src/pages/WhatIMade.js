import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import NextBtn from "../components/NextBtn";
import Project from "../components/Project";

const Wrapper = styled.section`
  > .container {
    > button {
      margin: 0 auto;
    }
  }
`;

const ProjectSlider = styled.div`
  > h3 {
    margin: 50px;
    font-size: 36px;
    text-align: center;
  }

  > ul {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    > li {
      margin: 0 15px;
      padding: 10px 20px;
      font-weight: 600;
      font-family: "Pretendard-Regular";
      border-radius: 50px;
      transition: all 0.2s;
      background-color: #bcaa9090;
      cursor: pointer;

      &.on,
      &:hover {
        color: #fff;
        background-color: #3f2e1c;
      }
    }
  }
`;

const Projects = styled.div`
  position: relative;
  height: 380px;
  margin-bottom: 150px;
  padding: 40px 25px;

  border-radius: 20px;

  > div {
    display: none;
    position: absolute;
  }
`;

const clonPJList = ["Kakao", "산돌구름", "FREEWILL"];

const personalPJList = [
  "가위바위보",
  "투두리스트",
  "Diary Calendar",
  "Portfolio",
];

const WhatIMade = () => {
  const navigate = useNavigate();
  const clonProjectsRef = useRef();
  const personalProjectsRef = useRef();

  const [clonActive, setClonActive] = useState([true, false, false]);
  const [personalActive, setPersonalActive] = useState([
    true,
    false,
    false,
    false,
  ]);

  const onClick = () => {
    navigate("/contact");
  };

  const Active = (targetIdx) => {
    setClonActive((prev) =>
      prev.map((it, idx) => (idx === targetIdx ? true : false))
    );

    const projects = clonProjectsRef.current.children;
    for (let i = 0; i < projects.length; i++) {
      if (i === targetIdx) {
        projects[targetIdx].classList.add("show");
      } else {
        projects[i].classList.remove("show");
      }
    }
  };

  const Active2 = (targetIdx) => {
    setPersonalActive((prev) =>
      prev.map((it, idx) => (idx === targetIdx ? true : false))
    );

    const projects = personalProjectsRef.current.children;
    for (let i = 0; i < projects.length; i++) {
      if (i === targetIdx) {
        projects[targetIdx].classList.add("show");
      } else {
        projects[i].classList.remove("show");
      }
    }
  };

  useEffect(() => {
    clonProjectsRef.current.children[0].classList.add("show");
    personalProjectsRef.current.children[0].classList.add("show");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <ProjectSlider>
          <h3>홈페이지 클론 프로젝트</h3>
          <ul>
            {clonPJList.map((it, idx) => (
              <li
                key={idx}
                className={clonActive[idx] ? "on" : null}
                onClick={() => Active(idx)}
              >
                {it}
              </li>
            ))}
          </ul>
          <Projects ref={clonProjectsRef}>
            <Project
              name="kakaocorp"
              title="kakao corp. 홈페이지 반응형 웹 구현"
              url="https://tmdgp0212.github.io/Kakao-corp/"
              skill={["html", "css", "Jquery"]}
            >
              스크롤이벤트와 반응형 웹에 초점을 맞추어 시작한 저의 첫 홈페이지
              클론 프로젝트입니다
              <br />
              4type의 반응형 레이아웃을 적용하였으며, 메인 카드가 스크롤을 따라
              움직이다 일정 위치에 닿으면 멈춰섭니다. 헤더또한 아래로 스크롤하면
              slide up되며 사라졌다 위로 스크롤 하면 나타나도록 하였습니다.
            </Project>
            <Project
              name="sandoll"
              title="산돌구름 홈페이지 제작"
              url="https://tmdgp0212.github.io/Sandoll-cloud/"
              skill={["html", "scss", "Javascrit"]}
            >
              다양한 슬라이드를 연습할 수 있었던 산돌구름 홈페이지 입니다.
              <br />
              처음으로 무한 슬라이드에 대해 배워 적용해보았으며 한번의 이벤트로
              여러개의 슬라이드를 핸들링하기위해 많은 고민을 했던
              프로젝트입니다.
            </Project>
            <Project
              name="freewill"
              title="FREEWILL 홈페이지 반응형 웹 구현"
              url="https://tmdgp0212.github.io/FREEWILL/"
              skill={["html", "scss", "Jquery"]}
            >
              반응형 웹을 구현하고, 햄버거버튼(nav)을 눌렀을때 활성화
              애니메이션을 라이브러리 없이 구현했습니다. <br />
              또한 wow.js 라이브러리를 활용하여 스크롤 이벤트를
              적용해보았습니다.
            </Project>
          </Projects>
        </ProjectSlider>

        <ProjectSlider>
          <h3>창작페이지 프로젝트</h3>
          <ul>
            {personalPJList.map((it, idx) => (
              <li
                key={idx}
                className={personalActive[idx] ? "on" : null}
                onClick={() => Active2(idx)}
              >
                {it}
              </li>
            ))}
          </ul>
          <Projects ref={personalProjectsRef}>
            <Project
              name="rockscissorspaper"
              title="가위바위보 프로젝트"
              url="https://tmdgp0212.github.io/rock-scissors-paper/"
              skill={["html", "css", "Javascrit"]}
            >
              개발을 배우고 첫 개인 프로젝트로 진행한 가위바위보 게임입니다.
              <br />
              유저가 가위,바위,보 중 하나를 선택하면 상대의 가위바위보 아이콘이
              스핀하다 멈추며 결과가 나타납니다.
            </Project>
            <Project
              name="todo"
              title="To-Do List App"
              url="https://tmdgp0212.github.io/Todo-List/"
              skill={["html", "scss", "Javascrit"]}
            >
              로컬스토리지에 데이터를 저장하여 유저의 디바이스에서 접근하면
              언제든 이전의 데이터를 불러올 수 있도록 구현한 Todo list
              App입니다.
            </Project>
            <Project
              name="calendar"
              title="Calendar Diary"
              url="https://tmdgp0212.github.io/Diary_Calendar/"
              skill={["react"]}
            >
              리액트로 제작된 달력형 일기장입니다. <br />
              일기를 달력형(날짜별), 리스트형(월별)으로 관리할 수 있으며, 저장
              된 일기는 로컬스토리지에 저장되어 동일한 브라우저로 접속 시
              얼마든지 다시 꺼내 볼 수있습니다.
            </Project>
            <Project
              name="portfolio"
              title="Portfolio Page"
              url="https://tmdgp0212.github.io/portfolio/"
              skill={["react"]}
            >
              현재 보고계신 개인 포트폴리오 페이지입니다. 반응형을 적용하였으며,
              리액트 라우터를 활용하여 페이지를 구성하였습니다.
            </Project>
          </Projects>
        </ProjectSlider>
        <NextBtn text={"Contact"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default WhatIMade;
