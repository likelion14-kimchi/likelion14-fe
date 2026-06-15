import styled from 'styled-components';
import CollabCard from "../../components/collabCard/CollabCard";
import humanImage from "../../assets/images/human.png";
import Button from "../../components/button/Button";

import { useState } from 'react';

export default function CollabSection() {
    const [page, setPage] = useState(1);
    const sessionData = [
        ["1주차 세션", "2주차 세션", "3주차 세션"],
        ["4주차 세션", "5주차 세션", "6주차 세션"],
        ["7주차 세션", "8주차 세션", "9주차 세션"]
    ];
    const handleNextPage = () => {
        setPage((prevPage) => (prevPage < sessionData.length ? prevPage + 1 : 1));
    };
    const handlePrevPage = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : sessionData.length));
    };

    return (
        <Wrapper>
            <TitleBox>
                <Dot>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </Dot>
                <Title>이전 세션 자료들을 복습해요!</Title>
            </TitleBox>

            <HumanBox>
                <img src={humanImage} alt="Human" />
            </HumanBox>
            <CardBox>
                 <ArrowButton onClick={handlePrevPage} $hidden={page === 1}>‹</ArrowButton>
                {sessionData[page - 1].map((session) => (
                    <CollabCard key={session} title={session} backgroundColor='#FFFFFF' />
                ))}
                <ArrowButton onClick={handleNextPage} $hidden={page === sessionData.length}>›</ArrowButton>
            </CardBox>
            <ButtonBox>
                <Button buttonName="가입하기 " onClick={() => { window.open('https://skulikelion.com', '_blank'); }} />
            </ButtonBox>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color : #FDF9FF;
`;
const TitleBox = styled.div`
    margin-top: 120px;
    margin-bottom: 120px;
`;
const CardBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 62px;
`;
const HumanBox = styled.div`
    width: 1000px;
    height: 350px;

    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 120px;
`;
const ButtonBox = styled.div`
  margin-top: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;
const ArrowButton = styled.button`
    border: none;
    background: none;

    color: #4A25ED;
    font-size: 80px;
    cursor: pointer;

    visibility: ${({ $hidden }) => ($hidden ? "hidden" : "visible")};
`;
const Title = styled.div`
    color: #4A25ED;
    font-size: 75px;
    font-family: Pretendard Variable;
    font-weight: 600;
    word-wrap: break-word
`;
const Dot = styled.div`
    margin-top: 10px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: #4A25ED;
    font-size: 80px;
    line-height: 30px;
`;