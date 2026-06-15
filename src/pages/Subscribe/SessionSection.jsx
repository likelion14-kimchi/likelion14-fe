import styled from 'styled-components';

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