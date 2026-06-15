import styled from "styled-components";
import Button from "../../components/button/Button";
import TopSection from "../../components/topSection/TopSection";
import CollabSection from "./CollabSection";

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
            width: 300,
            x: +50,
            y: -40,
          },
        ]}
      />
      <CollabSection />
      <ButtonBox>
        <Button buttonName="가입하기 " $active={false} />
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ButtonBox = styled.div`
  margin-top: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;
