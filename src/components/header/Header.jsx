import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <TitleText>skunivlikelion</TitleText>

      <MenuContainer>
        <Divider />

        <MenuButton
          $active={location.pathname === "/"}
          onClick={() => navigate("/")}
        >
          홈
        </MenuButton>

        <MenuButton
          $active={location.pathname === "/subscribe"}
          onClick={() => navigate("/subscribe")}
        >
          구독하기
        </MenuButton>
      </MenuContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  padding: 0 24px;

  font-family: "Pretendard Variable", sans-serif;
`;

const TitleText = styled.h1`
  margin: 0;

  color: #4a25ed;
  font-size: clamp(18px, 2vw, 25px);
  font-weight: 300;
`;

const MenuContainer = styled.div`
  position: absolute;
  right: clamp(24px, 8vw, 160px);

  display: flex;
  align-items: center;
  gap: clamp(20px, 4vw, 60px);
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;
  padding: 0;

  color: #4a25ed;
  font-size: clamp(18px, 2.2vw, 30px);
  font-family: inherit;
  font-weight: ${({ $active }) => ($active ? 700 : 300)};

  cursor: pointer;
`;

const Divider = styled.div`
  width: 1px;
  height: clamp(32px, 4vw, 50px);

  background-color: #4a25ed;

  margin-right: clamp(8px, 2vw, 30px);
`;
