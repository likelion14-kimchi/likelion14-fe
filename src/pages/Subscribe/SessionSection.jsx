import { useState } from "react";
import styled from "styled-components";

import CollabCard from "../../components/collabCard/CollabCard";
import Button from "../../components/button/Button";

import humanImage from "../../assets/images/human.svg";
import arrowImage from "../../assets/images/arrow.png";

export default function SessionSection() {
  const [page, setPage] = useState(1);

  const sessionData = [
    ["1주차 세션", "2주차 세션", "3주차 세션"],
    ["4주차 세션", "5주차 세션", "6주차 세션"],
    ["7주차 세션", "8주차 세션", "9주차 세션"],
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
          <span>•</span>
          <span>•</span>
          <span>•</span>
        </Dot>

        <Title>이전 세션 자료들을 복습해요!</Title>
      </TitleBox>

      <HumanBox>
        <HumanImage src={humanImage} alt="Human" />
      </HumanBox>

      <CardBox>
        <ArrowButton
          type="button"
          onClick={handlePrevPage}
          $hidden={page === 1}
          $reverse
        >
          <ArrowIcon src={arrowImage} alt="이전 세션" />
        </ArrowButton>

        {sessionData[page - 1].map((session) => (
          <CollabCard key={session} title={session} backgroundColor="#ffffff" />
        ))}

        <ArrowButton
          type="button"
          onClick={handleNextPage}
          $hidden={page === sessionData.length}
        >
          <ArrowIcon src={arrowImage} alt="다음 세션" />
        </ArrowButton>
      </CardBox>

      <ButtonBox>
        <Button
          buttonName="가입하기"
          onClick={() => window.open("https://skulikelion.com", "_blank")}
        />
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

  background-color: #fdf9ff;
  font-family: "Pretendard Variable", sans-serif;
`;

const TitleBox = styled.div`
  margin-top: clamp(80px, 8vw, 120px);
  margin-bottom: clamp(80px, 8vw, 120px);
`;

const Dot = styled.div`
  margin-top: 10px;
  margin-bottom: clamp(60px, 7vw, 100px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  color: #4a25ed;
  font-size: clamp(40px, 6vw, 80px);
  line-height: 30px;
`;

const Title = styled.div`
  color: #4a25ed;
  font-size: clamp(40px, 6vw, 75px);
  font-weight: 600;

  text-align: center;
  word-break: keep-all;
`;

const HumanBox = styled.div`
  width: min(1000px, 90vw);
  height: clamp(220px, 28vw, 350px);

  background-color: #ffffff;

  position: relative;
  overflow: hidden;

  margin-bottom: 120px;
`;

const HumanImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: -25px;

  transform: translateX(-50%);

  width: clamp(220px, 24vw, 300px);
  height: auto;

  object-fit: contain;
`;

const CardBox = styled.div`
  width: 100%;
  padding: 0 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(24px, 4vw, 62px);

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const ArrowButton = styled.button`
  width: clamp(20px, 2vw, 36px);

  border: none;
  background: transparent;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  visibility: ${({ $hidden }) => ($hidden ? "hidden" : "visible")};
  transform: ${({ $reverse }) => ($reverse ? "scaleX(-1)" : "none")};
`;

const ArrowIcon = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ButtonBox = styled.div`
  margin-top: clamp(120px, 20vw, 500px);
  margin-bottom: 120px;

  display: flex;
  justify-content: center;
`;
