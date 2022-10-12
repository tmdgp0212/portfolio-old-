import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { GoMarkGithub, GoMail } from "react-icons/go";
import { useRef } from "react";

const MyHeader = styled.header`
  position: fixed;
  width: 100vw;
  border-bottom: 1px solid #e0d8ce;
  background-color: #ebe4dcaf;
  backdrop-filter: blur(15px);

  z-index: 500;

  > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 66px;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (max-width: 1200px) {
      width: 768px;
    }

    @media screen and (max-width: 768px) {
      width: 640px;
    }

    @media screen and (max-width: 640px) {
      position: relative;
      width: 100vw;
      margin: 0;
    }

    > h1 {
      width: 180px;
      height: 40px;
      font-size: 24px;
      font-family: "InkLipquid";
      text-align: center;

      @media screen and (max-width: 768px) {
        width: 150px;
      }
    }

    > nav {
      @media screen and (max-width: 640px) {
        width: 25px;
        height: 20px;
        background: rgb(63, 46, 28);
        background: linear-gradient(
          180deg,
          rgba(63, 46, 28, 1) 0%,
          rgba(63, 46, 28, 1) 20%,
          rgba(255, 255, 255, 0) 20%,
          rgba(255, 255, 255, 0) 40%,
          rgba(63, 46, 28, 1) 40%,
          rgba(63, 46, 28, 1) 60%,
          rgba(63, 46, 28, 0) 60%,
          rgba(63, 46, 28, 0) 80%,
          rgba(63, 46, 28, 1) 80%,
          rgba(63, 46, 28, 1) 100%,
          rgba(63, 46, 28, 1) 100%,
          rgba(63, 46, 28, 1) 100%
        );

        cursor: pointer;
      }

      > ul {
        display: flex;

        @media screen and (max-width: 640px) {
          display: none;
          position: absolute;
          top: 66px;
          left: 0;
          flex-direction: column;
          background-color: #bcaa90;
        }

        > li {
          @media screen and (max-width: 640px) {
            width: 100vw;
            text-align: center;

            &:nth-child(1) {
              border-top: 1px solid #3f2e1c;
            }

            &:hover {
              > a {
                font-weight: 600;
              }
            }
          }

          > a {
            display: block;
            position: relative;
            margin: 0 5px;
            padding: 10px 15px;

            @media screen and (max-width: 768px) {
              padding: 10px 12px;
            }

            @media screen and (max-width: 640px) {
              position: initial;
              margin: 0;
              padding: 15px 0;
              color: #3f2e1c;
              border-bottom: 1px solid #3f2e1c;
            }

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

      @media screen and (max-width: 1200px) {
        display: none;
      }

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

const Header = () => {
  const navRef = useRef();

  const onClick = () => {
    if (window.innerWidth > 640) {
      return;
    } else {
      if (navRef.current.style.display === "block") {
        navRef.current.style.display = "none";
      } else {
        navRef.current.style.display = "block";
      }
    }
  };
  return (
    <MyHeader>
      <div className="container">
        <h1>
          <Link to="/">Seunghye Portfolio</Link>
        </h1>

        <nav onClick={onClick}>
          <ul ref={navRef}>
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
          <a
            href={"https://github.com/tmdgp0212"}
            rel="noreferrer"
            target="_blank"
          >
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
