import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return( 
        <Wrapper>
                <TitleText>skunivlikelion</TitleText>

            <MenuContainer>
                <Divider />
                <MenuText onClick={() => navigate("/")}> 홈 </MenuText>
                <MenuText> 구독하기</MenuText> 
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
`;
const MenuContainer = styled.div`
    position: absolute;
    right: 160px;
    
    display: flex;
    align-items: center;
    gap: 60px;
`;

const TitleText = styled.div`
    color: #4A25ED;
    font-size: 25px;
    font-family: Pretendard Variable;
    font-weight: 300;
    word-wrap: break-wor
`;
const MenuText = styled.div`
    color: #4A25ED;
    font-size: 30px;
    font-family: Pretendard Variable;
    font-weight: 300;
    word-wrap: break-word
`;

const Divider = styled.div`
    width: 1px;
    height: 50px;
    background-color: #4A25ED;

    margin-right: 30px;
`;
