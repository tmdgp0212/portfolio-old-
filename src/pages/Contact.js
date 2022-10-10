import styled from "styled-components";
import Header from "../components/Header";

import {
  FiPhone,
  FiMail,
  FiGithub,
  FiInstagram,
  FiMessageCircle,
} from "react-icons/fi";

const Wrapper = styled.section`
  width: 100vw;

  > .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > h3 {
      margin-bottom: 50px;
      font-size: 36px;
    }

    > .flex-box {
      display: flex;
      margin-bottom: 50px;

      > .contact-box {
        width: 400px;
        margin: 0 20px;
        padding: 25px;
        font-family: "Pretendard-Regular";
        background-color: #d0c3b1;
        border-radius: 5px;

        > p {
          margin-bottom: 50px;
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
            font-size: 18px;

            border-radius: 5px;
            transition: all 0.2s;

            &:hover {
              color: #fff;
              background-color: #3f2e1c;
            }

            > svg {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;

const Contact = () => {
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
              <a href="https://open.kakao.com/o/siU8O7Ge">
                <FiMessageCircle />
                kakao chat
              </a>
            </div>
          </div>

          <div className="contact-box">
            <p>저에 대해 더 알고싶나요?</p>
            <span>See more</span>
            <div className="contact-link">
              <a href="https://github.com/tmdgp0212" target="_blank">
                <FiGithub />
                tmdgp0212 github
              </a>
              <a href="https://www.instagram.com/gnues.eyh/" target={"_blank"}>
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
