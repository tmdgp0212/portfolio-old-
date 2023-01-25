import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import NextBtn from "../components/NextBtn";
import Project from "../components/Project";

const Wrapper = styled.section`
  > .container {
    > .comment {
      margin-bottom: 100px;
      text-align: center;
    }

    > button {
      margin: 0 auto;
    }
  }
`;

const ProjectSlider = styled.div`
  margin-bottom: 120px;

  > h3 {
    margin: 80px 0 50px;
    font-size: 36px;
    text-align: center;
    word-break: keep-all;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    position: relative;
    margin-bottom: 50px;

    @media screen and (max-width: 640px) {
      gap: 10px;
    }

    &.focus::after {
      display: block;
      position: absolute;
      width: 120px;
      height: 40px;
      background-image: url(./assets/more.png);
      background-size: cover;
      transform: translate(350px, -20px) rotate(-10deg);

      content: "";

      @media screen and (max-width: 1200px) {
        right: 0px;
      }

      @media screen and (max-width: 768px) {
        right: -20px;
      }

      @media screen and (max-width: 640px) {
        display: none;
      }
    }

    > li {
      padding: 10px 20px;
      font-weight: 600;
      font-family: "Pretendard-Regular";
      border-radius: 50px;
      transition: all 0.2s;
      background-color: #bcaa9090;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        margin: 0 10px;
        padding: 8px 15px;
        font-size: 15px;
      }

      @media screen and (max-width: 640px) {
        margin: 10px;
      }

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
  padding: 40px 25px;

  @media screen and (max-width: 1200px) {
    padding: 0;
    height: 600px;
  }
`;

const clonPJList = ["Kakao", "산돌구름", "FREEWILL", "NETFLIX","Artbox"];

const personalPJList = [
  "가위,바위,보",
  "To-do ver.1",
  "부산온나",
  "Diary Calendar",
  "Find Movie",
  "To-do ver.2",
  "Portfolio",
];

