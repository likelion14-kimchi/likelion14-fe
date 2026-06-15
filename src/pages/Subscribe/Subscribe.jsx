import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import TopSection from "../../components/topSection/TopSection";
import CollabSection from "./CollabSection";
import SessionSection from "./SessionSection";

import letterImage from "../../assets/images/letter.svg";
import backButtonImage from "../../assets/images/backButton.svg";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <BackButton
        type="button"
        onClick={() => navigate("/")}
        aria-label="홈으로 이동"
      >
        <BackIcon src={backButtonImage} alt="" />
      </BackButton>

      <TopSection
        smallText="매주 만나는"
        highlightText="멋쟁이사자"
        normalText="뉴스레터."
        images={[
          {
            src: letterImage,
            width: 300,
            x: 50,
            y: -40,
          },
        ]}
      />

      <CollabSection />
      <SessionSection />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  top: clamp(32px, 4vw, 50px);
  left: clamp(32px, 4vw, 60px);
  z-index: 10;

  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
`;

const BackIcon = styled.img`
  width: clamp(16px, 2vw, 20px);
  height: auto;
  display: block;
`;
