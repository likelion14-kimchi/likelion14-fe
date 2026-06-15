import styled from 'styled-components';
import CollabCard from "../../components/collabCard/CollabCard";
import humanImage from "../../assets/images/human.png";
import Button from "../../components/button/Button";

export default function CollabSection() {
    return (
        <Wrapper>
            <TitleBox>
                <Dot>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </Dot>
                <Title>이전 세션 자료들을 복습해요!</Title>
            </TitleBox>

            <HumanBox>
                <img src={humanImage} alt="Human" />
            </HumanBox>
            
            <CardBox>
                <CollabCard title="1주차 세션" backgroundColor="#FFFFFF"/>
                <CollabCard title="2주차 세션" backgroundColor="#FFFFFF"/>
                <CollabCard title="3주차 세션" backgroundColor="#FFFFFF"/>
            </CardBox>

            <ButtonBox>
                <Button buttonName="가입하기 " $active={false} />
            </ButtonBox>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color : #FDF9FF;
`;
const TitleBox = styled.div`
    margin-top: 120px;
    margin-bottom: 120px;
`;
const CardBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 62px;
`;
const HumanBox = styled.div`
    width: 1000px;
    height: 350px;

    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-bottom: 120px;
`;
const ButtonBox = styled.div`
  margin-top: 500px;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;

const Title = styled.div`
    color: #4A25ED;
    font-size: 75px;
    font-family: Pretendard Variable;
    font-weight: 600;
    word-wrap: break-word
`;
const Dot = styled.div`
    margin-top: 10px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: #4A25ED;
    font-size: 80px;
    line-height: 30px;
`;