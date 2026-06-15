import styled from "styled-components";

export default function TopSection({
  smallText,
  highlightText,
  normalText,
  images = [],
}) {
  return (
    <Wrapper>
      <TextBox>
        <SmallText>{smallText}</SmallText>

        <Title>
          <Highlight>{highlightText}</Highlight> {normalText}
        </Title>
      </TextBox>

      <ImageContainer>
        {images.map((image, idx) => (
          <Image
            key={idx}
            src={image.src}
            alt=""
            $width={image.width}
            $x={image.x}
            $y={image.y}
          />
        ))}
      </ImageContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  min-height: 700px;
  background-color: #4a25ed;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Pretendard Variable", sans-serif;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 560px;
  }
`;

const TextBox = styled.div`
  text-align: center;
  margin-top: 100px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const SmallText = styled.p`
  margin: 0;

  color: white;
  font-size: clamp(24px, 4vw, 40px);
  font-weight: 600;
`;

const Title = styled.h1`
  margin: 20px 0 0;

  color: white;
  font-size: clamp(40px, 7vw, 72px);
  font-weight: 700;
  line-height: 1.15;
`;

const Highlight = styled.span`
  color: #ff8bd4;
`;

const ImageContainer = styled.div`
  position: relative;

  width: min(400px, 90vw);
  height: 220px;

  margin-top: 80px;

  @media (max-width: 768px) {
    height: 180px;
    margin-top: 60px;
  }
`;

const Image = styled.img`
  position: absolute;

  width: ${({ $width }) => $width}px;
  max-width: 100%;
  height: auto;

  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;

  @media (max-width: 768px) {
    width: ${({ $width }) => $width * 0.75}px;
    left: ${({ $x }) => $x * 0.75}px;
    top: ${({ $y }) => $y * 0.75}px;
  }
`;
