import React from "react";
import styled from "styled-components";
import NextBtn from "./NextBtn";

const Preview = styled.div`
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #bcaa907c;
    backdrop-filter: blur(5px);
    z-index: 1000;

    > .content {
        overflow-y: scroll;
        width: 768px;
        height: 88vh;
        padding: 10px;
        background-color: #fff;

        @media screen and (max-width: 768px) {
            width: 100vw;
        }

        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #3f2e1c;
            border-radius: 20px;
        }
        &::-webkit-scrollbar-track {
            background: #eee;
            border-radius: 20px;
        }

        > img {
            width: 100%;
        }

        > .btns {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 40px 50px;

            > button {
                font-family: "Pretendard-Regular";
                font-size: 16px;
            }

            > .close {
                outline: none;
                border: none;

                padding: 10px 20px;
                color: #fff;
                font-family: "Pretendard-Regular";
                background-color: #3f2e1c;
                border-radius: 5px;
            }
        }
    }
`;

const Modal = React.forwardRef(({ name, url }, ref) => {
    const close = (e) => {
        if (e.target !== e.currentTarget) {
            return;
        }
        ref.current.style.display = "none";
    };

    const gopage = () => {
        window.open(url);
    };
    return (
        <Preview ref={ref} onClick={(e) => close(e)}>
            <div className="content">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/projects/${name}.png`}
                    alt={name}
                ></img>
                <div className="btns">
                    <button className="close" onClick={close}>
                        닫기
                    </button>
                    <NextBtn text={"페이지 바로가기"} onClick={gopage} />
                </div>
            </div>
        </Preview>
    );
});

export default Modal;
