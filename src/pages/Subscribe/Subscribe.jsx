import styled from "styled-components";
import TopSection from "../../components/topSection/TopSection";
import CollabSection from "./CollabSection";
import SessionSection from "./SessionSection";

import letterImage from "../../assets/images/letter.svg";
import wheelImage from "../../assets/images/wheelImage.svg";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <BackButton onClick={() => navigate("/")}>‹</BackButton>
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
      <SessionSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const BackButton = styled.div`
  position: absolute;
  top: 50px;
  left: 75px;
  font-size: 70px;
  color: #ffffff;

  cursor: pointer;
`;
