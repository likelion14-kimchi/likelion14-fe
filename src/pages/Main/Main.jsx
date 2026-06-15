import styled from "styled-components";
import Button from "../../components/button/Button";
import TopSection from "../../components/topSection/TopSection";

import buttonImage from "../../assets/images/buttonImage.svg";
import wheelImage from "../../assets/images/wheelImage.svg";

export default function Main() {
  return (
    <Wrapper>
      <TopSection
        smallText="월요일에 만나는"
        highlightText="프론트엔드"
        normalText="한 스푼."
        images={[
          {
            src: buttonImage,
            width: 420,
            x: -40,
            y: -80,
          },
          {
            src: wheelImage,
            width: 140,
            x: 300,
            y: 0,
          },
        ]}
      />

      <ButtonBox>
        <Button buttonName="구독하기" $active={false} />
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 135px;

  display: flex;
  justify-content: center;
  width: 100%;
`;
