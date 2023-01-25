import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import NextBtn from "../components/NextBtn";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { FiUser, FiGift, FiMapPin, FiPhone } from "react-icons/fi";
import {
  FaHandPeace,
  FaPuzzlePiece,
  FaRegSmileWink,
  FaRegCommentDots,
} from "react-icons/fa";

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

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }

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

    @media screen and (max-width: 1200px) {
      width: 340px;
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      width: 280px;
      height: 250px;
    }

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

      @media screen and (max-width: 1200px) {
        width: 70px;
        height: 30px;
      }

      @media screen and (max-width: 640px) {
        display: none;
      }
    }
  }

  > h3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    font-size: 48px;
    cursor: default;

    @media screen and (max-width: 1200px) {
      font-size: 36px;
    }

    @media screen and (max-width: 768px) {
      font-size: 28px;
    }

    @media screen and (max-width: 640px) {
      margin-left: 10px;
      word-break: keep-all;
      align-items: flex-start;
    }

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

  @media screen and (max-width: 768px) {
    margin: 80px 0 150px;
  }

  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }

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

    @media screen and (max-width: 768px) {
      width: 140px;
      font-size: 16px;
    }

    @media screen and (max-width: 640px) {
      width: 170px;
      height: 50px;
      border-right: none;
      flex-direction: row;
    }

    &:nth-child(1) {
      border-left: 1px solid #bcaa90;

      @media screen and (max-width: 640px) {
        border-left: none;
      }
    }

    > svg {
      position: relative;
      margin-bottom: 25px;
      font-size: 22px;

      @media screen and (max-width: 768px) {
        margin-bottom: 15px;
        font-size: 18px;
      }

      @media screen and (max-width: 640px) {
        margin-bottom: 0;
        margin-right: 10px;
      }
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

  > .flexbox {
    @media screen and (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > .text {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 20px;
      font-family: "Pretendard-Regular";

      @media screen and (max-width: 768px) {
        width: fit-content;
        flex-direction: column;
        order: 200;
      }

      > .exprnce {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        font-size: 18px;
        text-align: center;

        @media screen and (max-width: 768px) {
          margin: 22px 0;
          font-size: 16px;
          text-align: left;
        }

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

          @media screen and (max-width: 768px) {
            left: -22px;
            bottom: 20px;
          }
        }

        &.now {
          font-size: 20px;
          font-weight: 600;

          @media screen and (max-width: 1200px) {
            font-size: 18px;
          }
        }

        &.now::after {
          background-color: #3f2e1c;
          outline: 1px solid #3f2e1c;
          outline-offset: 5px;
          animation: ${outlinePointer} 1s infinite;
        }

        > .year {
          margin-top: 10px;
          order: 100;

          @media screen and (max-width: 768px) {
            order: 0;
          }
        }

        > .rank {
          font-size: 16px;
          line-height: 1.4;

          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
        }
      }
    }

    > .bar {
      display: block;
      width: 100%;
      height: 4px;
      background-color: #bcaa90;
      border-radius: 5px;

      @media screen and (max-width: 768px) {
        width: 4px;
        height: 600px;
        order: 100;
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

      @media screen and (max-width: 1200px) {
        font-size: 28px;
      }

      > svg {
        margin-left: 10px;
      }
    }

    > p {
      padding: 0 20px;
      font-size: 22px;
      font-family: "Pretendard-Regular";
      line-height: 1.4;
      word-break: keep-all;

      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }

      &:hover {
        > strong:after {
          width: 100%;
        }
      }

      > span {
        display: block;

        @media screen and (max-width: 1200px) {
          display: initial;
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
            <div className="text">
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
              <div className="exprnce">
                <span className="year">2022</span>
                <span>이젠컴퓨터아카데미</span>
                <span className="rank">웹퍼블리셔/프론트엔드 과정 수강</span>
              </div>
              <div className="exprnce now">
                <span className="year">2023</span>
                <span>패스트캠퍼스&lt;Megabyte School&gt;</span>
                <span className="rank">프론트엔드 개발 과정 수강</span>
              </div>
            </div>
            <span className="bar"></span>
          </div>
        </Experience>
        <Comments>
          <div className="cmnt">
            <h4>
              Intro <FaRegCommentDots />
            </h4>
            <p>
              제가 걸어온 인생은 사실 it나 컴퓨터와는 거리가 먼 곳이였습니다.
              <br /> 정말 애정하던 제 직업이였지만, 직업특성상 더 먼곳을 내다볼
              수 없어 지금의 공부를 시작했습니다.
              <br />
              오랫동안 잘 해오던 일을 떠나오게 된 만큼 정말 큰 결심이 있었고,{" "}
              <br />
              그런만큼 저는 남들보다 더 많이, 더 열심히{" "}
              <strong>성장통을 겪을 각오</strong>가 되어있습니다.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Strength <FaHandPeace />
            </h4>
            <p>
              <strong>"처음 배워본거 맞아요?"</strong>
              <br />
              제가 무언가 새로운 분야에 도전하거나, 체험의 기회가 있을 때 마다 자주 들었던 이야기입니다.
              <br />
              저는 항상 무언가를 배우고 적응하는 것이 빠른 편이였고, 스스로도 자신감을 느끼고 있습니다.
              <br />
              그렇기에 뭐든지 <b>"하면 된다!"</b> 라는 믿음으로 새로운 도전에 두려움
              없이 뛰어들 수 있습니다.
              <br />
              프론트엔드 개발자로의 직무전환도 위와같은 자신감을 가지고 시작했으며,
              전혀 경험이 없는 직무를 선택하게 된 만큼, 더욱 뒤쳐지지 않아야 한다고 생각하며 더 많이 공부하고 노력하고 있습니다.
              빠른 습득력과 꾸준한 노력이 만나 더 큰 성장을 이룰 수 있을 것 입니다.
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
              느껴지기도 합니다. <br />
              이러한 부분을 살려 일을 할 때에도 마치 게임을 하듯이{" "}
              <b>즐기며 일하는 개발자</b>가 되고 싶습니다.
            </p>
          </div>
          <div className="cmnt">
            <h4>
              Will be <FaRegSmileWink />
            </h4>
            <p>
              인생의 대부분을 직장에서 보내게 되는만큼 직업을 단순한 돈벌이 수단으로 삼지 않아야합니다.
              <br /> 그렇기에 저는 항상{" "}
              <strong>스스로도 인정할수 있는 실력있는 직업인</strong>이 되고자
              노력합니다. <br />
              그저 일터에서 시간만 죽이는 회사원이 아닌, 꾸준한 성과로 인정받는
              <b> 함께 일하고 싶은 동료</b>가 되겠습니다.
            </p>
          </div>
        </Comments>
        <NextBtn text={"What I Can"} onClick={onClick} />
      </div>
    </Wrapper>
  );
};

export default Profile;
