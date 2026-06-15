import styled from 'styled-components';

export default function Button({ buttonName, onClick}) {
    return (
        <StyledButton onClick={onClick}>
            {buttonName}
        </StyledButton>
    );
}
const StyledButton = styled.button`
    width : 350px;
    height : 110px;
    
    background-color: #FFFFFF;
    color: #4A25ED;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 55px;
    border: 2px solid #4A25ED;

    font-size: 35px;
    font-family: Pretendard Variable;
    font-weight: 500;

    cursor: pointer;

     &:hover {
        background-color: #4A25ED;
        color: #FFFFFF;
    }
 `;