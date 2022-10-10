import styled, { keyframes } from "styled-components";

const outline = keyframes`
    0% {
        outline-offset: 0;
        }
    100% {
        outline-offset: 5px;
    }
    `;

const Button = styled.button`
  border: none;
  background: none;

  padding: 10px 20px;
  color: #fff;
  font-size: 22px;
  font-family: "SunBatang-Light";
  background-color: #3f2e1c;
  outline: 1px solid #3f2e1c;
  border-radius: 5px;
  box-shadow: 0 0 10px #eee;

  animation: ${outline} 0.8s ease-out infinite;
  transition: all 0.5s;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    color: #3f2e1c;
    background-color: #edded7;
    outline: 1px solid #3f2e1c;
    outline-offset: 5px;
  }

  > .arr {
    margin-left: 5px;
  }
`;

const NextBtn = ({ text, onClick }) => {
  return (
    <Button onClick={onClick}>
      <span className="text">{text}</span>
      <span className="arr">&rarr;</span>
    </Button>
  );
};

export default NextBtn;
