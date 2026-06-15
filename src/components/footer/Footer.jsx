import styled from "styled-components";

import iconUrl from "../../assets/images/SKON.png";
import copyRightUrl from "../../assets/images/footerRefer.png";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <CopyrightImage src={copyRightUrl} alt="copyright" />
        <Icon src={iconUrl} alt="SKON 로고" />
      </FooterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  width: 100%;
  background-color: #4a25ed;
`;

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  min-height: 160px;

  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 24px;

    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

const CopyrightImage = styled.img`
  width: min(635px, 100%);
  height: auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
