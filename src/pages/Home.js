import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import NextBtn from "../components/NextBtn";

const fadeAni1 = keyframes`
    0%{
        transform: translate(-25px, 0);
        opacity: 0;
    }
    100%{
        transform: translate(0, 0);
        opacity: 1;
        }
`;

const fadeAni2 = keyframes`
    0%{
        transform: translate(-25px, 0);
        opacity: 0;
    }
    40%{
        transform: translate(-25px, 0);
        opacity: 0;
    }
    100%{
        transform: translate(0, 0);
        opacity: 1;
        }
`;

const circleAni = keyframes`
    0%{
        transform: rotate(0);
        border-radius  : 220px 100px 200px 100px;
    }
    20%{
        border-radius  : 120px 230px 120px 210px;
    } 
    40%{
        border-radius  : 240px 300px 160px 190px;
    }
    60%{
        border-radius  : 260px 190px 280px 160px;
    }
    80%{
        border-radius  : 100px 200px 140px 200px;
    }
    100%{
        transform: rotate(360deg);
        border-radius  : 220px 100px 200px 100px;
    }
`;

const HomeWrapper = styled.section`
  position: relative;
  min-width: 100vw;
  height: 100vh;
  background-image: url(./assets/wallpaper.jpg);
  background-size: cover;
  z-index: 0;

  > .container {
    position: relative;
    height: 100vh;

    > .greeting {
      position: absolute;
      top: 50%;
      left: 20%;
      margin-top: -54px;
      cursor: default;

      > h2 {
        position: relative;
        font-size: 54px;

        z-index: 100;

        > .top {
          display: block;
          animation: ${fadeAni1} 2s;
        }

        > .btm {
          display: block;
          animation: ${fadeAni2} 2s;
        }

        > b {
          position: absolute;
          top: -30px;
          right: 0px;
          font-size: 24px;
          font-weight: 200;
          animation: ${fadeAni2} 3s;
        }
      }
    } //.greeting

    > .circle {
      position: absolute;
      top: 50%;
      left: 80px;
      width: 200px;
      height: 180px;
      margin-top: -180px;

      background-color: #fffa;

      animation: ${circleAni} 13s ease-in-out infinite;

      z-index: 0;

      &::after {
        display: block;
        width: 200px;
        height: 180px;
        border: 1px solid #231f1caa;
        border-radius: 220px 100px 200px 100px;

        content: "";

        animation: ${circleAni} 13s 1.5s ease-in-out infinite;
      }
    }

    > button {
      position: absolute;
      bottom: 20%;
      right: 10%;
    }
  }

  > .deco {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 45vw;
    height: 100vh;
    background-color: #d5d1c6;
    z-index: -1;

    &::after {
      display: block;
      position: absolute;
      right: -299px;
      width: 300px;
      height: 100vh;
      background-image: url(./assets/homedeco.png);
      background-repeat: no-repeat;

      content: "";
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/profile");
  };
  return (
    <HomeWrapper>
      <div className="container">
        <div className="greeting">
          <h2>
            <b>Frontend developer</b>
            <span className="top">끊임없이 성장하는 개발자.</span>
            <span className="btm">조승혜입니다.</span>
          </h2>
        </div>

        <NextBtn text={"Profile"} onClick={onClick} />

        <div className="circle"></div>
      </div>
      <span className="deco"></span>
    </HomeWrapper>
  );
};

export default Home;