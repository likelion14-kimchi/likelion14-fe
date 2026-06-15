import styled from "styled-components";
import Button from "../../components/button/Button";

import jmj1 from "../../assets/images/jmj(1).svg";
import jmj2 from "../../assets/images/jmj(2).svg";
import jsh1 from "../../assets/images/jsh(1).svg";
import jsh2 from "../../assets/images/jsh(2).svg";
import ksm1 from "../../assets/images/ksm(1).svg";
import ksm2 from "../../assets/images/ksm(2).svg";

export default function IntroduceSection() {
  return (
    <Wrapper>
      <QuestionNumber>Q1</QuestionNumber>

      <Dots>
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </Dots>

      <Title>프론트엔드에 대하여</Title>

      <AnswerBox>
        <p>
          안녕하세요! 저희는 멋쟁이사자처럼 14기 프론트엔드 아기사자 장서후,
          김승민입니다.
          <br />
          <br />
          팀명인 <strong>KIMCHI</strong>는 두 팀원의 성인 '김'과 '장'을 합쳐
          떠올린 '김장'에서 착안하여 정하게 되었습니다. 김장이 김치와 연결되는
          만큼 친숙하고 기억하기 쉬운 이름으로 팀을 표현하고자 했습니다.
          <br />
          <br />
          또한 저희 팀의 담당 멘토는 프론트엔드 운영진
          <strong> 정목진</strong> 님입니다.
          <br />
          <br />
          앞으로 다양한 프로젝트와 활동을 통해 많은 것을 배우고 성장하는 팀이
          되겠습니다. 잘 부탁드립니다!
        </p>
      </AnswerBox>

      <CardContainer>
        <ProfileBox>
          <Card>
            <DefaultImage src={jmj1} alt="정목진" />
            <HoverImage src={jmj2} alt="정목진 hover" />
          </Card>

          <Button
            buttonName="정목진 멘토"
            $active={false}
            onClick={() =>
              window.open("https://github.com/Jeongmokjin", "_blank")
            }
          />
        </ProfileBox>

        <ProfileBox>
          <Card>
            <DefaultImage src={jsh1} alt="장서후" />
            <HoverImage src={jsh2} alt="장서후 hover" />
          </Card>

          <Button
            buttonName="FE 장서후"
            $active={false}
            onClick={() => window.open("https://github.com/SoWho-J", "_blank")}
          />
        </ProfileBox>

        <ProfileBox>
          <Card>
            <DefaultImage src={ksm1} alt="김승민" />
            <HoverImage src={ksm2} alt="김승민 hover" />
          </Card>

          <Button
            buttonName="FE 김승민"
            $active={false}
            onClick={() =>
              window.open("https://github.com/seungminng123", "_blank")
            }
          />
        </ProfileBox>
      </CardContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 1000px;
  background: #f5f5f5;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
`;

const QuestionNumber = styled.h2`
  margin: 0;
  color: #4a25ed;
  font-size: 75px;
  font-weight: 600;
`;

const Dots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8px 0 32px;

  span {
    color: #4a25ed;
    font-size: 50px;
    line-height: 0.7;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #4a25ed;
  font-size: 75px;
  font-weight: 600;
`;

const AnswerBox = styled.div`
  width: min(1000px, 85%);
  min-height: 260px;

  margin-top: 60px;
  padding: 40px 50px;

  border-radius: 16px;
  background: #fdf9ff;

  p {
    margin: 0;
    color: #444;
    font-size: 20px;
    line-height: 1.8;
    text-align: left;
    word-break: keep-all;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: clamp(24px, 5vw, 90px);

  width: 100%;
  margin-top: 60px;
  padding: 0 24px;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Card = styled.div`
  position: relative;
  width: clamp(220px, 22vw, 320px);
  height: clamp(280px, 30vw, 400px);
  overflow: hidden;
  cursor: pointer;
`;

const DefaultImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  height: 100%;
  width: auto;
  object-fit: contain;

  transition: opacity 0.2s ease;

  ${Card}:hover & {
    opacity: 0;
  }
`;

const HoverImage = styled.img`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  height: 100%;
  width: auto;
  object-fit: contain;

  opacity: 0;
  transition: opacity 0.2s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;
