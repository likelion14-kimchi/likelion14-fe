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
`;

const TextBox = styled.div`
  text-align: center;
  margin-top: 100px;
`;

const SmallText = styled.p`
  margin: 0;

  color: white;
  font-size: 40px;
  font-weight: 600;
`;

const Title = styled.h1`
  margin: 20px 0 0;

  color: white;
  font-size: 72px;
  font-weight: 700;
`;

const Highlight = styled.span`
  color: #ff8bd4;
`;

const ImageContainer = styled.div`
  position: relative;

  width: 400px;
  height: 220px;

  margin-top: 80px;
`;

const Image = styled.img`
  position: absolute;

  width: ${({ $width }) => $width}px;
  height: auto;

  left: ${({ $x }) => $x}px;
  top: ${({ $y }) => $y}px;
`;
