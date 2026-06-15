import styled from "styled-components";
import CollabCard from "../../components/collabCard/CollabCard";

export default function CollabSection() {
  return (
    <Wrapper>
      <TitleBox>
        <Title>Q2</Title>

        <Dot>
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </Dot>

        <Title>협업, 어떻게 하나요?</Title>
      </TitleBox>

      <CardBox>
        <CollabCard title="Component" />
        <CollabCard title="Teamwork" />
        <CollabCard title="Milestone" />
      </CardBox>

      <DescriptionBox>
        <p>우선, 비슷한 디자인과 기능을 하는 최소 단위를 찾는 것이 중요해요!</p>
        <p>
          팀원끼리 <strong>컴포넌트</strong>를 분담하고 작업하는 걸 추천합니다.
        </p>
        <p>
          당연히, <strong>팀워크</strong> 요소도 빠질 수 없겠죠?
        </p>
        <p>
          브랜치나 함수 명명 규칙, 협업 전략에 대해 고민하는 시간을 가져야
          합니다!
        </p>
        <p>
          <strong>마일스톤</strong>을 철저히 지키고 의견 공유를 하는 것도
          중요한데요,
        </p>
        <p>
          특히, 퍼블리싱과 <strong>API 연동</strong>을 하는 팀이 촉박할 수
          있어서 부지런해야 합니다.
        </p>
      </DescriptionBox>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Pretendard Variable", sans-serif;
`;

const TitleBox = styled.div`
  margin-top: clamp(80px, 8vw, 120px);
  margin-bottom: clamp(80px, 8vw, 120px);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  color: #4a25ed;
  font-size: clamp(40px, 6vw, 75px);
  font-weight: 600;
  word-break: keep-all;
  text-align: center;
`;

const Dot = styled.div`
  margin-top: 10px;
  margin-bottom: clamp(50px, 6vw, 100px);

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #4a25ed;
  font-size: clamp(40px, 6vw, 80px);
  line-height: 0.4;
`;

const CardBox = styled.div`
  width: 100%;
  padding: 0 24px;

  display: flex;
  justify-content: center;
  gap: clamp(20px, 4vw, 62px);

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const DescriptionBox = styled.div`
  width: min(1100px, 90%);

  margin-top: clamp(80px, 10vw, 200px);
  margin-bottom: clamp(80px, 10vw, 200px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(20px, 3vw, 50px);

  color: black;
  font-size: clamp(16px, 2vw, 30px);
  font-weight: 500;
  text-align: center;

  p {
    margin: 0;
    line-height: 1.6;
    word-break: keep-all;
  }
`;
