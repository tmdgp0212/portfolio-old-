import styled from "styled-components";
import { FaExternalLinkAlt, FaExpandAlt } from "react-icons/fa";
import Modal from "./Modal";
import React, { useCallback, useRef } from "react";

const ProjectBox = styled.div`
  display: none;
  cursor: default;

  &.show {
    display: flex;

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  > .frame {
    position: relative;
    width: 560px;
    height: 300px;
    background-image: url(./assets/projects/bg_macbook.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media screen and (max-width: 640px) {
      width: 480px;
      height: 250px;
    }

    > img {
      position: absolute;
      top: 21px;
      left: 64px;
      width: 437px;
      height: 240px;
      border-radius: 3px;

      @media screen and (max-width: 640px) {
        top: 18px;
        left: 61px;
        width: 364px;
        height: 200px;
      }
    }
  }

  > .desc {
    flex: 1;
    padding: 0 25px;
    font-family: "Pretendard-Regular";

    @media screen and (max-width: 1200px) {
      padding: 25px;
      text-align: center;
    }

    > h4 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    > .skills {
      display: flex;
      align-items: center;
      margin: 10px 0;

      @media screen and (max-width: 1200px) {
        justify-content: center;
      }

      > ul {
        display: flex;

        > li {
          margin: 0 5px;
          padding: 2px 10px;
          font-size: 12px;
          background-color: #bcaa9090;
          border-radius: 10px;

          cursor: pointer;
        }
      }
    }

    > p {
      margin: 20px 0 10px;
      min-height: 100px;
      word-break: keep-all;

      > span {
        display: block;
        color: darkred;
      }
    }
  }
`;

const MyButton = styled.a`
  background: none;
  outline: none;
  border: none;

  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  color: #fff;
  font-size: 14px;
  font-family: "Pretendard-Regular";
  background-color: #3f2e1c;
  border-radius: 45px;
  transition: all 0.3s;

  &:link,
  &:visited {
    color: #fff;
  }

  &:hover {
    color: #3f2e1c;
    background-color: #bcaa9090;
  }

  > svg {
    font-size: 12px;
  }
`;

const Project = ({ name, title, url, skill, factoring, children }) => {
  const modalRef = useRef();

  const openModal = useCallback(() => {
    modalRef.current.style.display = "flex";
  }, []);

  return (
    <ProjectBox bg={name}>
      <div className="frame">
        <img
          src={`${process.env.PUBLIC_URL}/assets/projects/${name}.gif`}
          alt={name}
        />
      </div>
      <div className="desc">
        <h4>{title}</h4>
        <div className="skills">
          <p>작업프로그램 :</p>
          <ul>
            {skill.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
        <div className="skills">개인작업 100%</div>
        <p>
          {factoring ? <span>~현재 작업중인 페이지입니다.~</span> : null}
          {children}
        </p>
        <MyButton as={"button"} onClick={openModal}>
          핵심기능 Preview <FaExpandAlt />
        </MyButton>
        <MyButton href={url} rel="noreferrer" target="_blank">
          페이지 바로가기 <FaExternalLinkAlt />
        </MyButton>
      </div>
      <Modal name={name} url={url} ref={modalRef} />
    </ProjectBox>
  );
};

export default React.memo(Project);
