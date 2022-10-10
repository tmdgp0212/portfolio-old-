import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import { GoMarkGithub, GoMail } from "react-icons/go";

const MyHeader = styled.header`
  position: fixed;
  width: 100vw;
  border-bottom: 1px solid #e0d8ce;
  background-color: #ebe4dcaf;
  backdrop-filter: blur(15px);

  z-index: 1000;

  > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 66px;
    margin: 0 auto;
    padding: 0 20px;

    > h1 {
      width: 180px;
      height: 40px;
      font-size: 24px;
      font-family: "InkLipquid";
      text-align: center;
    }

    > nav {
      > ul {
        display: flex;

        > li {
          > a {
            position: relative;
            margin: 0 5px;
            padding: 10px 15px;

            &:after {
              content: "";
              display: inline-block;
              position: absolute;
              left: 0;
              bottom: 8px;
              width: 0;
              height: 12px;
              background: #bcaa9090;
              transition: 0.2s all;
              z-index: -1;
            }

            &.active,
            &:hover {
              &:after {
                width: 100%;
              }
            }
          } //a
        } //li
      } //ul
    } //nav

    > .contact {
      display: flex;
      width: 180px;
      justify-content: flex-end;

      > a {
        display: flex;
        align-items: center;
        padding: 0 20px;

        > svg {
          margin-right: 3px;
        }
      }
    }
  } //.container
`;

const Header = () => {
  const categories = [
    {
      name: "profile",
      text: "Profile",
    },
    {
      name: "whatican",
      text: "What I Can",
    },
    {
      name: "whatimade",
      text: "What I Made",
    },
    {
      name: "contact",
      text: "Contact",
    },
  ];

  return (
    <MyHeader>
      <div className="container">
        <h1>
          <Link to="/">Seunghye Portfolio</Link>
        </h1>

        <nav>
          <ul>
            {categories.map((c) => (
              <li key={c.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                  to={c.name === "home" ? "/" : `/${c.name}`}
                >
                  {c.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contact">
          <a href={"https://github.com/tmdgp0212"} target="_blank">
            <GoMarkGithub /> github
          </a>
          <a href={"mailto:tmdgp0212@naver.com"}>
            <GoMail /> mail
          </a>
        </div>
      </div>
    </MyHeader>
  );
};

export default Header;
