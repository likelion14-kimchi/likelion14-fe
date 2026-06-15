import styled from "styled-components";

export default function CollabCard({ title, $ }) {
    return (
        <Card>
            {title}
        </Card>
    );
}

const Card = styled.div`
    width: 350px;
    height: 220px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FDF9FF;
    color: #4A25ED;

    font-size: 35px;
    font-family: Pretendard Variable;
    font-weight: 500;
`;