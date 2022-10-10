import styled from "styled-components";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectBox = styled.div`
  display: none;
  cursor: default;

  &.show {
    display: flex;
  }

  > .frame {
    position: relative;
    width: 560px;
    height: 300px;
    background-image: url(./assets/projects/bg_macbook.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    > img {
      position: absolute;
      top: 21px;
      left: 64px;
      width: 437px;
      height: 240px;
      border-radius: 3px;
    }
  }

  > .desc {
    flex: 1;
    padding: 25px;
    font-family: "Pretendard-Regular";

    > h4 {
      font-size: 24px;
    }

    > .skills {
      display: flex;
      align-items: center;
      margin: 10px 0 20px;

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
      min-height: 100px;
      word-break: keep-all;
    }

    > a {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      color: #fff;
      background-color: #3f2e1c;
      border-radius: 45px;
      transition: all 0.3s;

      > svg {
        font-size: 12px;
      }

      &:hover {
        color: #3f2e1c;
        background-color: #bcaa9090;
      }
    }
  }
`;

const Project = ({ name, title, url, skill, children }) => {
  return (
    <ProjectBox bg={name}>
      <div className="frame">
        <img src={`${process.env.PUBLIC_URL}/assets/projects/${name}.gif`} />
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
        <p>{children}</p>
        <a href={url} target="_blank">
          페이지 바로가기 <FaExternalLinkAlt />
        </a>
      </div>
    </ProjectBox>
  );
};

export default Project;
