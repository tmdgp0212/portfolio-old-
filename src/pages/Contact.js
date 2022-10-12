import styled from "styled-components";
import Header from "../components/Header";

import {
  FiPhone,
  FiMail,
  FiGithub,
  FiInstagram,
  FiMessageCircle,
} from "react-icons/fi";
import { useEffect } from "react";

const Wrapper = styled.section`
  > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    @media screen and (max-width: 1200px) {
      height: auto;
    }

    > h3 {
      margin-bottom: 50px;
      font-size: 36px;

      @media screen and (max-width: 1200px) {
        margin-top: 50px;
      }
    }

    > .flex-box {
      display: flex;
      margin-bottom: 50px;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
      }

      > .contact-box {
        width: 400px;
        margin: 0 20px;
        padding: 25px;
        font-family: "Pretendard-Regular";
        background-color: #d8cfc2;
        border-radius: 5px;

        @media screen and (max-width: 1200px) {
          margin: 20px 0;
        }

        > p {
          margin-bottom: 50px;
          color: #000;
          font-weight: 600;
          font-size: 22px;
          font-family: "SunBatang-Light";
          letter-spacing: -2px;
          cursor: default;
        }

        > .contact-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 150px;
          margin-top: 20px;

          > a {
            display: flex;
            align-items: center;
            margin: 3px 0;
            padding: 10px 20px;
            color: #3f2e1c;
            font-size: 18px;

            border-radius: 5px;
            transition: all 0.2s;

            &:hover {
              color: #fff;
              background-color: #3f2e1c;
            }

            > svg {
              margin-right: 10px;
              font-size: 22px;
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Wrapper>
      <Header />
      <div className="container">
        <h3>Thank you</h3>

        <div className="flex-box">
          <div className="contact-box">
            <p>제 포트폴리오가 마음에 드셨나요?</p>
            <span>Contact me on</span>
            <div className="contact-link">
              <a className="tel" href="tel:010-5390-3029">
                <FiPhone />
                010.5390.3029
              </a>
              <a className="mail" href="mailto:tmdgp0212@naver.com">
                <FiMail />
                tmdgp0212@naver.com
              </a>
              <a
                href="https://open.kakao.com/o/siU8O7Ge"
                rel="noreferrer"
                target={"_blank"}
              >
                <FiMessageCircle />
                kakao chat
              </a>
            </div>
          </div>

          <div className="contact-box">
            <p>저에 대해 더 알고싶나요?</p>
            <span>See more</span>
            <div className="contact-link">
              <a
                href="https://github.com/tmdgp0212"
                rel="noreferrer"
                target={"_blank"}
              >
                <FiGithub />
                tmdgp0212 github
              </a>
              <a
                href="https://www.instagram.com/gnues.eyh/"
                rel="noreferrer"
                target={"_blank"}
              >
                <FiInstagram />
                @gnues.eyh
              </a>
            </div>
          </div>
        </div>
        <address>&copy;2022. Jo seung-hye. All rights reserved.</address>
      </div>
    </Wrapper>
  );
};

export default Contact;
