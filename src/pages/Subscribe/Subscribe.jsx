import styled from "styled-components";
import Button from "../../components/button/Button";
import TopSection from "../../components/topSection/TopSection";

import letterImage from "../../assets/images/letter.svg";
import wheelImage from "../../assets/images/wheelImage.svg";

export default function Main() {
  return (
    <Wrapper>
      <TopSection
        smallText="매주 만나는"
        highlightText="멋쟁이사자"
        normalText="뉴스레터."
        images={[
          {
            src: letterImage,
            width: 420,
            x: -40,
            y: -80,
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
