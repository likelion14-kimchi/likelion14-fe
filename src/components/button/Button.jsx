import styled from "styled-components";

export default function Button({ buttonName, onClick }) {
  return <StyledButton onClick={onClick}>{buttonName}</StyledButton>;
}

const StyledButton = styled.button`
  width: clamp(220px, 30vw, 350px);
  height: clamp(70px, 10vw, 110px);

  background-color: #ffffff;
  color: #4a25ed;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #4a25ed;
  border-radius: 999px;

  font-size: clamp(20px, 3vw, 35px);
  font-weight: 500;
  font-family: inherit;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  &:hover {
    background-color: #4a25ed;
    color: #ffffff;
  }
`;
