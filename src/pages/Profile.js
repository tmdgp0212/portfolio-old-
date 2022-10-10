import styled, { keyframes } from "styled-components";
import Header from "../components/Header";

import { FiUser, FiGift, FiMapPin, FiPhone } from "react-icons/fi";
import { FaHandPeace, FaPuzzlePiece, FaRegSmileWink } from "react-icons/fa";
import NextBtn from "../components/NextBtn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const imagebouncing = keyframes`
  0%{transform: rotate(0deg);}
  50%{transform: rotate(-3deg);}
  100%{transform: rotate(0deg);}
`;

const righttoleft = keyframes`
  0%{transform: translateX(-600px)}
  100%{transform: translateX(0px)}
`;

const lefttoright = keyframes`
  0%{transform: translateX(600px)}
  100%{transform: translateX(0px)}
`;

const outlinePointer = keyframes`
  0%{outline-offset:0;}
  100%{outline-offset:5px;}
`;

const Wrapper = styled.section`
  > .container {
    position: relative;

    > button {
      margin: 0 auto;
    }
  }
`;

const Greeting = styled.div`
  display: flex;
  justify-content: center;

  > .image {
    position: relative;
    margin-top: 30px;
    width: 500px;
    height: 400px;
    background-image: url(./assets/me.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform 0.5s;
    z-index: 100;

    animation: ${imagebouncing} 0.8s 1s;

    &:hover {
      transform: rotate(-3deg);
    }

    &:after {
      display: block;
      position: absolute;
      top: 30px;
      right: 40px;
      width: 105px;
      height: 45px;
      background-image: url(./assets/arrow.png);
      background-size: contain;
      content: "";
    }
  }

  > h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 48px;
    cursor: default;

    > span:first-child {
      animation: ${righttoleft} 1.3s ease-out;
      z-index: 0;
    }
    > span:last-child {
      display: block;
      transition: transform 0.8s;
      animation: ${lefttoright} 1.3s ease-out;

      > b {
        position: relative;

        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background: #bcaa90;
          transition: 0.2s all;
        }
      }
    } //span

    &:hover {
      > span > b:after {
        width: 100%;
      }
    }
  } //h3
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 150px;

  > .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    font-size: 18px;
    font-family: "Pretendard-Regular";
    border-right: 1px solid #bcaa90;
    cursor: default;

    &:nth-child(1) {
      border-left: 1px solid #bcaa90;
    }

    > svg {
      position: relative;
      margin-bottom: 25px;
      font-size: 22px;
    } //svg
  } //.info
`;

const Experience = styled.div`
  margin-bottom: 100px;
  padding-bottom: 50px;
  cursor: default;

  > h4 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 50px;
  }

  > .bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #bcaa90;
    border-radius: 5px;
  }

  > .flexbox {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px;
    font-family: "Pretendard-Regular";

    > .exprnce {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      font-size: 18px;
      text-align: center;

      &::after {
        display: block;
        position: absolute;
        width: 14px;
        height: 14px;
        left: 50%;
        bottom: -29px;
        margin-left: -7px;
        background-color: #bcaa90;
        border-radius: 50%;
        content: "";
      }

      &.now {
        font-size: 20px;
        font-weight: 600;
      }

      &.now::after {
        background-color: #3f2e1c;
        outline: 1px solid #3f2e1c;
        outline-offset: 5px;
        animation: ${outlinePointer} 1s infinite;
      }

      > .year {
        margin-top: 10px;
        order: 10;
      }

      > .rank {
        font-size: 16px;
        line-height: 1.4;
      }
    }
  }
`;

const Comments = styled.div`
  width: fit-content;
  margin: 0 auto 100px;
  cursor: default;

  > .cmnt {
    margin-bottom: 50px;

    > h4 {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
      font-size: 36px;

      > svg {
        margin-left: 10px;
      }
    }

    > p {
      margin-left: 20px;
      font-size: 22px;
      font-family: "Pretendard-Regular";
      line-height: 1.4;

      &:hover {
        > strong:after {
          width: 100%;
        }
      }

      > strong {
        position: relative;

        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0;
          height: 3px;
          background: #bcaa90;
          border-radius: 5px;
          transition: 0.2s all;
        }
      }
    }
  }
`;

const Profile = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/whatican");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <Greeting>
          <div className="image"></div>
          <h3>
            <span>신입 프론트엔드 개발자</span>
            <span>
              <b>조승혜</b>입니다.
            </span>
          </h3>
        </Greeting>
        <InfoContainer>
          <div className="info">
            <FiUser />
            조승혜
          </div>
          <div className="info">
            <FiGift />
            1995.02.12
          </div>
          <div className="info">
            <FiMapPin />
            강서구 화곡동
          </div>
          <div className="info">
            <FiPhone />
            010.5390.3029
          </div>
        </InfoContainer>
        <Experience>
          <h4>걸어온 길</h4>
          <div className="flexbox">
            <div className="exprnce">
              <span className="year">2014</span>
              <span>경남정보대학교</span>
              <span className="rank">미용계열 전공</span>
            </div>
            <div className="exprnce">
              <span className="year">2015</span>
              <span>약손명가 근무</span>
              <span className="rank">주임</span>
            </div>
            <div className="exprnce">
              <span className="year">2018</span>
              <span>금손에스테틱</span>
              <span className="rank">실장</span>
            </div>
            <div className="exprnce">
              <span className="year">2021</span>
              <span>맑은얼굴의원</span>
              <span className="rank">관리사</span>
            </div>
            <div className="exprnce now">
              <span className="year">2022</span>
              <span>이젠컴퓨터아카데미</span>
              <span className="rank">웹퍼블리셔/프론트엔드 과정 수강</span>
            </div>
          </div>
          <span className="bar"></span>
        </Experience>
        <Comments>
          <div className="cmnt">
            <h4>
              Strength <FaHandPeace />
            </h4>
            <p>
              저는 전혀 다른 분야에서 일을하다 왔기때문에 분명히 남들보다 아직
              많이 부족하고 뒤쳐집니다. <br />
              하지만 제가 생각하는 저의
              <strong> 가장 큰장점은 "학습력"과 "이해력"</strong> 입니다. <br />
              저는 어떤 분야에서든 필요한 능력과 센스를 빠르게 캐치하고,
              습득하여 그것을 가뿐히 실무에 적용시킬 수 있습니다.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Puzzle <FaPuzzlePiece />
            </h4>
            <p>
              저는 취미로 모바일게임을 즐기곤하는데, 그중에서도 다양한
              퍼즐게임을 섭렵하고있습니다. <br />
              개발을 배우며 흥미를 느끼던 저는
              <strong> "개발은 마치 퍼즐게임같다!"</strong> 라고 생각했습니다.
              <br />
              가끔은 머리도 아프고 집중을 요하지만, 문제를 해결하고 난 뒤의
              짜릿함과 뿌듯함은 어쩌면 <br />
              퍼즐을 풀었을 때 보다 목표하던 로직을 완성했을 때 더 강하게
              느껴지기도 합니다.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Will be <FaRegSmileWink />
            </h4>
            <p>
              마치 게임을 하듯이 즐기며 일하겠습니다. <br />
              항상 현재에 안주하지 않고
              <strong>
                {" "}
                이끌어주시는만큼 성장할 수 있도록 끊임없이 노력하겠습니다.
              </strong>
            </p>
          </div>
        </Comments>
        <NextBtn text={"What I Can"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default Profile;
