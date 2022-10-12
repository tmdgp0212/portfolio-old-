import styled from "styled-components";
import { motion } from "framer-motion";

const MySkill = styled.div`
    display: flex;
    align-items: center;

    > .icon {
        width: 60px;
        margin-right: 10px;

        > img {
            display: block;
            width: 100%;
        } //img
    } //.icon

    > .bar {
        flex: 1;
        height: 20px;
        font-family: "Pretendard-Regular";
        text-align: right;
        line-height: 22px;
        background-color: #eee;

        cursor: default;

        @media screen and (max-width: 1200px) {
            height: 18px;
        }

        > .gage {
            display: block;
            height: 100%;
            background-color: #3f2e1c;
            transition: all 1s;
        } //.gage
    } //.bar
`;

const Skill = ({ skill, per }) => {
    return (
        <MySkill>
            <div className="icon">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/skill/${skill}.png`}
                    alt={skill}
                />
            </div>
            <div className="bar">
                <motion.span
                    className="gage"
                    initial={{ width: 0 }}
                    animate={{ width: `${per}%` }}
                ></motion.span>
                {per}%
            </div>
        </MySkill>
    );
};

export default Skill;
