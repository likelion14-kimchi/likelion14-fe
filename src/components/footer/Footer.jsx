import styled from "styled-components";
import iconurl from "../../assets/images/SKON.png";
import copyRighturl from "../../assets/images/footerRefer.png";

export default function Footer() {
  return (
    <Wrapper>
      <FooterContainer>
        <Image src={copyRighturl} />
        <IconBox>
          <Icon src={iconurl} />
        </IconBox>
      </FooterContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #1a1a1a;
  background-color: #4a25ed;
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 160px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 24px;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 635px;
  height: auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
