import styled from 'styled-components';

export default function Button({ buttonName, onClick, $active }) {
    return (
        <StyledButton onClick={onClick} $active={$active}>
            {buttonName}
        </StyledButton>
    );
}
const StyledButton = styled.button`
    width : 350px;
    height : 110px;
    
    background-color: ${({ $active }) => ($active ? '#4A25ED' : '#FFFFFF')};
    color: ${({ $active }) => ($active ? '#FFFFFF' : '#4A25ED')};
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 55px;
    border: 2px solid #4A25ED;

    font-size: 35px;
    font-family: Pretendard Variable;
    font-weight: 500;

    cursor: pointer;
 `;