const WhatIMade = () => {
  const navigate = useNavigate();
  const clonProjectsRef = useRef();
  const personalProjectsRef = useRef();

  const [clonActive, setClonActive] = useState([true, false, false, false, false]);
  const [personalActive, setPersonalActive] = useState([
    true,
    false,
    false,
    false,
  ]);

  const onClick = () => {
    navigate("/contact");
  };

  const Active = (targetIdx, e) => {
    let projects;

    if (e.target.getAttribute("name") === "clon") {
      setClonActive((prev) =>
        prev.map((it, idx) => (idx === targetIdx ? true : false))
      );
      projects = clonProjectsRef.current.children;
    } else {
      setPersonalActive((prev) =>
        prev.map((it, idx) => (idx === targetIdx ? true : false))
      );

      projects = personalProjectsRef.current.children;
    }

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
          <ul className="focus">
            {clonPJList.map((it, idx) => (
              <li
                name={"clon"}
                key={idx}
                className={clonActive[idx] ? "on" : null}
                onClick={(e) => Active(idx, e)}
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
              time="2022.08.12 ~ 2022.08.14 (총 3일)"
            >
              스크롤이벤트와 반응형 웹에 초점을 맞추어 시작한 저의 첫 홈페이지
              클론 프로젝트입니다
              <br />
              4type의 반응형 레이아웃을 적용하였으며, 메인 카드가 스크롤을 따라
              움직입니다.
            </Project>
            <Project
              name="sandoll"
              title="산돌구름 홈페이지 클론"
              url="https://tmdgp0212.github.io/Sandoll-cloud/"
              skill={["html", "scss", "Javascrit"]}
              time="22.08.26 ~ 22.08.27 (총 2일)"
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
              time="2022.09.05 ~ 2022.09.07 (총 3일)"
            >
              반응형 웹을 구현하고, 햄버거버튼(nav)을 눌렀을때 팝업 애니메이션을
              라이브러리 없이 구현해보았습니다. <br />
              또한 wow.js 라이브러리를 활용하여 스크롤 이벤트를
              적용해보았습니다.
            </Project>
            <Project
              name="netflix"
              title="NETFLIX 홈페이지 클론"
              url="https://tmdgp0212.github.io/netflix/"
              skill={["raect"]}
              time="2022.10.18 ~ 2022.10.24 (총 7일)"
            >
              ReactQuery로 API 데이터를 받아와 영화의 정보를 보여주는
              netflix페이지입니다. <br />
              API를 받아와 다양하게 활용하는 법을 연습 할 수 있었으며
              ReactQuery의 장점을 알아 볼 수 있는 프로젝트였습니다.
              <br />
              framer-motion을 활용해 다양한 애니메이션을 구현하였습니다.
            </Project>
            <Project
              name="artbox"
              title="아트박스몰 홈페이지 클론"
              url="https://unique-twilight-e140b7.netlify.app/"
              skill={["html", "scss", "Javascrit"]}
              time="2022.12.20 ~ 2022.12.23 (총 4일)"
              factoring
            >
              바닐라 자바스크립트와 SCSS로 구현한 아트박스몰 클론페이지입니다.
              <br />
              다양한 형태의 슬라이드 이벤트와 마우스오버 이벤트를 구현해보았습니다.
            </Project>
          </Projects>
        </ProjectSlider>

        <ProjectSlider>
          <h3>창작 프로젝트</h3>
          <ul>
            {personalPJList.map((it, idx) => (
              <li
                name={"personal"}
                key={idx}
                className={personalActive[idx] ? "on" : null}
                onClick={(e) => Active(idx, e)}
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
              time="22.07.27 ~ 22.07.29 (총 3일)"
            >
              개발을 배우고 첫 개인 프로젝트로 진행한 가위바위보 게임입니다.
              <br />
              유저가 가위,바위,보 중 하나를 선택하면 상대의 가위바위보 아이콘이
              스핀하다 멈추며 결과가 나타납니다.
            </Project>
            <Project
              name="todo"
              title="To-Do List (Local)"
              url="https://tmdgp0212.github.io/Todo-List-ver.1/"
              skill={["html", "scss", "Javascrit"]}
              time="22.09.16 ~ 22.09.17 (총 2일)"
            >
              Local Storage에 데이터를 저장하여 유저의 디바이스에서 접근하면
              언제든 이전의 데이터를 불러올 수 있도록 구현한 Todo list
              App입니다.
            </Project>
            <Project
              name="busanonna"
              title="부산온나 여행지 추천사이트"
              url="https://tmdgp0212.github.io/busanonna/"
              skill={["html", "css", "Javascrit"]}
              time="2022.08.10 ~ 2022.08.19 (총 9일)"
            >
              부산의 여행지를 소개하는 창작 페이지입니다. <br />
              "부산온나"는 부산 온나!(부산에 오세요의 사투리) 와 부산에 온
              나(me)의 이중적 의미를 가집니다. <br />
              페이지의 컨셉과 내용, 디자인을 직접 설계하고 적용해보 많은 애정을
              담은 프로젝트이며, 다양한 슬라이드 이벤트와 네비게이션 바 구현에
              초점을 맞추어 진행되었습니다.
            </Project>
            <Project
              name="calendar"
              title="Calendar Diary"
              url="https://tmdgp0212.github.io/Diary_Calendar/"
              skill={["react"]}
              time="22.09.29 ~ 22.10.05 (총 8일)"
            >
              리액트로 제작된 달력형 일기장입니다. <br />
              일기를 달력형(날짜별), 리스트형(월별)으로 관리할 수 있으며, 저장
              된 일기는 로컬스토리지에 저장되어 동일한 브라우저로 접속 시
              얼마든지 다시 꺼내 볼 수있습니다.
            </Project>
            <Project
              name="findmovie"
              title="Find Movie"
              url="https://tangerine-medovik-e674b3.netlify.app/"
              skill={["html", "scss", "javascript"]}
              time="22.12.30 (총 1일)"
              factoring
            >
              imdb api 사이트의 오픈 API 소스를 활용하여 영화를 검색하고 세부정보를 확인 할 수 있는 사이트를 제작하였습니다. <br />
              연도별 영화 검색이 가능하며, 무한스크롤을 적용하여 아래로 스크롤하면 추가 영화목록을 확인하실 수 있습니다.
            </Project>
            <Project
              name="todo2"
              title="To-Do List (Server)"
              url="https://sparkling-kangaroo-110e7a.netlify.app/"
              skill={["html", "scss", "javascript"]}
              time="23.01.16 ~ 23.01.17 (총 2일)"
              factoring
            >
              API를 활용해 서버에 데이터가 저장되는 TODO LIST페이지를 구현하였습니다. <br />
              보기 방식을 설정하여 완료한 일정과 미완료 일정을 나누어 볼 수 있으며, Sortable JS 라이브러리 적용으로 할 일 목록의 순서 변경이 가능합니다
            </Project>
            <Project
              name="portfolio"
              title="Portfolio Page"
              url="https://tmdgp0212.github.io/portfolio/"
              skill={["react"]}
              time="진행중"
            >
              현재 보고계신 개인 포트폴리오 페이지입니다. <br />
              반응형을 적용하였으며, 리액트 라우터를 활용하여 페이지를
              구성하였습니다.
            </Project>
          </Projects>
        </ProjectSlider>
        <NextBtn text={"Contact"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default WhatIMade;
