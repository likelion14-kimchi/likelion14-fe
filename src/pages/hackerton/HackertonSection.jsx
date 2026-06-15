import styled from "styled-components";
import Button from "../../components/button/Button";

import hackertonImage from "../../assets/images/human.svg";

export default function HackertonSection() {
  const hackertonList = [
    "팀원과 인사를 나누어 보아요, 백엔드와 PO 트랙과도 꼭 친해지기!",
    "기획에 대한 아이디어를 마음껏 공유해 보아요, 건전한 논쟁은 언제나 환영!",
    "개발 분담을 본격적으로 시작해 보아요, 개발 세팅도 꼼꼼하게!",
    "퍼블리싱 이후에는 API 연동을 해 보아요, 애매하면 무조건 팀원에게 물어보기!",
  ];

  return (
    <Wrapper>
      <Dots>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </Dots>

      <Title>해커톤을 대비하며,</Title>

      <ImageBox>
        <CharacterImage src={hackertonImage} alt="해커톤 캐릭터" />
      </ImageBox>

      <ListBox>
        {hackertonList.map((item, index) => (
          <ListItem key={index}>
            {index + 1}. {item}
          </ListItem>
        ))}
      </ListBox>

      <ButtonBox>
        <Button buttonName="구독하기" $active={false} />
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  background: #fbf7ff;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: clamp(70px, 8vw, 100px) 24px clamp(80px, 10vw, 120px);
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #4a25ed;
    font-size: clamp(32px, 4vw, 50px);
    line-height: 0.7;
  }
`;

const Title = styled.h2`
  margin-top: 20px;

  color: #4a25ed;
  font-size: clamp(38px, 6vw, 75px);
  font-weight: 600;
  text-align: center;
`;

const ImageBox = styled.div`
  width: min(1000px, 90%);
  height: clamp(220px, 28vw, 347px);

  margin-top: clamp(32px, 5vw, 50px);

  background: #ffffff;
  border-radius: 12px;

  position: relative;
  overflow: hidden;
`;

const CharacterImage = styled.img`
  position: absolute;

  left: 50%;
  bottom: -25px;

  transform: translateX(-50%);

  width: clamp(220px, 24vw, 300px);
  height: auto;

  object-fit: contain;
`;

const ListBox = styled.div`
  width: min(1100px, 90%);

  margin-top: clamp(48px, 7vw, 80px);

  display: flex;
  flex-direction: column;
  gap: clamp(18px, 3vw, 28px);
`;

const ListItem = styled.div`
  width: 100%;
  min-height: clamp(80px, 9vw, 120px);

  background: #ffffff;
  border-radius: 8px;

  display: flex;
  align-items: center;

  padding: 0 clamp(20px, 4vw, 40px);

  font-size: clamp(16px, 2vw, 28px);
  font-weight: 400;
  color: #111;

  word-break: keep-all;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #cdc1ff;
    color: #ffffff;
  }
`;

const ButtonBox = styled.div`
  margin-top: clamp(50px, 7vw, 80px);
`;
