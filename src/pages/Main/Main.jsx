import Button from "../../components/button/Button";
import styled from "styled-components";

export default function Main() {
  return (
    <Wrapper>
      <ButtonBox>
        <Button buttonName="구독하기" $active={false} />
      </ButtonBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 135px;
  
  display: flex;
  justify-content: center;
  width: 100%;
`;